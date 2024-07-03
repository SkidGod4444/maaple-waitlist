"use client";
import Link from "next/link";
import { Logo } from "../logo/logo";
import { Button } from "../../ui/button";
import { Feather, PartyPopper } from "lucide-react";

export function BasicHeader({ className }: { className?: string }) {
  return (
    <header className="fixed top-0 left-0 right-0 flex max-w-full border-b mx-auto sm:px-15 px-10 py-4 z-50 bg-black">
      <div className="flex h-full justify-between items-center w-full">
        <Link href="/">
        <Logo />
        </Link>
        <Button variant="default"><PartyPopper className="w-5 h-5 mr-2" /> Free Badge</Button>
      </div>
    </header>
  );
}