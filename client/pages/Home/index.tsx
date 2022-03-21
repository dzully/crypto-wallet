import type { NextPage } from "next";
import Header from "../../components/header";
import Converter from "./Converter";

const Home: NextPage = () => (
  <div className="relative flex flex-col w-full">
    <Header />
    <div className="h-full">
      <Converter />
    </div>
  </div>
);

export default Home;
