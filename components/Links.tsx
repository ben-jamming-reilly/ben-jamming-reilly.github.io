import * as React from "react";
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
    >
      <div>aasdf</div>
    </Draggable>
  );
};
