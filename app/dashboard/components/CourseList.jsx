"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Book, XCircle } from "lucide-react";
import CourseCardItem from "./CourseCardItem";
import { CourseCountContext } from "@/app/context/CourseCountContext";

function CourseList() {
  const { user, isLoaded } = useUser();
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setTotalCourse } = useContext(CourseCountContext);

  useEffect(() => {
    if (isLoaded && user) {
      GetCourseList();
    }
  }, [isLoaded, user]);

  const GetCourseList = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    try {
      setLoading(true);
      const result = await axios.post("/api/courses", {
        createdBy: user.primaryEmailAddress.emailAddress,
      });
      setCourseList(result.data.result || []);
      setTotalCourse(result.data.result.length);
    } catch (error) {
      console.error("Error fetching course list:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded || !user) {
    return (
      <div className="w-full h-[40vh] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary rounded-full border-t-transparent" />
      </div>
    );
  }

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold flex items-center gap-2 text-gray-800">
          <Book className="text-primary" size={28} />
          Your Study Material
        </h2>

        <Button
          variant="outline"
          onClick={GetCourseList}
          className={`group relative gap-2 border border-primary px-4 py-2 font-medium transition-all duration-200 
    text-primary hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={loading}
        >
          <RefreshCw
            className={`transition-transform duration-300 ${
              loading ? "animate-spin" : "group-hover:rotate-[-12deg]"
            }`}
            size={18}
          />
          <span>{loading ? "Refreshing..." : "Refresh"}</span>
        </Button>
      </div>

      {courseList.length === 0 && !loading && (
        <div className="w-full py-10 flex flex-col items-center text-gray-500">
          <XCircle size={48} className="mb-4 text-red-500" />
          <p className="text-lg font-medium">No study materials found.</p>
          <p className="text-sm">Try adding some or refreshing the page.</p>
        </div>
      )}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {!loading
          ? courseList.map((course, index) => (
              <div
                key={course.id || index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-all"
              >
                <CourseCardItem course={course} />
              </div>
            ))
          : Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-48 w-full bg-muted rounded-lg animate-pulse"
              />
            ))}
      </div>
    </section>
  );
}

export default CourseList;
