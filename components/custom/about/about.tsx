import SparklesText from "@/components/ui/sparkel-text";
import React from "react";

export default function About() {
  return (
    <div className="mt-10 mb-20">
      <div className="flex flex-col md:flex-row justify-start items-start md:items-start relative gap-y-10 gap-x-10 md:left-20 md:right-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col ">
          <SparklesText text="What is Mapple?" className="text-5xl" />
          <p className="text-start mt-2 text-muted-foreground whitespace-normal md:max-w-[460px]">
            Mapple is a all in one platform for students. It is a platform which
            replaces the need of multiple apps for students.
          </p>
          <p className="whitespace-pre-wrap mt-2 text-4xl font-medium tracking-tighter text-black dark:text-white">
            How does it work?
          </p>
          <p className="text-start text-muted-foreground whitespace-normal md:max-w-[460px]">
            Students can search for their school/college/university on Mapple
            and join the community. They can also find their classmates,
            seniors, juniors and alumni on Mapple. Institutions can also create
            clubs and host events on Mapple.
          </p>
          <p className="whitespace-pre-wrap mt-2 text-4xl font-medium tracking-tighter text-black dark:text-white">
            What is Mapple Id?
          </p>
          <p className="text-start text-muted-foreground whitespace-normal md:max-w-[460px]">
            Mapple Id is a unique id given to every student who joins Mapple.
            This id is used to identify the student on Mapple. Students can use
            this id to find their classmates, seniors, juniors and alumni on
            Mapple. And also to join clubs and events on Mapple.
          </p>
          <p className="whitespace-pre-wrap mt-2 text-4xl font-medium tracking-tighter text-black dark:text-white">
            Making abroad education easy.
          </p>
          <p className="text-start text-muted-foreground whitespace-normal md:max-w-[460px]">
            It is also a platform where students can find information about
            universities abroad. They can search for universities, courses and
            scholarships on Mapple. They can also find seniors studying abroad
            on Mapple. Mapple Ai helps students to find the best university and
            course for them based on their profile and preferences just for
            free.
          </p>
          <p className="whitespace-pre-wrap mt-2 text-4xl font-medium tracking-tighter text-black dark:text-white">
            And much more...
          </p>
          <p className="text-start text-muted-foreground whitespace-normal md:max-w-[460px]">
            Join the waitlist to be the first one to know about the updates.
          </p>
        </div>
      </div>
    </div>
  );
}
