import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardHeader from "../dashboard/components/DashboardHeader";

function CourseViewLayout({ children }) {
  return (
    <div>
      {/* Header */}
      <DashboardHeader />

      {/* Back to Dashboard Button */}
      <div className="mx-10 md:mx-36 mt-6">
        <Link href="/dashboard">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="mx-10 md:mx-36 mt-6">{children}</div>
    </div>
  );
}

export default CourseViewLayout;
