import SparklesText from '@/components/ui/sparkel-text'
import React from 'react'

export default function Giveaway() {
  return (
    <div className="mt-10 mb-40">
      <div className="flex flex-col md:flex-row justify-start items-start md:items-start relative gap-y-10 gap-x-10 md:left-20 md:right-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col ">
        <SparklesText text="How to join the program?" className="text-5xl" />
        <p className="whitespace-pre-wrap mt-2 text-4xl font-medium tracking-tighter text-black dark:text-white">
            Is this paid? Do i need a credit card?
          </p>
        <p className="text-start text-muted-foreground whitespace-normal md:max-w-[460px]">
            Naah! This is completely free. You don&apos;t need to pay anything to join the program. Just join the waitlist and click on the free badge button on the top right corner.
          </p>
        </div>
      </div>
    </div>
  )
}
