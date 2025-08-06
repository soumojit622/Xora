"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  BookOpenCheck,
} from "lucide-react";

function ViewNotes() {
  const { courseId } = useParams();
  const router = useRouter();

  const [notes, setNotes] = useState([]);
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    GetNotes();
  }, []);

  const GetNotes = async () => {
    try {
      const result = await axios.post("/api/study-type", {
        courseId,
        studyType: "notes",
      });

      const parsedNotes = result?.data?.notes.map((note) => ({
        ...note,
        notes: note.notes,
      }));

      setNotes(parsedNotes || []);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  };

  const styleContent = (content) => {
    return content
      .replace(/```html|```/g, "") // Clean code blocks
      .trim()
      .replace(
        /<h3>/g,
        `<h3 style="font-size:1.5rem; font-weight:700; color:#1e293b; margin-bottom:0.75rem;">`
      )
      .replace(
        /<h4>/g,
        `<h4 style="font-size:1.25rem; font-weight:600; color:#334155; margin-bottom:0.5rem;">`
      )
      .replace(
        /<p>/g,
        `<p style="font-size:1.05rem; color:#475569; line-height:1.8; margin-bottom:1rem;">`
      )
      .replace(
        /<li>/g,
        `<li style="font-size:1rem; color:#475569; line-height:1.8; margin-bottom:0.75rem;">`
      );
  };

  if (!Array.isArray(notes)) {
    return <div className="text-center text-muted">No notes available</div>;
  }

  return notes.length > 0 ? (
    <div className="max-w-4xl mx-auto px-5 py-12 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
        <div className="flex items-center gap-3">
          <BookOpenCheck className="text-blue-600" size={28} />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">
            Study Notes
          </h1>
        </div>
        <span className="text-sm text-gray-500">
          Chapter {stepCount + 1} of {notes.length}
        </span>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mb-6 gap-3">
        <Button
          variant="secondary"
          onClick={() => setStepCount((prev) => Math.max(prev - 1, 0))}
          disabled={stepCount === 0}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Prev
        </Button>

        <div className="flex-1 mx-4 flex gap-1 h-2 rounded-full bg-gray-200 overflow-hidden">
          {notes.map((_, index) => (
            <div
              key={index}
              className={`flex-1 transition-all ${
                index <= stepCount ? "bg-indigo-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <Button
          variant="secondary"
          onClick={() =>
            setStepCount((prev) => Math.min(prev + 1, notes.length - 1))
          }
          disabled={stepCount === notes.length - 1}
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Notes Content */}
      <div
        className="bg-white dark:bg-zinc-900/40 p-6 rounded-xl border shadow-md prose prose-slate max-w-none dark:prose-invert transition-all duration-300"
        dangerouslySetInnerHTML={{
          __html: styleContent(notes[stepCount]?.notes || ""),
        }}
      />

      {/* Completion Message */}
      {stepCount === notes.length - 1 && (
        <div className="mt-10 text-center space-y-5">
          <div className="flex justify-center">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h2 className="text-xl font-bold text-gray-800">
            🎉 You’ve completed the notes!
          </h2>
          <p className="text-gray-500">Great job! Ready for the next step?</p>
          <Button onClick={() => router.back()}>Back to Course</Button>
        </div>
      )}
    </div>
  ) : (
    <div className="text-center mt-20 text-gray-500 text-lg">
      No notes available.
    </div>
  );
}

export default ViewNotes;
