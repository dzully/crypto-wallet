import Viewer from "@/components/converter/Viewer";
import Header from "@/components/header";
import Display from "@/container/home/Display";
import Wallet from "@/container/wallet";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <div className="relative flex flex-col w-full">
    <Header />
    <Viewer>
      <>
        <Display />
        <Wallet />
      </>
    </Viewer>
  </div>
);

export default Home;
