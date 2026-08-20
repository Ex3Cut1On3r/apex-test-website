import type { Metadata } from "next";
import content from "@/shared/en.json";
import AP_BlogsScreen from "@/app/screens/AP_BlogsScreen";

export const metadata: Metadata = { title: "Blogs | APEX", description: content.blogs.body };

export default AP_BlogsScreen;
