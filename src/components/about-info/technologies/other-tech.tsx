import Image from 'next/image';

const stacks = [
  {
    name: "Javascript",
    icon: "/assets/icons/javascript.svg",
  },
  {
    name: "Bash",
    icon: "/assets/icons/bash.svg",
  },
  {
    name: "Docker",
    icon: "/assets/icons/docker.svg",
  },
  {
    name: "ESLint",
    icon: "/assets/icons/eslint.svg",
  },
  {
    name: "ExpressJS",
    icon: "/assets/icons/express.svg",
  },
  {
    name: "Git",
    icon: "/assets/icons/git.svg",
  },
  {
    name: "NextJS",
    icon: "/assets/icons/next.svg",
  },
  {
    name: "Python", // TOOD: Add actual icon
    icon: "/assets/icons/python.svg",
  },
  {
    name: "Visual Studio Code",
    icon: "/assets/icons/vscode.svg",
  },
  {
    name: "Bun",
    icon: "/assets/icons/bun.svg",
  },
  {
    name: "Jest",
    icon: "/assets/icons/jest.svg",
  },
  {
    name: "MongoDB",
    icon: "/assets/icons/mongodb.svg",
  },
  {
    name: "NPM",
    icon: "/assets/icons/npm.svg",
  },
  {
    name: "ShadcnUI",
    icon: "/assets/icons/shadcnui.svg",
  },
  {
    name: "Tailwindcss",
    icon: "/assets/icons/tailwindcss.svg",
  },
  {
    name: "Vercel",
    icon: "/assets/icons/vercel.svg",
  },
];

interface Stack {
  name: string;
  icon: string;
}

export default function OtherTechs() {
  return (
    <>
      {stacks.map((stack: Stack, index: number) => {
        return (
          <div
            className={`w-12 h-12 md:w-14 md:h-13 flex flex-col place-items-center justify-center rounded-md border bg-[#f8f9fa] dark:bg-[#667085]/[.05]`}
            key={index}
          >
            <div className="bg-transparent">
              <Image
                className="h-8 w-8 rounded-md"
                loading="lazy"
                width={32}
                height={32}
                src={stack.icon}
                alt={stack.name}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
