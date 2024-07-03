"use client";
import Link from "next/link";
import { Logo } from "../logo/logo";
import { Button } from "../../ui/button";
import { PartyPopper } from "lucide-react";
import { useState } from "react";
import { CoolMode } from "@/components/ui/cool-effect";

export function BasicHeader() {
  const storage =
    typeof window !== "undefined" ? localStorage.getItem("wleml") : null;
  const [name, setName] = useState("Claim Badge");

  async function handleClaimBadge() {
    if (storage !== null && storage !== "done") {
      const req = await fetch("/api/mapple/erly-supp", {
        method: "POST",
        body: JSON.stringify({ email: storage }),
      });
      if (req.status == 200) {
        localStorage.setItem("wleml", "done");
        setName("Claimed");
      }
    } else {
      if (storage === "done") {
        setName("Already Claimed");
      }
      console.log("Already claimed");
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 flex max-w-full border-b mx-auto sm:px-15 px-10 py-4 z-50 bg-black">
      <div className="flex h-full justify-between items-center w-full">
        <Link href="/">
          <Logo />
        </Link>
        <CoolMode
          options={{
            particle: "/images/logo.png",
            particleCount: 100,
          }}
        >
          <Button variant="default" onClick={handleClaimBadge}>
            <PartyPopper className="w-5 h-5 mr-2" /> {name}
          </Button>
        </CoolMode>
      </div>
    </header>
  );
}
