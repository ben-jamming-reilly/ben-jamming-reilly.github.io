import * as React from "react";
import Image from "next/image";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type DraggableEventHandler = (
  e: DraggableEvent,
  data: DraggableData
) => void | false;

interface props {}

export const Links: React.FC<props> = () => {
  const eventLogger = (e: DraggableEvent, data: Object) => {};
  return (
    <Draggable
      onStart={(e, data) => eventLogger(e, data)}
      onDrag={(e, data) => eventLogger(e, data)}
      cancel="a"
    >
      <div className="rounded-full w-60 h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-row justify-around items-center">
        <a href="https://discordapp.com/users/555243102718263298">
          <Image
            alt="social"
            src="/icons/discord.svg"
            draggable={false}
            height={30}
            width={30}
          />
        </a>
        <a href="https://github.com/ben-jamming-reilly">
          <Image
            alt="social"
            src="/icons/github.svg"
            draggable={false}
            height={30}
            width={30}
          />
        </a>
        <a href="https://www.instagram.com/benjamin_really/">
          <Image
            alt="social"
            src="/icons/instagram.svg"
            draggable={false}
            height={30}
            width={30}
          />
        </a>
        <a href="https://twitter.com/benjamin_really">
          <Image
            alt="social"
            src="/icons/twitter.svg"
            draggable={false}
            height={30}
            width={30}
          />
        </a>
      </div>
    </Draggable>
  );
};
