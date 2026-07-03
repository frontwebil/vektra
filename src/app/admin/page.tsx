import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AdminPanel } from "@/components/Admin/AdminPanel";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
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
  const testimonials = await prisma.testimonials.findMany();

  return <AdminPanel leeds={leeds} testimonials={testimonials} />;
}
