import Image from 'next/image';
import { BsDiscord } from 'react-icons/bs';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { processDiscordImage } from '@/lib/utils';
import { ElapsedTime } from './ElapsedTime';
import { ProgressBar } from './ProgressBar';

import type { Activity, DiscordApiResponse } from '@/types';

interface DiscordActivityCardProps {
  activity: Activity;
  data: DiscordApiResponse;
}

export function DiscordActivityCard({
  activity,
  data,
}: DiscordActivityCardProps) {
  return (
    <Alert className="flex flex-col items-center gap-3 border-none bg-muted text-center sm:flex-row sm:text-left">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {activity?.assets?.large_image?.startsWith('spotify:') ? (
              <Image
                src={
                  data.data.spotify?.album_art_url ??
                  processDiscordImage(
                    activity?.assets?.large_image,
                    activity?.application_id,
                  )
                }
                width={90}
                height={90}
                alt="Activity image"
                className="rounded"
              />
            ) : activity.assets && activity.application_id ? (
              <Image
                src={processDiscordImage(
                  activity.assets.large_image,
                  activity.application_id,
                )}
                width={90}
                height={90}
                alt="Activity image"
                className="rounded"
              />
            ) : activity.application_id ? (
              <Image
                src={`https://dcdn.dstn.to/app-icons/${activity.application_id}.webp?size=512`}
                width={90}
                height={90}
                alt="Activity image"
                className="rounded"
              />
            ) : (
              <div
                className="flex items-center justify-center"
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: 'gray',
                  borderRadius: '0.25rem',
                }}>
                <BsDiscord className="h-12 w-12" />
              </div>
            )}
          </TooltipTrigger>
          <TooltipContent>
            {activity.assets
              ? activity.assets.large_text ?? activity.name
              : activity.name}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div>
        <AlertTitle className="line-clamp-1">{activity.name}</AlertTitle>
        <AlertDescription className="line-clamp-1">
          {activity.details ?? null}
        </AlertDescription>
        <AlertDescription className="line-clamp-1">
          {activity.state ?? null}
        </AlertDescription>
        <AlertDescription className="flex justify-center sm:block">
          {activity?.timestamps?.start && activity?.timestamps?.end ? (
            <ProgressBar
              start={activity.timestamps.start}
              end={activity.timestamps.end}
            />
          ) : null}
        </AlertDescription>
        <AlertDescription className="line-clamp-1">
          {activity?.timestamps?.start ? (
            <ElapsedTime unixTimestamp={activity.timestamps.start} />
          ) : null}
        </AlertDescription>
      </div>
    </Alert>
  );
}
