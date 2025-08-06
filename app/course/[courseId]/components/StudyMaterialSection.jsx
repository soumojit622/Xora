import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialCardItem from "./MaterialCardItem";

const StudyMaterialSection = ({ courseId, course }) => {
  const [studyTypeContent, setStudyTypeContent] = useState();

  const MaterialList = [
    {
      name: "Notes/Chapters",
      desc: "Read structured notes to prepare thoroughly",
      icon: "/notes.png",
      path: "/notes",
      type: "notes",
    },
    {
      name: "Flashcard",
      desc: "Memorize key concepts with flashcards",
      icon: "/flashcard.png",
      path: "/flashcards",
      type: "Flashcard",
    },
    {
      name: "Quiz",
      desc: "Test your knowledge with quick quizzes",
      icon: "/quiz.png",
      path: "/quiz",
      type: "Quiz",
    },
    {
      name: "Question/Answer",
      desc: "Practice with Q&A style exercises",
      icon: "/qa.png",
      path: "/qa",
      type: "QA",
    },
  ];

  useEffect(() => {
    GetStudyMaterial();
  }, []);

  const GetStudyMaterial = async () => {
    try {
      const result = await axios.post("/api/study-type", {
        courseId: courseId,
        studyType: "ALL",
      });
      setStudyTypeContent(result?.data);
    } catch (error) {
      console.error("Error fetching study material:", error);
    }
  };

  return (
    <section className="mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
           Study Material
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">
          Select the type of content you want to explore and start learning!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {MaterialList.map((item, index) => (
          <MaterialCardItem
            key={index}
            item={item}
            studyTypeContent={studyTypeContent}
            course={course}
            refreshData={GetStudyMaterial}
          />
        ))}
      </div>
    </section>
  );
};

export default StudyMaterialSection;
