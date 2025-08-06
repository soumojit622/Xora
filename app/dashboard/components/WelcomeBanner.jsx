"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { FaBookOpen, FaStar, FaPlayCircle } from "react-icons/fa";
import React from "react";

export default function WelcomeBanner() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
      {/* Left content */}
      <div className="flex flex-col gap-3 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          👋 Hello, <span className="font-bold">{user.fullName}</span>
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-md leading-relaxed">
          Welcome back! 🚀 Let's continue your learning journey with energy and
          curiosity.
        </p>

        {/* Feature Highlights */}
        <div className="flex gap-4 flex-wrap mt-4 justify-center sm:justify-start">
          <div className="flex items-center gap-2 text-sm bg-white/10 px-3 py-2 rounded-lg backdrop-blur-md shadow-sm">
            <FaBookOpen className="text-yellow-300" /> Explore Courses
          </div>
          <div className="flex items-center gap-2 text-sm bg-white/10 px-3 py-2 rounded-lg backdrop-blur-md shadow-sm">
            <FaPlayCircle className="text-green-300" /> Resume Learning
          </div>
          <div className="flex items-center gap-2 text-sm bg-white/10 px-3 py-2 rounded-lg backdrop-blur-md shadow-sm">
            <FaStar className="text-pink-300" /> Earn Achievements
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden">
        <Image
          src="/laptop.png"
          alt="Laptop"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
