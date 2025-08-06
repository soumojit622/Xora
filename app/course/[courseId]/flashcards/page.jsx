"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import FlashcardItem from "./components/FlashcardItem";
import { Sparkles } from "lucide-react";

function Flashcards() {
  const { courseId } = useParams();
  const [flashCards, setFlashCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [api, setApi] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetFlashCards();
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setIsFlipped(false));
  }, [api]);

  const GetFlashCards = async () => {
    try {
      setIsLoading(true);
      const result = await axios.post("/api/study-type", {
        courseId,
        studyType: "Flashcard",
      });
      setFlashCards(result?.data);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
    } finally {
      setIsLoading(false);
      toast.success("🔄 Flashcards loaded. Please refresh if not visible.");
    }
  };

  const handleClick = () => setIsFlipped((prev) => !prev);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <ClipLoader size={50} color="#6366f1" />
          <p className="text-sm text-gray-500">Loading Flashcards...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10 space-y-2">
        <div className="flex items-center justify-center gap-2 text-blue-600">
          <Sparkles size={24} />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">
            Flashcards
          </h2>
        </div>
        <p className="text-gray-600 max-w-lg mx-auto">
          The ultimate tool to lock in concepts quickly and effectively. Tap to
          flip the card and test your memory!
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {flashCards?.content?.length > 0 ? (
              flashCards.content.map((flashcard, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center"
                >
                  <FlashcardItem
                    isFlipped={isFlipped}
                    handleClick={handleClick}
                    flashcard={flashcard}
                  />
                </CarouselItem>
              ))
            ) : (
              <div className="text-center text-gray-400">
                No flashcards available
              </div>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Flashcards;
