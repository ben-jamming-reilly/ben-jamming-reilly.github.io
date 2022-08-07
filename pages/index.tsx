import type { NextPage } from "next";
import Image from "next/image";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

import { Links } from "../components";

type DraggableEventHandler = (
  e: DraggableEvent,
  data: DraggableData
) => void | false;

const Home: NextPage = () => {
  const eventLogger = (e: DraggableEvent, data: Object) => {};

  return (
    <main className="bg-gray-800 h-screen overflow-hidden">
      <Draggable
        onStart={(e, data) => eventLogger(e, data)}
        onDrag={(e, data) => eventLogger(e, data)}
      >
        <button className="drop-shadow-lg absolute draggable">
          <div>
            <Image
              className="rounded-lg bg-violet-900"
              src="/static/benReally2.png"
              alt="me"
              height={1100 / 2}
              width={825 / 2}
              draggable={false}
            />
          </div>
        </button>
      </Draggable>
      <Links />
    </main>
  );
};

export default Home;
