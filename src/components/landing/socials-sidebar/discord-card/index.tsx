'use client';

import type { Activity, DiscordApiContent, DiscordApiResponse } from '@/types/discord';
import { useState, useEffect, useCallback } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { DiscordActivityCard } from './activity-card';
import { DiscordStatus } from './status';

export default function DiscordActivity() {
  const [data, setData] = useState<DiscordApiResponse | null>(null);
  const userId = process.env.NEXT_PUBLIC_DISCORD_ID;
  const defaultInterval = 30000;
  const socketUrl = 'wss://api.lanyard.rest/socket';

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => {
      initMessage();
      handleHello();
    },
    shouldReconnect: () => true,
  });
  
  const initMessage = useCallback(() => {
    sendMessage(JSON.stringify({ op: 2, d: { subscribe_to_ids: [userId] } }));
  }, [sendMessage, userId]);
  
  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      initMessage();
    }
  }, [readyState, initMessage]);

  const handleEvent = useCallback((messageData: MessageData) => {
    const eventData = messageData.d;
    switch (messageData.t) {
      case 'INIT_STATE':
        setData({ data: eventData && eventData[userId!] });
        break;
      case 'PRESENCE_UPDATE':
        setData({ data: eventData });
        break;
      default:
        break;
    }
  }, [userId]);

  useEffect(() => {
    if (lastMessage) {
      const messageData: MessageData = JSON.parse(lastMessage.data);
      handleEvent(messageData);
    }
  }, [handleEvent, lastMessage]);

  const handleHello = () => {
    const heartbeatInterval = defaultInterval;

    const heartbeatIntervalId = setInterval(() => {
      sendMessage(JSON.stringify({ op: 3 }));
    }, heartbeatInterval);

    return () => clearInterval(heartbeatIntervalId);
  };

  return (
    <Card className="bg-background w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Discord activity</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {!data ? (
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-28 md:w-[14rem]" />
            </div>
            <Skeleton className="h-8 w-full" />
          </div>
        ) : (
          <>
            {data.data ? (
              <>
                {/* Display no activities */}
                <DiscordStatus data={data.data} />
                <div className="flex flex-grow flex-col gap-2">
                  {!data ||
                  !data.data ||
                  !data.data.activities ||
                  data.data.activities.length === 0 ? (
                    <Alert className="border-none bg-muted">
                      <AlertDescription>
                        No activities currently.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <>
                      {/* Render custom status with no other activities */}
                      {data.data.activities.length === 1 &&
                      data.data.activities[0].name === 'Custom Status' ? (
                        <>
                          {data?.data?.activities?.map(
                            (activity: Activity) =>
                              activity.name === 'Custom Status' && (
                                <p className="text-sm text-muted-foreground" key={activity.name}>
                                  {activity.state}
                                </p>
                              ),
                          )}
                          <Alert className="border-none bg-muted">
                            <AlertDescription>
                              No activities currently.
                            </AlertDescription>
                          </Alert>
                        </>
                      ) : (
                        <>
                          {/* Render custom status including other activities */}
                          {data?.data?.activities?.map(
                            (activity: Activity) =>
                              activity.name === 'Custom Status' && (
                                <p className="text-sm text-muted-foreground" key={activity.name}>
                                  {activity.state}
                                </p>
                              ),
                          )}
                          {data?.data?.activities?.map(
                            (activity: Activity, index: number) =>
                              activity.name !== 'Custom Status' && (
                                <DiscordActivityCard
                                  key={index}
                                  activity={activity}
                                  data={data}
                                />
                              ),
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
              </>
            ) : (
              <div className="flex gap-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-10 w-28 md:w-[14rem]" />
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}

interface MessageData {
  op: number;
  t: string;
  d: DiscordApiContent;
}