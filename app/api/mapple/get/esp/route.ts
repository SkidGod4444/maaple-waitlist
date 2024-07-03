import { getESPusers } from "@/db/func";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = getESPusers();
    return new Response(JSON.stringify(res), {
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
