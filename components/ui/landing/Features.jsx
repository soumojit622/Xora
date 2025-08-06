import { FileText, CheckCircle, ClipboardList, Brain, Zap, Target } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Content Generation",
      description: "Create personalized study materials based on your learning patterns and exam requirements.",
    },
    {
      icon: FileText,
      title: "Study Plans",
      description: "Automatically generated schedules that adapt to your pace and optimize retention.",
    },
    {
      icon: CheckCircle,
      title: "Progress Tracking",
      description: "Monitor your learning progress and identify areas for improvement with analytics.",
    },
    {
      icon: ClipboardList,
      title: "Practice Tests",
      description: "Generate unlimited practice exams tailored to your subjects and difficulty level.",
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate explanations and corrections to accelerate your understanding.",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set exam targets and receive customized preparation strategies to achieve them.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for <span className="text-blue-600">Smart Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Xora transforms exam preparation with intelligent features designed for success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
