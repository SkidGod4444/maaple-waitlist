import { ComponentProps } from "react";
import { BasicHeader } from "@/components/custom/basic/header";
import { BasicFooter } from "@/components/custom/basic/footer";

export function BasicLayout({
  children
}: ComponentProps<"div">) {
  return (
    <div className="flex min-h-[100vh]">
      <BasicHeader className="border-2 rounded-full" />
      <main>{children}</main>
      <BasicFooter/>
    </div>
  );
}