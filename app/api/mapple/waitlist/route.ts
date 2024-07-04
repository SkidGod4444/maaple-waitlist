import { addTOwl } from "@/db/func";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const email = await req.json();
  try {
    const add = await addTOwl(email);
    if (add) {
      return new Response("Success", { status: 200 });
    } else {
      return new Response("Error Occured!", { status: 500 });
    }
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
