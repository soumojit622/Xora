import { Outfit } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import BackToTopButton from "@/components/BackToTopButton";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";

const font = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Xora | Intelligent Exam Preparation Material Generator",
  description:
    "Xora is an AI-driven platform developed by Soumojit Banerjee to generate high-quality, structured, and customizable exam preparation materials for educators, institutions, and learners.",
  icons: {
    icon: "/logo.svg",
  },
  authors: [
    {
      name: "Soumojit Banerjee",
      url: "https://github.com/soumojit622",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#3b82f6",
          colorText: "#000",
        },
        elements: {
          card: "border-blue-500",
          headerTitle: "text-blue-600",
          buttonPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
          input: "focus:ring-blue-500 border-blue-300",
        },
      }}
    >
      <html lang="en">
        <body className={font.className}>
          <Provider>{children}</Provider>
          <Toaster richColors />
          <BackToTopButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
