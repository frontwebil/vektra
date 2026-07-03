import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { name, category, position, text, avatarUrl, status } =
      await req.json();

    if (!name || !text) {
      return Response.json(
        { error: "Ім'я та текст обов'язкові" },
        { status: 400 },
      );
    }

    const testimonial = await prisma.testimonials.create({
      data: {
        name,
        category: category || null,
        position: position || null,
        text,
        avatarUrl: avatarUrl || null,
        status: status || "New",
      },
    });

    return Response.json(testimonial);
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return Response.json(
      { error: "Не вдалося створити відгук" },
      { status: 500 },
    );
  }
}
