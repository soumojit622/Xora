"use client";

import React, { useState } from "react";
import {
  BookCheck,
  Briefcase,
  Brain,
  Code,
  SquareDashedKanban,
} from "lucide-react";

export default function SelectOption({ selectedStudyType }) {
  const options = [
    { name: "Exam", icon: BookCheck },
    { name: "Job Interview", icon: Briefcase },
    { name: "Practice", icon: SquareDashedKanban },
    { name: "Coding Prep", icon: Code },
    { name: "Other", icon: Brain },
  ];

  const [selectedOption, setSelectedOption] = useState();

  return (
    <div className="text-center px-4">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-8 text-muted-foreground">
        What's your purpose for studying?
      </h2>

      {/* Option Grid */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {options.map(({ name, icon: Icon }) => {
          const isSelected = selectedOption === name;

          return (
            <button
              key={name}
              onClick={() => {
                setSelectedOption(name);
                selectedStudyType(name);
              }}
              className={`group rounded-xl border px-4 py-6 flex flex-col items-center justify-center transition-all duration-200 ease-in-out shadow-sm 
              ${
                isSelected
                  ? "bg-primary/10 border-primary text-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:bg-accent/50"
              }`}
            >
              {/* Icon */}
              <Icon
                size={28}
                className={`mb-3 transition-colors duration-300 ${
                  isSelected
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-primary"
                }`}
              />

              {/* Label */}
              <span className="text-sm font-medium">{name}</span>

              {/* Highlight bar */}
              {isSelected && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-b-xl" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
