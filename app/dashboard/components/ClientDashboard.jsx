import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus, Rocket } from "lucide-react";
import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import CourseList from "./CourseList";

export default function ClientDashboard() {
  return (
    <div className="px-4 py-6 sm:px-8 sm:py-10 bg-background text-foreground">
      <WelcomeBanner />

      <div className="mt-8 flex flex-col sm:flex-row sm:justify-end gap-4">
        {/* Create New */}
        <Link href="/create" className="sm:w-auto w-full">
          <Button
            size="lg"
            className="bg-blue-600 w-full sm:w-auto gap-2 rounded-xl shadow-lg"
          >
            <Plus size={18} />
            Create New
          </Button>
        </Link>

        {/* Upgrade */}
        <Link href="/dashboard/upgrade" className="sm:w-auto w-full">
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto gap-2 rounded-xl shadow-lg hover:brightness-90"
          >
            <Rocket size={18} />
            Upgrade Plan
          </Button>
        </Link>
      </div>
      <CourseList />
    </div>
  );
}
