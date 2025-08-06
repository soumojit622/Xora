"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// Lucide Icons
import { Eye, LoaderCircle, TrendingUp } from "lucide-react";

function CourseCardItem({ course }) {
  const isGenerating = course?.status === "Generating";
  const statusColor =
    course?.status === "Generating"
      ? "bg-yellow-500"
      : course?.status === "Completed"
      ? "bg-green-600"
      : "bg-blue-600";

  return (
    <div className="rounded-2xl  bg-white dark:bg-zinc-900 p-5 transition-all  duration-300 space-y-4">
      {/* Top section: logo + status */}
      <div className="flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={48}
          height={48}
          className="rounded-full"
        />
        <span
          className={cn(
            "text-[11px] font-medium px-2 py-1 rounded-full text-white",
            statusColor
          )}
        >
          {course?.status}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-zinc-800 dark:text-white flex items-center gap-2">
        {course?.courseLayout?.courseTitle}
      </h2>

      {/* Summary */}
      <p className="text-sm text-muted-foreground flex items-start gap-2">
        <span className="line-clamp-3">
          {course?.courseLayout?.courseSummary}
        </span>
      </p>

      {/* Progress */}
      <div className="mt-2">
        <Progress value={isGenerating ? 25 : 100} />
        <p className="text-xs text-right text-muted-foreground mt-1 flex items-center justify-end gap-1">
          <TrendingUp className="size-3" />
          {isGenerating ? "Generating..." : "Completed"}
        </p>
      </div>

      {/* Button */}
      <div className="pt-4 flex justify-end">
        {isGenerating ? (
          <Button
            disabled
            size="sm"
            className="opacity-75 cursor-not-allowed gap-2"
          >
            <LoaderCircle className="animate-spin size-4" />
            Generating...
          </Button>
        ) : (
          <Link href={`/course/${course?.courseId}`}>
            <Button size="sm" className="gap-2">
              <Eye className="size-4" />
              View Course
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CourseCardItem;
