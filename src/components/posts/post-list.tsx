"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { type Post } from "contentlayer/generated";
import PostCard from "./post-card";
import PostFilter from "./post-filter";

export default function PostList({ allPosts }: { allPosts: Post[] }) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("search");
  const filterQuery = searchParams?.get("filter");

  const [searchValue, setSearchValue] = useState("");
  const [filterBy, setFilterBy] = useState<"name" | "tag">("name");

  useEffect(() => {
    if (searchQuery) {
      setSearchValue(searchQuery);
    }
    if (filterQuery) {
      setFilterBy(filterQuery === "tag" ? "tag" : "name");
    }
  }, [searchQuery, filterQuery]);

  const filteredBlogPosts = useMemo(() => {
    return allPosts
      .filter((post) => {
        if (filterBy === "name") {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        }
        if (filterBy === "tag") {
          return post.tags.some((tag) =>
            tag.toLowerCase().includes(searchValue.toLowerCase())
          );
        }
      })
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  }, [allPosts, filterBy, searchValue]);
  return (
    <>
      <div className="relative mb-4 w-full">
        <input
          aria-label="Search posts by title or tag..."
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search posts by title or tag..."
          defaultValue={searchValue}
          className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-blue-500"
        />

        <PostFilter filterBy={filterBy} setFilter={setFilterBy} />

        <Search
          strokeWidth={1.5}
          className="absolute right-3 top-3 h-5 w-5 cursor-pointer text-gray-400 dark:text-gray-300"
        />
      </div>

      <h2 className="mb-5 mt-8 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        All Posts ({filteredBlogPosts.length})
      </h2>

      {!filteredBlogPosts.length && (
        <p className="mb-4 text-gray-600 dark:text-[#c2c2c2]">
          No posts found.
        </p>
      )}

      {filteredBlogPosts.map((post: Post) => (
        <PostCard key={post.title} data={post} isNew={false} />
      ))}
    </>
  );
}
