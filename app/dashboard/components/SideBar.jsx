"use client";
import { CourseCountContext } from "@/app/context/CourseCountContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowUpRight,
  CreditCard,
  GaugeCircle,
  LayoutDashboard,
  PlusIcon,
  Shield,
  UserCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function SideBar() {
  const MenuList = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Upgrade", icon: Shield, path: "/dashboard/upgrade" },
    { name: "Profile", icon: UserCircle, path: "/dashboard/profile" },
  ];

  const { totalCourse } = useContext(CourseCountContext);
  const path = usePathname();

  return (
    <div className="h-screen w-[260px] px-6 py-8 bg-white border-r shadow-md flex flex-col justify-between">
      {/* Logo + Create */}
      <div>
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Image src="/logo.svg" alt="Xora Logo" width={36} height={36} />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text tracking-tight">
            Xora
          </h1>
        </div>

        {/* Create Button */}
        <div className="mb-10">
          <Link href="/create">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2">
              <PlusIcon className="w-4 h-4" />
              Create New
            </Button>
          </Link>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-3">
          {MenuList.map((menu, index) => {
            const isActive = path === menu.path;
            return (
              <Link key={index} href={menu.path}>
                <div
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-md font-medium transition-all ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <menu.icon size={18} />
                  <span>{menu.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Credit Info */}
      <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-lg mt-6 text-center relative overflow-hidden group transition-transform duration-300">
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/40 to-white opacity-70 blur-sm z-0 group-hover:opacity-100 transition-all duration-300" />

        {/* Icon */}
        <div className="relative z-10 flex justify-center mb-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <CreditCard className="w-6 h-6 text-blue-700" />
          </div>
        </div>

        {/* Title */}
        <h2 className="relative z-10 text-xl font-bold text-blue-700 mb-1 tracking-tight">
          Enjoy the Free Plan 🎉
        </h2>

        {/* Subtitle */}
        <p className="relative z-10 text-sm text-gray-600 mb-4">
          Unlimited access. No cost. Just learn and explore!
        </p>

        {/* Tag */}
        <div className="relative z-10 inline-block px-4 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full shadow-sm">
          🚧 Plans coming soon...
        </div>
      </div>
    </div>
  );
}
