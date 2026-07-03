import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const { name, phone, message, status } = await req.json();

    const lead = await prisma.lead.update({
      where: { id: Number(id) },
      data: {
        name,
        phone,
        message: message || null,
        status,
      },
    });

    return Response.json(lead);
  } catch (error) {
    console.error("Error updating lead:", error);
    return Response.json(
      { error: "Не вдалося оновити заявку" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;

    await prisma.lead.delete({
      where: { id: Number(id) },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error deleting lead:", error);
    return Response.json(
      { error: "Не вдалося видалити заявку" },
      { status: 500 },
    );
  }
}
