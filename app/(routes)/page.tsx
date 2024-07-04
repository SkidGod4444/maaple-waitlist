import About from "@/components/custom/about/about";
import Esp from "@/components/custom/esp/esp";
import Giveaway from "@/components/custom/giveaway/gw";
import Hero from "@/components/custom/hero/hero";
import { BasicLayout } from "@/layouts/basic/basic.layout";
import React from "react";

const HeroPage = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-8 px-4">
      <div className="max-w-7xl w-full">
        <BasicLayout>
          <Hero/>
          <About/>
          <Esp/>
          <Giveaway/>
        </BasicLayout>
      </div>
    </main>
  );
};

export default HeroPage;
