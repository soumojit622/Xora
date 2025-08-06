import { Quote, Star, User } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Engineering Student",
      university: "IIT Delhi",
      content:
        "Xora helped me crack my Data Structures exam with tailored practice sets. The AI truly adapts to my learning style!",
      rating: 5,
    },
    {
      name: "Sneha Nair",
      role: "High School Teacher",
      university: "Delhi Public School",
      content:
        "Creating custom tests for my students has become so effortless. Xora saves me so much time and effort.",
      rating: 5,
    },
    {
      name: "Rohan Mehta",
      role: "Medical Student",
      university: "AIIMS Delhi",
      content:
        "The AI-generated study plans kept me on track during my NEET preparation. Highly recommended for all aspirants!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Users Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands who have transformed their learning with Xora.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <Quote className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.university}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
