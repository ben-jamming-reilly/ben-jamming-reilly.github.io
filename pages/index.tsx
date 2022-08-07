import type { NextPage } from "next";

import { Links, Card } from "../components";

const Home: NextPage = () => {
  return (
    <main className="bg-gray-800 h-screen overflow-hidden">
      <div className="flex justify-center h-5/6">
        <Card src="/images/benReally.jpeg" height={550} width={412} />
      </div>
      <div className="flex justify-center h-1/6">
        <Links />
      </div>
    </main>
  );
};

export default Home;
