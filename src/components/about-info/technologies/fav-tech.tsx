import Image from "next/image";

const favStacks = [
  {
    name: "Typescript",
    description: "My go-to language. Used for all of my full-stack projects.",
    color: "bg-[#007acc]",
    icon: "/assets/icons/typescript.svg",
  },
  {
    name: "DisordJS",
    description:
      "2+ years of DiscordJS experience. My go-to framework for bots for discord.",
    color: "bg-[#0c0c14]",
    icon: "/assets/icons/discordjs.svg",
  },
  {
    name: "PostgreSQL",
    description:
      "Experience using postgres on several projects, including writing schemas from scratch.",
    color: "bg-[#0277bd]",
    icon: "/assets/icons/postgresql.svg",
  },
  {
    name: "NodeJS",
    description: "I like nodejs lol.",
    icon: "/assets/icons/nodejs.svg",
  },
];

interface FavStack {
  name: string;
  description: string;
  icon: string;
  color?: string;
}

export default function FavTechs() {
  return (
    <>
      {favStacks.map((stack: FavStack, index: number) => {
        return (
          <div className="flex space-x-3 items-center" key={index}>
            {/* icon */}
            <Image
                className="rounded-md w-[35px] h-[35px] md:w-[40px] md:h-[40px] flex flex-col place-items-center justify-center"
                loading="lazy"
                width={32}
                height={32}
                src={stack.icon}
                alt={stack.name}
              />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">{stack.name}</p>
              <p className="text-sm text-muted-foreground">
                {stack.description}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
