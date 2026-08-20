import type { Metadata } from "next";
import { redirect } from "next/navigation";
import ApAdminShell from "@/shared/admin/components/ap_admin_shell";
import { getAdminSession } from "@/shared/admin/lib/auth";
import { getStorageMode } from "@/shared/admin/lib/store";

export const metadata: Metadata = {
  title: "APEX Admin",
  robots: { index: false, follow: false },
};

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  return (
    <div className="ap-admin-root">
      <ApAdminShell email={session.email} mode={getStorageMode()}>
        {children}
      </ApAdminShell>
    </div>
  );
}
