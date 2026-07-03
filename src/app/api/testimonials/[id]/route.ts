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
    const { name, category, position, text, avatarUrl, status } =
      await req.json();

    const testimonial = await prisma.testimonials.update({
      where: { id },
      data: {
        name,
        category: category || null,
        position: position || null,
        text,
        avatarUrl: avatarUrl || null,
        status,
      },
    });

    return Response.json(testimonial);
  } catch (error) {
    console.error("Error updating testimonial:", error);
    return Response.json(
      { error: "Не вдалося оновити відгук" },
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

    await prisma.testimonials.delete({
      where: { id },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    return Response.json(
      { error: "Не вдалося видалити відгук" },
      { status: 500 },
    );
  }
}
