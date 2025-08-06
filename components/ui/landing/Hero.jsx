import {
  Bot,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Play,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-medium text-sm">
                  AI-Powered Learning
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intelligent Exam Preparation,{" "}
              <span className="text-blue-600">Made Effortless</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Transform your study routine with AI-driven content generation.
              Create personalized exam preparation materials tailored to your
              learning style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Try Xora Free
              </button>
              <button className="border cursor-pointer border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                <ArrowRight className="mr-2 w-5 h-5" />
                View Demo
              </button>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-gray-600 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1M+</div>
                <div className="text-gray-600 text-sm">Questions</div>
              </div>
            </div>
          </div>

          {/* Right Content - Simple Mockup */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold">AI Study Assistant</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Mathematics</span>
                  </div>
                  <div className="h-2 bg-blue-200 rounded-full">
                    <div className="h-2 bg-blue-600 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-sm text-blue-700 mt-1 block">
                    75% Complete
                  </span>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 text-purple-600" />
                    <span className="font-medium">Practice Quiz</span>
                  </div>
                  <div className="text-sm text-gray-600">5 questions ready</div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-green-900">
                      Study Streak
                    </span>
                    <span className="text-xl font-bold text-green-600">
                      12 days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
