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
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  return (
    <div>
      <Head>
        <title>I&apos;m Ben</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main className="bg-gray-900 h-screen overflow-hidden">
        <Draggable
          onStart={(e, data) => eventLogger(e, data)}
          onDrag={(e, data) => eventLogger(e, data)}
        >
          <button className="drop-shadow-lg absolute draggable">
            <div>
              <Image
                className="rounded-lg bg-violet-900 "
                src="/static/output-onlinepngtools.png"
                alt="me"
                height={1100 / 2}
                width={825 / 2}
              ></Image>
            </div>
          </button>
        </Draggable>
      </main>
    </div>
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