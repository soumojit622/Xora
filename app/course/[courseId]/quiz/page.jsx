"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StepProgress from "../components/StepProgress";
import { toast } from "sonner";
import QuizCardItem from "./components/QuizCardItem";
import { CheckCircle, XCircle, BookOpenCheck } from "lucide-react";

function Quiz() {
  const { courseId } = useParams();
  const router = useRouter();
  const [quizData, setQuizData] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [stepCount, setStepCount] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    GetQuiz();
  }, []);

  const GetQuiz = async () => {
    try {
      const result = await axios.post("/api/study-type", {
        courseId,
        studyType: "Quiz",
      });

      const questions = result?.data?.content?.questions || [];
      setQuiz(questions);
      setQuizData(result.data);

      if (!isDataFetched) {
        toast.success("✅ Quiz loaded. Refresh if questions are missing.");
        setIsDataFetched(true);
      }

      if (questions.length > 0) {
        setCorrectAnswer(questions[0]?.answer);
      }
    } catch (error) {
      console.error("Quiz fetch failed:", error);
      toast.error("❌ Failed to load quiz. Try again later.");
    }
  };

  const checkAnswer = (userAnswer, currentQuestion) => {
    if (userAnswer === currentQuestion.answer) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  };

  useEffect(() => {
    if (quiz.length > 0) {
      setCorrectAnswer(quiz[stepCount]?.answer);
      setIsCorrectAnswer(null);
    }
  }, [stepCount, quiz]);

  const goToCoursePage = () => router.push(`/course/${courseId}`);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-2 flex items-center gap-3">
        <BookOpenCheck size={28} />
        Quiz Time
      </h2>
      <p className="text-gray-500 mb-6">
        Answer the following questions to test your knowledge.
      </p>

      {quiz.length > 0 ? (
        <>
          <StepProgress
            data={quiz}
            stepCount={stepCount}
            setStepCount={(value) => setStepCount(value)}
          />

          <div className="mt-10 mb-6">
            <QuizCardItem
              quiz={quiz[stepCount]}
              userSelectedOption={(v) => checkAnswer(v, quiz[stepCount])}
            />
          </div>

          {isCorrectAnswer === false && (
            <div className="flex items-center gap-3 border p-4 rounded-md border-red-500 bg-red-100 text-red-700 transition-all duration-300 mb-4">
              <XCircle size={24} />
              <div>
                <h4 className="font-semibold text-md">Incorrect</h4>
                <p className="text-sm">
                  Correct Answer: <strong>{correctAnswer}</strong>
                </p>
              </div>
            </div>
          )}

          {isCorrectAnswer === true && (
            <div className="flex items-center gap-3 border p-4 rounded-md border-green-500 bg-green-100 text-green-700 transition-all duration-300 mb-4">
              <CheckCircle size={24} />
              <div>
                <h4 className="font-semibold text-md">Correct</h4>
                <p className="text-sm">Great job! Your answer is correct.</p>
              </div>
            </div>
          )}

          {/* Final Button */}
          {stepCount === quiz.length - 1 && (
            <div className="flex justify-center mt-10">
              <button
                onClick={goToCoursePage}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
              >
                Go to Course Page
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center h-48">
          <p className="text-gray-400 text-lg">Loading quiz...</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
