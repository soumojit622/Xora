import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function StepProgress({ stepCount, setStepCount, data }) {
  const isFirst = stepCount === 0;
  const isLast = stepCount === data.length - 1;

  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      {/* Previous Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setStepCount((prev) => Math.max(prev - 1, 0))}
        disabled={isFirst}
        className="flex items-center gap-1"
      >
        <ChevronLeft size={16} />
        Prev
      </Button>

      {/* Progress Bar */}
      <div className="flex-1 flex gap-2">
        {data.map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
              index < stepCount
                ? "bg-blue-600"
                : index === stepCount
                ? "bg-blue-400"
                : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          setStepCount((prev) => Math.min(prev + 1, data.length - 1))
        }
        disabled={isLast}
        className="flex items-center gap-1"
      >
        Next
        <ChevronRight size={16} />
      </Button>
    </div>
  );
}

export default StepProgress;
