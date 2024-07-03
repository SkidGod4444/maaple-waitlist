"use client";
import { useMemo } from "react";
import { Button } from "../../ui/button";
import { Instagram } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../ui/alert-dialog";

function handleOnClick() {
  console.log("You clicked the button!");
  window.location.href = "https://instagram.com/get.mapple";
}


export function BasicFooter() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 flex mt-auto border-t max-w-7xl mx-auto sm:px-15 px-10 py-4 z-50 bg-black">
      <div className="flex h-full justify-between items-center w-full">
        <span className="text-sm">© {year} Mapple Connect.</span>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="secondary">
              <Instagram className="w-5 h-5 mr-2" /> Follow
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>You&apos;re Awesome!</AlertDialogTitle>
              <AlertDialogDescription>
                Thanks for this small action! Your support inspires us to create even more amazing things. Stay tuned for exciting updates!
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Not Now</AlertDialogCancel>
              <AlertDialogAction onClick={handleOnClick}>Count Me In!</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </footer>
  );
}
