"use client";

import { CourseCountContext } from "@/app/context/CourseCountContext";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import SideBar from "./SideBar";

export default function DashboardLayoutClient({ children }) {
  const [totalCourse, setTotalCourse] = useState(0);
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/sign-in");
    }
  }, [isLoaded, user, router]);

  if (!mounted || !isLoaded || !user) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }
  return (
    <CourseCountContext.Provider value={{ totalCourse, setTotalCourse }}>
      <div>
        <div className="md:w-64 hidden md:block fixed">
          <SideBar />
        </div>
        <div className="md:ml-64">
          <DashboardHeader />
          <div className="p-10">{children}</div>
        </div>
      </div>
    </CourseCountContext.Provider>
  );
}
