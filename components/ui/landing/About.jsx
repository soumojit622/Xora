import { UserCircle, BookOpen, Quote, Users } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <span className="text-blue-600 font-semibold">About Xora</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Revolutionizing Education with <span className="text-blue-600">AI Innovation</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Xora blends advanced AI technology with proven learning strategies to empower students across India.
              Our mission is to make competitive exam preparation smarter, faster, and more accessible—tailored to each student's learning style.
            </p>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Student-Centric Platform</p>
                <p className="text-gray-600">Crafted for every learner’s journey</p>
              </div>
            </div>
          </div>

          {/* Right Testimonial */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Quote className="w-8 h-8 text-blue-600" />
              <div className="h-1 bg-blue-600 flex-1 rounded"></div>
            </div>

            <blockquote className="text-lg text-gray-700 italic mb-6">
              "Xora completely changed how I prepared for NEET. The AI-curated resources and adaptive plans helped me
              stay consistent and focused throughout my preparation."
            </blockquote>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <UserCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Ananya Sharma</p>
                <p className="text-gray-600">NEET Aspirant, Kolkata</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
