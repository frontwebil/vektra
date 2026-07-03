import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { name, phone, message, status } = await req.json();

    if (!name || !phone) {
      return Response.json(
        { error: "Ім'я та телефон обов'язкові" },
        { status: 400 },
      );
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        message: message || null,
        status: status || "New",
      },
    });

    return Response.json(lead);
  } catch (error) {
    console.error("Error creating lead:", error);
    return Response.json(
      { error: "Не вдалося створити заявку" },
      { status: 500 },
    );
  }
}
