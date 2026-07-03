import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  if (
    session.user.loginSecret !== process.env.LOGIN_SECRET ||
    session.user.role !== "admin"
  ) {
    redirect("/admin/login");
  }

  const leeds = await prisma.lead.findMany();

  return <div>page</div>;
}
