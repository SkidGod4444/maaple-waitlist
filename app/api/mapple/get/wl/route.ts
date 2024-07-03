import { getWLusers } from "@/db/func";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await getWLusers();
    return new Response(JSON.stringify(res), {
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
