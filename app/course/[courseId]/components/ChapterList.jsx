import React from "react";
import { BookOpen } from "lucide-react";

function ChapterList({ course }) {
  const CHAPTERS = course?.courseLayout?.chapters;

  return (
    <div className="mt-8 pb-10">
      <h2 className="font-bold text-3xl text-black flex items-center gap-2 mb-4">
        Chapters
      </h2>

      <div className="space-y-3">
        {CHAPTERS?.map((chapter, index) => (
          <div
            key={index}
            className="flex gap-4 items-start p-5 bg-white hover:bg-slate-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
          >
            <div className="text-3xl">{chapter?.emoji || "📘"}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {chapter?.chapterTitle}
              </h3>
              <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
                {chapter?.chapterSummary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
