import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { BookOpen } from "lucide-react";

function CourseIntroCard({ course }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:items-center p-6 md:p-8 border border-gray-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow rounded-2xl bg-white dark:bg-zinc-900">
      {/* Logo */}
      <div className="flex-shrink-0 flex justify-center md:justify-start">
        <Image
          src="/logo.png"
          alt="Course Logo"
          width={70}
          height={70}
          className="rounded-xl"
        />
      </div>

      {/* Course Details */}
      <div className="flex-1">
        <h2 className="font-bold text-2xl text-gray-800 dark:text-white mb-2">
          {course?.courseLayout?.courseTitle}
        </h2>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-3">
          {course?.courseLayout?.courseSummary}
        </p>

        <Progress className="mt-4" value={0} />

        <div className="flex items-center gap-2 mt-4 text-primary font-medium text-base">
          <BookOpen className="w-5 h-5" />
          <span>Total Chapters: {course?.courseLayout?.chapters?.length}</span>
        </div>
      </div>
    </div>
  );
}

export default CourseIntroCard;
