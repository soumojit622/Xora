import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

function QuizCardItem({ quiz, userSelectedOption }) {
  const [selectedOption, setSelectedOption] = useState();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    userSelectedOption(option);
  };

  return (
    <div className="mt-10 p-6 bg-white shadow-md border rounded-xl max-w-3xl mx-auto">
      {/* Question */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <HelpCircle className="text-blue-600" size={28} />
        <h2 className="font-bold text-2xl text-center text-gray-800">
          {quiz?.question}
        </h2>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quiz?.options?.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`w-full px-4 py-3 rounded-lg border text-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md
              ${
                selectedOption === option
                  ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                  : "bg-gray-50 text-gray-700 hover:bg-blue-50"
              }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizCardItem;
