import * as React from "react";
import Image from "next/image";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

interface props {
  src: string;
  height: number;
  width: number;
}

type DraggableEventHandler = (
  e: DraggableEvent,
  data: DraggableData
) => void | false;

export const Card: React.FC<props> = ({ src, height, width }) => {
  const eventLogger = (e: DraggableEvent, data: Object) => {};
  return (
    <Draggable
      onStart={(e, data) => eventLogger(e, data)}
      onDrag={(e, data) => eventLogger(e, data)}
    >
      <button className="drop-shadow-lg ">
        <Image
          className="rounded-lg bg-violet-900"
          src={src}
          alt="pic"
          draggable={false}
          height={height}
          width={width}
        ></Image>
      </button>
    </Draggable>
  );
};
