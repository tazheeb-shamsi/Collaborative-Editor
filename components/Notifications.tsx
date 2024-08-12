<<<<<<< HEAD
"use client";

import {
  useInboxNotifications,
  useUnreadInboxNotificationsCount,
} from "@liveblocks/react/suspense";
import {
  InboxNotification,
  InboxNotificationList,
  LiveblocksUIConfig,
} from "@liveblocks/react-ui";
import Image from "next/image";
import { ReactNode } from "react";
=======
'use client'
>>>>>>> master

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
<<<<<<< HEAD
} from "@/components/ui/popover";

export const Notifications = () => {
  const { inboxNotifications } = useInboxNotifications();
  const { count } = useUnreadInboxNotificationsCount();

  const unreadNotifications = inboxNotifications.filter(
    (notification) => !notification.readAt // Filter unread notifications
  );
=======
} from "@/components/ui/popover"
import { InboxNotification, InboxNotificationList, LiveblocksUIConfig } from "@liveblocks/react-ui"
import { useInboxNotifications, useUnreadInboxNotificationsCount } from "@liveblocks/react/suspense"
import Image from "next/image"
import { ReactNode } from "react"

const Notifications = () => {
  const { inboxNotifications } = useInboxNotifications();
  const { count } = useUnreadInboxNotificationsCount();

  const unreadNotifications = inboxNotifications.filter((notification) => !notification.readAt);
>>>>>>> master

  return (
    <Popover>
      <PopoverTrigger className="relative flex size-10 items-center justify-center rounded-lg">
<<<<<<< HEAD
        <Image
=======
        <Image 
>>>>>>> master
          src="/assets/icons/bell.svg"
          alt="inbox"
          width={24}
          height={24}
        />
        {count > 0 && (
          <div className="absolute right-2 top-2 z-20 size-2 rounded-full bg-blue-500" />
        )}
      </PopoverTrigger>
      <PopoverContent align="end" className="shad-popover">
<<<<<<< HEAD
        <LiveblocksUIConfig
          overrides={{
            INBOX_NOTIFICATION_TEXT_MENTION: (user: ReactNode) => {
              return <>{user} mentioned you</>;
            },
=======
        <LiveblocksUIConfig 
          overrides={{
            INBOX_NOTIFICATION_TEXT_MENTION: (user: ReactNode) => (
              <>{user} mentioned you.</>
            )
>>>>>>> master
          }}
        >
          <InboxNotificationList>
            {unreadNotifications.length <= 0 && (
<<<<<<< HEAD
              <p className="py-2 text-center text-dark-500">
                No notifications yet
              </p>
            )}

            {unreadNotifications.length > 0 &&
              unreadNotifications.map((inboxNotification: any) => (
                <InboxNotification
                  key={inboxNotification.id}
                  inboxNotification={inboxNotification}
                  className="bg-dark-200 text-white"
                  href={`/documents/${inboxNotification.roomId}`}
                  showActions={false}
                  kinds={{
                    thread: (props) => (
                      <InboxNotification.Thread
                        {...props}
                        showRoomName={false}
                        showActions={false}
                      />
                    ),
                    textMention: (props) => {
                      return (
                        <InboxNotification.TextMention
                          {...props}
                          showRoomName={false}
                        />
                      );
                    },
                    $documentAccess: (props) => {
                      const { title, avatar } =
                        props.inboxNotification.activities[0].data;

                      return (
                        <InboxNotification.Custom
                          {...props}
                          title={title}
                          aside={
                            <InboxNotification.Icon className="bg-transparent">
                              <Image
                                src={(avatar as string) || ""}
                                width={36}
                                height={36}
                                alt="avatar"
                                className="rounded-full"
                              />
                            </InboxNotification.Icon>
                          }
                        >
                          {props.children}
                        </InboxNotification.Custom>
                      );
                    },
                  }}
                />
              ))}
=======
              <p className="py-2 text-center text-dark-500">No new notifications</p>
            )}

            {unreadNotifications.length > 0 && unreadNotifications.map((notification) => (
              <InboxNotification 
                key={notification.id}
                inboxNotification={notification}
                className="bg-dark-200 text-white"
                href={`/documents/${notification.roomId}`}
                showActions={false}
                kinds={{
                  thread: (props) => (
                    <InboxNotification.Thread {...props} 
                      showActions={false}
                      showRoomName={false}
                    />
                  ),
                  textMention: (props) => (
                    <InboxNotification.TextMention {...props} 
                      showRoomName={false}
                    />
                  ),
                  $documentAccess: (props) => (
                    <InboxNotification.Custom {...props} title={props.inboxNotification.activities[0].data.title} aside={<InboxNotification.Icon className="bg-transparent">
                      <Image 
                        src={props.inboxNotification.activities[0].data.avatar as string || ''}
                        width={36}
                        height={36}
                        alt="avatar"
                        className="rounded-full"
                      />
                    </InboxNotification.Icon>}>
                      {props.children}
                    </InboxNotification.Custom>
                  )
                }}
              />
            ))}
>>>>>>> master
          </InboxNotificationList>
        </LiveblocksUIConfig>
      </PopoverContent>
    </Popover>
<<<<<<< HEAD
  );
};
=======
  )
}

export default Notifications
>>>>>>> master
