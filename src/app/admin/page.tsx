import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { AdminPanel } from "@/components/Admin/AdminPanel";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const leeds = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  const testimonials = await prisma.testimonials.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <AdminPanel leeds={leeds} testimonials={testimonials} />;
}
