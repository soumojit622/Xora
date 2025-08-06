import { Zap, Settings, Book, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Zap,
      title: "Quick Setup",
      description:
        "Sign up and tell us about your exam goals and learning preferences in minutes.",
    },
    {
      icon: Settings,
      title: "AI Customization",
      description:
        "Our AI analyzes your needs and creates a personalized study plan with custom content.",
    },
    {
      icon: Book,
      title: "Start Learning",
      description:
        "Access tailored materials, practice tests, and track your progress toward success.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-blue-600">Xora Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with intelligent exam preparation in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full">
                  {/* <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" /> */}
                </div>
              )}

              {/* Step Number */}
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
