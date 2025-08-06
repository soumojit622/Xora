import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BookOpenText, SlidersHorizontal } from "lucide-react";

export default function TopicInput({ setTopic, setDifficultyLevel }) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <BookOpenText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Enter your topic or content
          </h2>
        </div>
        <Textarea
          placeholder="Start writing or paste your content here..."
          className="mt-1 h-36 resize-none"
          onChange={(event) => setTopic(event.target.value)}
        />
      </div>

      <div className="space-y-2 mt-5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-green-600 dark:text-green-400" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white ">
            Select the difficulty level
          </h2>
        </div>
        <Select onValueChange={(value) => setDifficultyLevel(value)}>
          <SelectTrigger className="w-full bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-600">
            <SelectValue placeholder="Choose difficulty level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Easy">🟢 Easy</SelectItem>
            <SelectItem value="Moderate">🟡 Moderate</SelectItem>
            <SelectItem value="Hard">🔴 Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
