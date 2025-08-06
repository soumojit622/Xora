import { Users, GraduationCap, Building } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: Users,
      title: "For Students",
      items: [
        "Personalized study plans",
        "AI-generated practice questions",
        "Real-time progress tracking",
        "Instant feedback and explanations",
        "24/7 access to materials",
      ],
    },
    {
      icon: GraduationCap,
      title: "For Teachers",
      items: [
        "Automated content generation",
        "Student progress monitoring",
        "Customizable assessment tools",
        "Time-saving grading assistance",
        "Data-driven teaching insights",
      ],
    },
    {
      icon: Building,
      title: "For Institutions",
      items: [
        "Scalable learning solutions",
        "Comprehensive analytics",
        "LMS platform integration",
        "Reduced administrative workload",
        "Improved success rates",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits for <span className="text-blue-600">Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Xora empowers learners, educators, and institutions with AI-driven tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-6">{benefit.title}</h3>

              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
