"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "../../ui/vanish-input";
import { TriangleAlert } from "lucide-react";

const placeholders = [
  "Enter your email to join the whitelist.",
  "Unlock exclusive access & perks!",
  "The future is waiting...",
  "Enter your email to join the movement...",
  "Don't miss out!",
  "Enter your email to get early access...",
  "connect.saidev@gmail.com",
];

async function sendMail(email: string) {
  // Send email to the user
  await fetch("/api/mapple/mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
}
export default function Hero() {
  const storage =
    typeof window !== "undefined" ? localStorage.getItem("wleml") : null;
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [mail, setMail] = useState("");
  const [warnName, setWarnName] = useState(
    "Please enter a valid email to continue."
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(e.target.value);
    setIsEmailValid(isValidEmail);
    setMail(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Make API request here
      if (storage !== "done") {
        const response = await fetch("/api/mapple/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: mail }),
        });
        if (response.ok) {
          console.log("API request successful");
          localStorage.setItem("wleml", mail);
          setIsEmail(true);
          await sendMail(mail);
        } else {
          console.log("ERROR:", response);
          // Handle error response
          setIsEmail(false);
        }
      } else {
        setIsEmail(true);
        setWarnName("You have already joined the waitlist.");
        setIsEmailValid(false);
      }
    } catch (error) {
      console.log("API request error:", error);
      // Handle error
      setIsEmail(false);
    }
  };

  return (
    <div className="mt-20 mb-20">
      <div className="flex flex-col md:flex-row justify-center items-start md:items-start relative gap-y-10 gap-x-10 md:left-20 md:right-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col ">
          <h1 className="text-5xl md:mt-20 font-bold text-start">
            We are on the way!
          </h1>
          <p className="text-start text-muted-foreground whitespace-normal md:max-w-[460px]">
            Get ready to experience the future of social networking with Mapple.
            Makking your school life more fun and engaging.
          </p>
          <div className="mt-10">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
              disabled={isEmail}
            />
            {!isEmailValid && (
              <span className="flex mt-2 flex-col-1 text-red-600">
                <TriangleAlert className="h-5 w-5 mr-2" /> {warnName}
              </span>
            )}
          </div>
        </div>
        <Image src="/images/hero.png" width={500} height={500} alt="hero" />
      </div>
    </div>
  );
}
