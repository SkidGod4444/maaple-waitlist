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

export default function Hero() {
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(e.target.value);
    setIsEmailValid(isValidEmail);
  };
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
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
            Connect, share, and grow with a community that&apos;s redefining the
            way we interact online.
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
                <TriangleAlert className="h-5 w-5 mr-2" /> Please enter a valid
                email to continue.
              </span>
            )}
          </div>
        </div>
        <Image
          src="/images/hero.png"
          width={500}
          height={500}
          alt="hero"
        />
      </div>
    </div>
  );
}
