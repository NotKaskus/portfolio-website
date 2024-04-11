import DiscordProfile from './discord-card';
import LocationCard from './location-card';
import { Time } from './extras/time';

export default function SocialsSideBar() {
  return (
    <div className="overflow-hidden flex flex-col gap-4">
      <div className="flex justify-between items-center felx-wrap gap-2">
        <h2 className="text-lg font-semibold flex gap-2 items-center">
          Socials
        </h2>
      </div>
      <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 overflow-hidden ">
        <Time />
        <DiscordProfile />
        <LocationCard />
      </aside>
    </div>
  );
}