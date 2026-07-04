import { AdminPanel } from "@/components/Admin/AdminTestimonials";
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
  const testimonials = await prisma.testimonials.findMany();

  return (
    <div className="default-cursor">
      <AdminPanel leeds={leeds} testimonials={testimonials} />
    </div>
  );
}
