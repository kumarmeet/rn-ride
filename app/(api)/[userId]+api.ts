import { neon } from "@neondatabase/serverless";

export async function GET(
  request: Request,
  { userId: clerkId }: Record<string, string>
) {
  console.log(111, clerkId);
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);

    if (!request) {
      return Response.json(
        { error: "Missing required userId" },
        { status: 400 }
      );
    }

    const response =
      await sql`SELECT * from users WHERE clerk_id = ${clerkId};`;

    console.log(123, response);

    return new Response(JSON.stringify({ data: response }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
