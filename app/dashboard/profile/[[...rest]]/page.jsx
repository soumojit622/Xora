"use client";

import { UserProfile } from "@clerk/nextjs";
import React from "react";

export default function ProfilePage() {
  return (
    <div className=" flex justify-center items-start px-4 py-8">
      <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
        <UserProfile
          appearance={{
            elements: {
              navbar: "hidden",
              card: "shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8",
              rootBox: "w-full",
            },
          }}
        />
      </div>
    </div>
  );
}
