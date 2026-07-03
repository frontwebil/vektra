import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, phoneNumber, text } = await req.json();

    if (!name || phoneNumber.length !== 9) {
      return Response.json({ message: "Некоректні дані" }, { status: 400 });
    }

    const message = `
📩 Нова заявка

👤 Ім'я: ${name}
📞 Телефон: +380${phoneNumber}
💬 Повідомлення: ${text || "Нічого не вказано"}
`;

    // Спочатку Telegram
    const tgResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
        }),
      },
    );

    if (!tgResponse.ok) {
      throw new Error("Не вдалося відправити повідомлення в Telegram");
    }

    try {
      await prisma.lead.create({
        data: {
          name,
          phone: `+380${phoneNumber}`,
          message: text || null,
          status: "New",
        },
      });
    } catch (dbError) {
      console.error("Не вдалося зберегти заявку в БД:", dbError);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Не вдалося відправити заявку",
      },
      { status: 500 },
    );
  }
}
