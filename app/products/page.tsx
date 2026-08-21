import type { Metadata } from "next";
import AP_ProductsScreen from "@/app/screens/AP_ProductsScreen";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the product ecosystem APEX is preparing for connected operations. Approved products will be published as they are released.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() { return <AP_ProductsScreen />; }
