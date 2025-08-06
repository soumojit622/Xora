import { Wallet, CreditCard, Building, Check, Star } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      icon: Wallet,
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "5 AI quizzes per month",
        "Basic progress tracking",
        "Community forums",
        "Email support",
        "Mobile app access",
      ],
      buttonText: "Get Started Free",
      buttonStyle: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    },
    {
      icon: CreditCard,
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For serious students",
      features: [
        "Unlimited AI content",
        "Advanced analytics",
        "Custom study plans",
        "Priority support",
        "Offline access",
        "Export materials",
        "Calendar integration",
      ],
      buttonText: "Start Pro Trial",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
      popular: true,
    },
    {
      icon: Building,
      name: "Institution",
      price: "Custom",
      period: "pricing",
      description: "For schools and organizations",
      features: [
        "Everything in Pro",
        "Multi-user management",
        "Advanced reporting",
        "API access",
        "Custom integrations",
        "Account manager",
        "Training included",
      ],
      buttonText: "Contact Sales",
      buttonStyle: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-blue-600">Learning Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include core AI features.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg border-2 p-8 ${plan.popular ? "border-blue-500" : "border-gray-200"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
