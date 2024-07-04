import { ComponentProps } from "react";
import { BasicHeader } from "@/components/basic/header";
import { BasicFooter } from "@/components/basic/footer";

export function BasicLayout({
  children
}: ComponentProps<"div">) {
  return (
    <div className="flex min-h-[100vh]">
      <BasicHeader/>
      <main>{children}</main>
      <BasicFooter/>
    </div>
  );
}