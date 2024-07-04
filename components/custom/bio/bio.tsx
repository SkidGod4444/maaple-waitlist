import NumberTicker from "@/components/ui/numb-ticker";
import SparklesText from "@/components/ui/sparkel-text";
import React from "react";

export default async function Bio() {
  
  return (
    <div className="mt-10 mb-20">
      <div className="flex flex-col md:flex-row justify-start items-start md:items-start relative gap-y-10 gap-x-10 md:left-20 md:right-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col ">
          <SparklesText text="Early Supporters?" className="text-5xl"/>
          <p className="whitespace-pre-wrap mt-2 text-4xl font-medium tracking-tighter text-black dark:text-white">
            <NumberTicker value={129} />+ and counting on ...
          </p>
          <p className="text-start text-muted-foreground whitespace-normal md:max-w-[460px]">
            Yeaah we are growing and we are growing fast. We are making a community of early supporters who are excited to see the future of Mapple. 
          </p>
          <p className="whitespace-pre-wrap mt-2 text-4xl font-medium tracking-tighter text-black dark:text-white">
            What they get? Any perks?
          </p>
          <p className="text-start text-muted-foreground whitespace-normal md:max-w-[460px]">
            Yes, we are giving away free rare badges to our early supporters. These badges will be exclusive and will be shown on your profile.
            so that everyone knows that you are an early supporter of Mapple.
          </p>
        </div>
        {/* <Image
          src="/images/profile.png"
          width={500}
          height={500}
          alt="profile"
        /> */}
      </div>
    </div>
  );
}
