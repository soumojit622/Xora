import React from "react";
import ReactCardFlip from "react-card-flip";
import { RefreshCcw } from "lucide-react";

function FlashcardItem({ isFlipped, handleClick, flashcard }) {
  return (
    <div className="flex items-center justify-center">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* Front side */}
        <div
          onClick={handleClick}
          className="bg-gradient-to-br from-blue-500 to-blue-700 text-white font-semibold text-center flex items-center justify-center rounded-2xl shadow-lg transition-transform duration-500 ease-in-out cursor-pointer h-[250px] w-[200px] md:h-[350px] md:w-[300px] p-6"
        >
          <div className="flex flex-col items-center gap-3">
            <RefreshCcw className="animate-spin-slow opacity-40" size={24} />
            <span className="text-lg md:text-xl">{flashcard?.front}</span>
          </div>
        </div>

        {/* Back side */}
        <div
          onClick={handleClick}
          className="bg-white text-blue-700 border border-blue-300 font-medium text-center flex items-center justify-center rounded-2xl shadow-lg transition-transform duration-500 ease-in-out cursor-pointer  h-[250px] w-[200px] md:h-[350px] md:w-[300px] p-6"
        >
          <div className="flex flex-col items-center gap-3">
            <RefreshCcw className="opacity-40" size={24} />
            <span className="text-lg md:text-xl">{flashcard?.back}</span>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default FlashcardItem;
