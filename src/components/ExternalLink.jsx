import Link from 'next/link';

const links = {
    node: { color: "text-green-600", url: "https://nodejs.org/en/", text: "Node.js" },
    javascript: { color: "text-yellow-300", url: "https://www.javascript.com/", text: "JavaScript" },
    typescript: { color: "text-blue-700", url: "https://www.typescriptlang.org/", text: "TypeScript" },
    python: {
        color: null,
        url: "https://www.python.org/",
        text: (
            <>
                <span className="text-[#306998]">Pyt</span>
                <span className="text-[#FFE873]">hon</span>
            </>
        ),
    },
    discord: { color: "text-blue-700", url: "https://discord.gg/XcbMwAyUJ9", text: "Discord Server" },
    instagram: { color: "text-blue-700", url: "https://www.instagram.com/its_paul2006/", text: "Instagram" },
    twitter: { color: "text-blue-700", url: "https://twitter.com/TrueKaskus", text: "Twitter" },
}

export default function ExternalLinks(props) {
    const selectedVariant = links[props.variant];
    return (
        <a className={`${selectedVariant.color} px-[0.15rem] py-1 font-semibold`} href={selectedVariant.url}>
            {selectedVariant.text}
        </a>
    )
}