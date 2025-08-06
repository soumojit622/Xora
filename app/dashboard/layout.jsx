import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import DashboardLayoutClient from "./components/DashboardLayoutClient";

export default function DashboardLayout({ children }) {
  return (
    <ClerkProvider dynamic={true}>
      <DashboardLayoutClient>{children}</DashboardLayoutClient>
    </ClerkProvider>
  );
}
