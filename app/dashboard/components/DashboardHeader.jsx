"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function DashboardHeader() {
  const pathname = usePathname();

  // Derive title based on pathname
  const getTitle = () => {
    if (pathname.startsWith("/dashboard")) return "Dashboard";
    if (pathname.startsWith("/course")) return "Course";
    return "App";
  };

  return (
    <header className="w-full px-6 py-4 shadow-sm border-b bg-white flex items-center justify-between">
      {/* Dynamic Title */}
      <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text hover:opacity-90 transition-opacity">
        {getTitle()}
      </p>

      {/* User Profile Button */}
      <div className="ml-auto">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              userButtonAvatarBox: "h-9 w-9",
            },
          }}
        />
      </div>
    </header>
  );
}
