import Viewer from "@/components/converter/Viewer";
import Header from "@/components/header";
import Connector from "@/container/home/Connector";
import Display from "@/container/home/Display";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <div className="relative flex flex-col w-full">
    <Header />
    <Viewer>
      <>
        <Display />
        <Connector />
      </>
    </Viewer>
  </div>
);

export default Home;
