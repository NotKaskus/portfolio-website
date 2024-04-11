// Discord
export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  global_name: string;
}

type Status = 'online' | 'offline' | 'idle' | 'dnd';

interface Activity {
  name: string;
  state?: string;
  details?: string;
  application_id?: string;
  timestamps?: {
    start?: number;
    end?: number;
  };
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
}

type DiscordApiContent = {
  spotify: {
    album_art_url: string;
  };
  discord_user: DiscordUser;
  activities: Activity[];
  discord_status: Status;
} & DiscordKeyString;

type DiscordKeyString = {
  [key: string]: DiscordApiContent;
};

interface DiscordApiResponse {
  data: DiscordApiContent;
}