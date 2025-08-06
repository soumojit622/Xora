import { Button } from "@/components/ui/button";
import axios from "axios";
import { RefreshCcw, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const MaterialCardItem = ({ item, studyTypeContent, course, refreshData }) => {
  const [loading, setLoading] = useState(false);

  const isContentReady = () => {
    if (!studyTypeContent) return false;
    const content = studyTypeContent[item.type.toLowerCase()];
    if (!content) return false;
    if (item.type === "notes") {
      return content.length > 0;
    }
    return content.length > 0 && content.some((item) => item.content);
  };

  const GenerateContent = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const chapters = course?.courseLayout?.chapters
        .map((chapter) => chapter?.chapterTitle)
        .join(", ");

      await axios.post("/api/study-type-content", {
        courseId: course?.courseId,
        type: item.type,
        chapters,
      });

      refreshData(true);
      toast.success("Content generation started. Please refresh shortly.");
    } catch (error) {
      console.error("Error generating content:", error);
      toast.error(
        "Generation failed: " + (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  const contentReady = isContentReady();

  return (
    <Link href={`/course/${course?.courseId}${item.path}`} passHref>
      <div
        className={`relative border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center text-center bg-white dark:bg-zinc-900 h-64 justify-between ${
          !contentReady ? "grayscale opacity-80" : "hover:scale-[1.02]"
        }`}
      >
        {/* Badge */}
        <div
          className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide ${
            contentReady ? "bg-green-500 text-white" : "bg-gray-500 text-white"
          }`}
        >
          {contentReady ? "Ready" : "Generate"}
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <Image
            src={item.icon}
            alt={`${item.name} icon`}
            width={50}
            height={50}
          />
          <h3 className="font-semibold text-base text-gray-800 dark:text-white">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground px-2">{item.desc}</p>
        </div>

        {/* Button */}
        {contentReady ? (
          <Button className="w-full gap-2 mt-4" variant="outline">
            <Eye size={16} />
            View
          </Button>
        ) : (
          <Button
            className="w-full gap-2 mt-4"
            variant="outline"
            onClick={GenerateContent}
            disabled={loading}
          >
            {loading && <RefreshCcw size={16} className="animate-spin" />}
            Generate
          </Button>
        )}
      </div>
    </Link>
  );
};

export default MaterialCardItem;
