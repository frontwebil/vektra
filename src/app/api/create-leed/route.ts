import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const data = await req.json();

  // await prisma.lead.create({});
}
