import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import me from "../public/static/output-onlinepngtools.png";

import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type DraggableEventHandler = (
  e: DraggableEvent,
  data: DraggableData
) => void | false;

const Home: NextPage = () => {
  const eventLogger = (e: DraggableEvent, data: Object) => {
    // console.log("Event: ", e);
    // console.log("Data: ", data);
  };

  return (
    <main className="bg-gray-900 h-screen overflow-hidden">
      <Draggable
        onStart={(e, data) => eventLogger(e, data)}
        onDrag={(e, data) => eventLogger(e, data)}
      >
        <button className="drop-shadow-lg absolute draggable">
          <div>
            <Image
              className="rounded-lg bg-violet-900 "
              src="/static/benReally.jpeg"
              alt="me"
              height={1100 / 2}
              width={825 / 2}
            ></Image>
          </div>
        </button>
      </Draggable>
    </main>
  );
};

export default Home;

// This will be where the real freaking thing is
// return (
//   <Background>
//     <Head>
//       <title>Benjamin Reilly</title>
//       <meta name="description" content="Ben Reilly's site" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>
//     <Desktop />
//     <Taskbar />
//   </Background>
// );
