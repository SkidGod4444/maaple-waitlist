import { addTOesp } from "@/db/func";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const email = await req.json();
  try {
    await addTOesp(email);
    return new Response("Success", { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
