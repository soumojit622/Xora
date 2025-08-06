import {
  Github,
  Twitter,
  Linkedin,
  Heart,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Award,
  Users,
  Zap,
  Home,
  DollarSign,
  Info,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Code,
  FileText,
  Shield,
  ScrollText,
  Cookie,
  Lock,
  FileCheck,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Top Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Learning?
                </h3>
                <p className="text-xl text-gray-400 mb-6">
                  Join thousands of students who are already using Xora to ace
                  their exams.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button className="border border-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:brightness-90 transition-all duration-200 flex items-center justify-center">
                    Schedule Demo
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">50K+</div>
                  <div className="text-gray-400">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/logo.png" // Replace this path with your actual logo image path
                      alt="Xora Logo"
                      width={34}
                      height={34}
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    Xora
                  </h3>
                  <div className="text-sm text-gray-500">
                    AI Learning Platform
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Revolutionizing exam preparation with intelligent AI technology.
                Transform your learning experience and achieve academic
                excellence with personalized study tools.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      support@xora.in
                    </div>
                    <div className="text-gray-500 text-sm">Get in touch</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      +91 98765 43210
                    </div>
                    <div className="text-gray-500 text-sm">24/7 Support</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      Kolkata, West Bengal
                    </div>
                    <div className="text-gray-500 text-sm">Headquarters</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: "Home", href: "#home", icon: Home },
                  { name: "Features", href: "#features", icon: Zap },
                  { name: "Pricing", href: "#pricing", icon: DollarSign },
                  { name: "About Us", href: "#about", icon: Info },
                  { name: "Contact", href: "#contact", icon: MessageCircle },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
                    >
                      <link.icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-blue-400 transition-colors" />
                      {link.name}
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Resources</h4>
              <ul className="space-y-4">
                {[
                  { name: "Help Center", href: "#", icon: HelpCircle },
                  { name: "Documentation", href: "#", icon: BookOpen },
                  { name: "API Reference", href: "#", icon: Code },
                  { name: "Community", href: "#", icon: Users },
                  { name: "Blog", href: "#", icon: FileText },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
                    >
                      <link.icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-purple-400 transition-colors" />
                      {link.name}
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Legal</h4>
              <ul className="space-y-4">
                {[
                  { name: "Privacy Policy", href: "#", icon: Shield },
                  { name: "Terms of Service", href: "#", icon: ScrollText },
                  { name: "Cookie Policy", href: "#", icon: Cookie },
                  { name: "Security", href: "#", icon: Lock },
                  { name: "Licenses", href: "#", icon: FileCheck },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
                    >
                      <link.icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-green-400 transition-colors" />
                      {link.name}
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <p className="text-gray-500">
                  © {new Date().getFullYear()} Xora. All rights reserved.
                </p>

                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-gray-500 text-sm">
                    4.9/5 from 2,500+ reviews
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-500 text-sm mr-4">Follow us:</span>
                <a
                  href="https://github.com/soumojit622"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-200 transform hover:scale-110 group"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href=""
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-200 transform hover:scale-110 group"
                >
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/soumojit-banerjee-4914b3228/"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-200 transform hover:scale-110 group"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Developer Credit */}
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-500 flex items-center justify-center">
                Crafted with{" "}
                <Heart className="w-5 h-5 text-red-500 mx-2 animate-pulse" />{" "}
                and
                <Zap className="w-5 h-5 text-yellow-400 mx-2" /> by{" "}
                <span className="ml-2 font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Soumojit Banerjee
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
