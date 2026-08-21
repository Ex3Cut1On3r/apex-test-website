import type { Metadata } from "next";
import AP_BlogsScreen from "@/app/screens/AP_BlogsScreen";

export const metadata: Metadata = {
  title: "Blogs & News",
  description: "APEX news, achievements, collaborations, and practical thinking on intelligent digital systems.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() { return <AP_BlogsScreen />; }
