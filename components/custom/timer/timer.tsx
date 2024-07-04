import { Button } from "@/components/ui/button";
import React from "react";
import Countdown from "react-countdown";
import { RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    // Render a completed state
    return <ShowAlert />;
  } else {
    // Render a countdown
    return (
      <Button
        size="lg"
        variant="default"
        className="text-sm font-bold text-center cursor-default"
      >
        {days > 0 ? `${days} days, ` : ``}
        {hours} hrs, {minutes} mins, {seconds} secs
      </Button>
      //   </div>
    );
  }
};

function ShowAlert() {
  return (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Times up!</AlertTitle>
      <AlertDescription>
        <strong>
          <u>EARLY SUPPORTER</u>
        </strong>{" "}
        program is now closed. You can still join the waitlist.
      </AlertDescription>
    </Alert>
  );
}

export default function Timer() {
  const today = new Date();
  const futureDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 15
  );
  return (
    <div className="mt-10">
      <Countdown date={futureDate} renderer={renderer} />
    </div>
  );
}
