"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StepProgress from "../components/StepProgress";
import { toast } from "sonner";
import { HelpCircle } from "lucide-react";

function QnAPage() {
  const { courseId } = useParams();
  const router = useRouter();
  const [qnaData, setQnaData] = useState([]);
  const [stepCount, setStepCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetQnA();
  }, []);

  const GetQnA = async () => {
    try {
      setLoading(true);
      const result = await axios.post("/api/study-type", {
        courseId,
        studyType: "QA",
      });
      setQnaData(result?.data?.content || []);
    } catch (error) {
      console.error("Error fetching Q&A data:", error);
    } finally {
      setLoading(false);
      toast.success("Pls refresh if QnA not displayed!");
    }
  };

  const goToCoursePage = () => {
    router.push(`/course/${courseId}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-center text-4xl font-bold text-blue-600 mb-10 flex items-center justify-center gap-3">
        <HelpCircle className="w-8 h-8 text-blue-600" />
        Question & Answer
      </h2>

      {/* Loading State */}
      {loading ? (
        <div className="text-center text-gray-500 mt-20 text-lg">
          Loading Q&A...
        </div>
      ) : qnaData.length > 0 ? (
        <>
          {/* Step Progress Bar */}
          <div className="mb-8">
            <StepProgress
              data={qnaData}
              stepCount={stepCount}
              setStepCount={setStepCount}
            />
          </div>

          {/* QnA Cards */}
          <div className="space-y-6">
            {/* Question */}
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                🧠 Question
              </h3>
              <p className="text-blue-900 leading-relaxed text-[17px]">
                {qnaData[stepCount]?.question}
              </p>
            </div>

            {/* Answer */}
            <div className="p-6 rounded-xl bg-green-50 border border-green-200 shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                ✅ Answer
              </h3>
              <p className="text-green-900 leading-relaxed text-[17px]">
                {qnaData[stepCount]?.answer}
              </p>
            </div>

            {/* CTA: Go to Course */}
            {stepCount === qnaData.length - 1 && (
              <div className="flex justify-center pt-6">
                <button
                  onClick={goToCoursePage}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-200"
                >
                  Back to Course Page
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500 mt-20 text-lg">
          No Q&A data available for this course.
        </div>
      )}
    </div>
  );
}

export default QnAPage;
