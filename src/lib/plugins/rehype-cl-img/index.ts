import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import path from 'node:path';

import sharp from 'sharp';
import { visit } from 'unist-util-visit';

import type { Post } from 'contentlayer/generated';
import type { RawDocumentData } from 'contentlayer/source-files';
import type { Element, Root } from 'hast';
import type { Plugin, VFileWithOutput } from 'unified';
import type { VFile } from 'vfile';

import createPlaceholder from './placeholder';

interface FileData {
  rawDocumentData: RawDocumentData;
}

const fileChecksum = async (file: string) => {
  try {
    return checksum(await fs.readFile(file));
  } catch (_) {
    return '';
  }
};

const checksum = (content: Buffer) => {
  return crypto.createHash('sha256').update(content).digest('hex');
};

const findRoot = (file: VFileWithOutput<unknown>) => {
  return file.dirname ?? process.cwd();
};

const findPath = (file: VFileWithOutput<unknown>, image: Element) => {
  const data = file.data as unknown as FileData;

  const directory = data.rawDocumentData.sourceFileDir;
  if (directory && directory !== '.') {
    return path.join(directory, (image.properties?.src as string) || '');
  }

  return (image.properties?.src as string) || '';
};

const copy = async (source: string, sha256sum: string, target: string) => {
  if (sha256sum !== (await fileChecksum(target))) {
    const targetDir = path.dirname(target);

    await fs.mkdir(targetDir, { recursive: true });
    await fs.copyFile(source, target);
  }
};

const metadata = async (
  resourcePath: string,
  source: string,
  pathname: string,
) => {
  const content = await fs.readFile(source);
  const image = sharp(content);

  const { width, height } = await image.metadata();

  if (!width || !height) {
    return null;
  }

  const src = resourcePath + '/' + pathname;

  const sha256 = checksum(content);

  const blurDataURL = await createPlaceholder(image);
  return {
    sha256,
    props: {
      width,
      height,
      src,
      blurDataURL,
    },
  };
};

const processImage = async (
  options: Options,
  file: VFileWithOutput<unknown>,
  node: Element,
): Promise<void> => {
  const root = findRoot(file);

  const pathname = findPath(file, node);
  const source = path.join(root, pathname);

  const meta = await metadata(options.resourcePath, source, pathname);
  if (!meta) {
    return;
  }

  const target = path.join(options.publicDir, pathname);
  await copy(source, meta.sha256, target);

  if (!node.properties) {
    node.properties = {};
  }
  node.properties = {
    ...node.properties,
    ...meta.props,
  };
};

interface Options {
  publicDir: string;
  resourcePath: string;
}

/* eslint-disable */
const staticImages: Plugin<[Options], Root> =
  (options) => (tree: any, file: VFile, done: () => any) => {
    const tasks: Promise<void>[] = [];

    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        tasks.push(processImage(options, file, node));
      }
    });

    Promise.all(tasks)
      .then(() => done())
      .catch((error) => console.error(error));
  };
/* eslint-enable */

export const staticCoverImage = async (post: Post) => {
  const image = post.banner;
  if (image.includes('://')) {
    return image;
  }

  const source = path.join(
    'src/content',
    'posts',
    post._raw.sourceFileDir,
    image,
  );
  const content = await fs.readFile(source);
  const sha256sum = checksum(content);
  const target = path.join('public', 'posts', post._raw.sourceFileDir, image);

  await copy(source, sha256sum, target);

  return path.join('/', 'posts', post._raw.sourceFileDir, image);
};

export default staticImages;