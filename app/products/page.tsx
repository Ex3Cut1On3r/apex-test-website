import type { Metadata } from "next";
import content from "@/shared/en.json";
import AP_ProductsScreen from "@/app/screens/AP_ProductsScreen";

export const metadata: Metadata = { title: "Products | APEX", description: content.products.body };

export default AP_ProductsScreen;
