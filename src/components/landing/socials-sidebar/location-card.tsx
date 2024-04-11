import Image from "next/image";

export default function LocationCard() {
  return (
    <div className="group relative flex h-full min-h-[13rem] flex-shrink-0 overflow-hidden rounded-xl">
      {/* DarkCanvas Sucks for static map, planning to use apple map snapshots but i dont remember the answer to the security question, i contacted apple support but they said if cant remember it then im locked out in my own account, (classic shitty apple response) */}
      <Image
        alt="A map locating roughly where I am right now"
        src={`https://dev.virtualearth.net/REST/V1/Imagery/Map/CanvasLight/13.624016,%20123.185373/13?mapSize=600%2C300&format=png&key=${process.env.NEXT_PUBLIC_BING_STATIC_MAP_API_KEY}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full scale-[1.25] bg-black object-cover object-center"
        fill
      />

      <div className={`absolute inset-0 bg-black bg-opacity-50`}></div>

      <div className="absolute left-1/2 top-1/2 z-10 flex w-full flex-shrink-0 -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
        <div aria-hidden className="absolute translate-y-[14px]">
          <span className="block h-12 w-12 animate-ping rounded-full bg-lime-500 duration-1000" />
        </div>
        <Image
          src="/avatar.webp"
          alt="Photo of me above a map of my current location"
          loading="lazy"
          height={60}
          width={60}
          className="transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-110 h-15 w-15 z-20 rounded-full border-2 border-black"
        />
        <p
          className={`rounded-full pl-2.5 pr-3 font-bold text-white/95 backdrop-blur-md flex items-center bg-green-800`}
        >
          {/* TODO: Map ICon here from lucide */}
          <span className="ml-2">Naga City</span>
        </p>
      </div>
    </div>
  );
}
