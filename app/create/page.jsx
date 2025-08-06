"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

// Lucide icons
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import SelectOption from "@/components/SelectOption";
import TopicInput from "@/components/TopicInput";

export default function CreateCourse() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    console.log(formData);
  };

  const GenerateCourseOutline = async () => {
    const courseId = uuidv4();
    setLoading(true);

    // Show toast while generating
    const toastId = toast.loading("Generating your course outline...");

    try {
      const result = await axios.post("/api/generate-course-outline", {
        courseId,
        ...formData,
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });

      toast.success("Course outline generated successfully! 🎉", {
        id: toastId,
      });

      router.replace("/dashboard");

      // Optional follow-up toast
      console.log(result);
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate course. Please try again.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center px-5 py-10 md:px-20 lg:px-36 min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Back to Dashboard Button */}
      <div className="absolute top-5 left-5">
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

      {/* Header */}
      <div className="max-w-3xl w-full text-center space-y-3 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight flex items-center justify-center gap-3">
          Start Building your Personal Study Material
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Fill all details in order to generate study material for your next
          project
        </p>
      </div>

      {/* Form Steps */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6 md:p-10 transition-all duration-300">
        {step === 0 ? (
          <SelectOption
            selectedStudyType={(value) => handleUserInput("courseType", value)}
          />
        ) : (
          <TopicInput
            setDifficultyLevel={(value) =>
              handleUserInput("difficultyLevel", value)
            }
            setTopic={(value) => handleUserInput("topic", value)}
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center w-full max-w-xl mt-10">
        {step !== 0 ? (
          <Button
            variant="outline"
            className="w-32 flex gap-2 items-center justify-center"
            onClick={() => setStep(0)}
          >
            <ArrowLeft size={18} />
            Previous
          </Button>
        ) : (
          <div className="w-32" />
        )}

        {step === 0 ? (
          <Button
            className="w-32 flex gap-2 items-center justify-center"
            onClick={() => setStep(1)}
          >
            Next
            <ArrowRight size={18} />
          </Button>
        ) : (
          <Button
            className="w-32 flex gap-2 items-center justify-center"
            onClick={GenerateCourseOutline}
            disabled={loading}
          >
            <Sparkles className={loading ? "animate-pulse" : ""} size={18} />
            {loading ? "Generating..." : "Generate"}
          </Button>
        )}
      </div>
    </div>
  );
}
