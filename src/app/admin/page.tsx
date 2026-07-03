import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AdminPanel } from "@/components/Admin/AdminPanel";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  return <AdminPanel userName={session?.user?.name || "Admin"} />;
}
