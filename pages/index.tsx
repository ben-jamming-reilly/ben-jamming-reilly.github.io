import type { NextPage } from "next";

import { Links, Card } from "../components";
import Gallery from "../components/Gallery";

export default function Index() {
  return (
    <main className="bg-gray-800 h-full pt-12">
      <div className="flex justify-center h-3/4 ">
        <Card src="/images/benReally.jpeg" height={550} width={412} />
      </div>
      <div className="flex justify-center my-32">
        <Links />
      </div>
      <div className="flex justify-center mt-2">
        <Gallery />
      </div>
    </main>
  );
}
