import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Users,
  BarChart3,
  Shield,
  Zap,
  Download,
  CheckCircle,
  Star,
  Clock,
  Target,
  Smartphone,
  Database,
  Settings,
  FileText,
  CreditCard,
  Globe,
  ArrowRight,
  Play,
  Menu,
  X,
  Send,
  QrCode,
  Upload,
  Calendar,
  TrendingUp,
  Lock,
  Headphones,
  Award,
  User,
  LogIn,
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("user");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <motion.header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  MSGZONE
                </span>
                <p className="text-xs text-green-600 font-medium">
                  WhatsApp Automation
                </p>
              </div>
            </motion.div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Features", "Pricing", "Demo", "Support", "About"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ y: -2 }}
                    className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                  >
                    {item}
                  </motion.a>
                ),
              )}
            </nav>

            {/* CTA Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex items-center space-x-3"
            >
              <a href="https://whatsapp.web.webifyit.in/login">
                <Button
                  variant="outline"
                  className="rounded-full border-green-200 text-green-700 hover:bg-green-50"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </a>
              <a href="https://whatsapp.web.webifyit.in/register">
                <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 shadow-lg">
                  <User className="h-4 w-4 mr-2" />
                  Register
                </Button>
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-3 pt-4">
                {["Features", "Pricing", "Demo", "Support", "About"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {item}
                    </a>
                  ),
                )}
                <div className="flex flex-col space-y-2 pt-4">
                  <a href="https://whatsapp.web.webifyit.in/login">
                    <Button variant="outline" className="w-full rounded-full">
                      <LogIn className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </a>
                  <a href="https://whatsapp.web.webifyit.in/register">
                    <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full w-full">
                      <User className="h-4 w-4 mr-2" />
                      Register
                    </Button>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-2 mb-4"
            >
              <Badge className="bg-green-100 text-green-700 px-3 py-1 hover:bg-green-100">
                <Zap className="h-3 w-3 mr-1" />
                WhatsApp Business Automation
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 px-3 py-1 hover:bg-blue-100">
                Cloud Based Solution
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Automate Your{" "}
              <span className="text-green-500 relative">
                WhatsApp Marketing
              </span>{" "}
              with MSGZONE
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-lg"
            >
              Professional WhatsApp Web automation software for businesses. Send
              bulk messages, manage customers, and boost your marketing
              efficiency with our powerful web application.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-6 py-6">
              {[
                { icon: Users, label: "1000+ Messages/Batch", color: "green" },
                { icon: Shield, label: "99% Uptime", color: "blue" },
                { icon: Zap, label: "Instant Delivery", color: "purple" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg bg-${item.color}-100`}>
                    <item.icon className={`h-4 w-4 text-${item.color}-600`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="https://whatsapp.web.webifyit.in/">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 shadow-lg group"
                >
                  {/* <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" /> */}
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-green-200 text-green-700 hover:bg-green-50"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-4 pt-4"
            >
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                4.9/5 rating from 50+ businesses
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Dashboard Mockup */}
            <div>
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 0, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute  -bottom-40  hidden md:block -left-0 bg-white rounded-xl shadow-lg p-4 border border-green-100 max-w-64 "
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Send className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Messages Sent</p>
                    <p className="text-lg font-bold text-green-600">50.2k</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-24 -left-36 hidden md:block bg-white rounded-xl shadow-lg p-4 border border-blue-100"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Success Rate</p>
                    <p className="text-lg font-bold text-blue-600">98.7%</p>
                  </div>
                </div>
              </motion.div>

              {/* Main dashboard card */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16">
            <motion.h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for{" "}
              <span className="text-green-500">WhatsApp Automation</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MSGZONE provides comprehensive tools for businesses to automate
              WhatsApp marketing, manage customers, and scale their
              communication efficiently.
            </motion.p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("admin")}
                  className={`px-8 py-3 rounded-full font-medium transition-all ${
                    activeTab === "admin"
                      ? "bg-white shadow-md text-green-600"
                      : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  Admin Panel
                </button>
                <button
                  onClick={() => setActiveTab("user")}
                  className={`px-8 py-3 rounded-full font-medium transition-all ${
                    activeTab === "user"
                      ? "bg-white shadow-md text-green-600"
                      : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  User Panel
                </button>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeTab === "admin"
              ? [
                  {
                    icon: BarChart3,
                    title: "Advanced Dashboard",
                    description:
                      "Monitor WhatsApp connections, view user activity, track messages sent and payments with beautiful analytics.",
                    color: "green",
                    features: [
                      "Real-time monitoring",
                      "Activity overview (7 days)",
                      "Graphical reports",
                    ],
                  },
                  {
                    icon: Users,
                    title: "User Management",
                    description:
                      "Complete user control with detailed profiles, status tracking, and administrative actions.",
                    color: "blue",
                    features: [
                      "Add/edit users",
                      "Active/inactive filtering",
                      "User status management",
                    ],
                  },
                  {
                    icon: FileText,
                    title: "Comprehensive Reports",
                    description:
                      "Detailed reporting for message delivery, scheduled messages, and plan sales with export options.",
                    color: "purple",
                    features: [
                      "Delivery reports",
                      "Scheduled message tracking",
                      "Sales analytics",
                    ],
                  },
                  {
                    icon: Settings,
                    title: "Plan Management",
                    description:
                      "Create and modify subscription plans with flexible pricing models and multi-device support.",
                    color: "orange",
                    features: [
                      "Day-wise plans",
                      "Message count limits",
                      "Multi-device options",
                    ],
                  },
                  {
                    icon: CreditCard,
                    title: "Payment Integration",
                    description:
                      "Seamless payment gateway integration for processing user subscriptions and plan purchases.",
                    color: "indigo",
                    features: [
                      "Multiple gateways",
                      "Automatic billing",
                      "Payment tracking",
                    ],
                  },
                  {
                    icon: Send,
                    title: "Promotional Tools",
                    description:
                      "Send promotional campaigns to bulk WhatsApp numbers with attachments and scheduling.",
                    color: "pink",
                    features: [
                      "Bulk messaging",
                      "File attachments",
                      "Message scheduling",
                    ],
                  },
                ]
              : [
                  {
                    icon: QrCode,
                    title: "Easy Login System",
                    description:
                      "Quick login via QR code scanning or registered WhatsApp number for seamless access.",
                    color: "green",
                    features: [
                      "QR code login",
                      "Number verification",
                      "Secure authentication",
                    ],
                  },
                  {
                    icon: MessageSquare,
                    title: "Bulk Messaging",
                    description:
                      "Send messages to thousands of customers with Excel import, media attachments, and templates.",
                    color: "blue",
                    features: [
                      "Excel import",
                      "Media attachments",
                      "Message templates",
                    ],
                  },
                  {
                    icon: BarChart3,
                    title: "Message Reports",
                    description:
                      "Track message status with detailed reports, filters, and export options in Excel/PDF format.",
                    color: "purple",
                    features: [
                      "Status tracking",
                      "Date filters",
                      "Export reports",
                    ],
                  },
                  {
                    icon: Calendar,
                    title: "Smart Scheduling",
                    description:
                      "Schedule messages for optimal delivery times and manage your communication timeline.",
                    color: "orange",
                    features: [
                      "Time scheduling",
                      "Batch processing",
                      "Delivery optimization",
                    ],
                  },
                  {
                    icon: Globe,
                    title: "Developer API",
                    description:
                      "Generate API keys for external integrations and access WhatsApp API parameters.",
                    color: "indigo",
                    features: [
                      "API key generation",
                      "External integration",
                      "Custom development",
                    ],
                  },
                  {
                    icon: Target,
                    title: "Template Management",
                    description:
                      "Access admin-approved message templates and create effective marketing campaigns.",
                    color: "pink",
                    features: [
                      "Pre-approved templates",
                      "Campaign management",
                      "Custom templates",
                    ],
                  },
                ]
            ).map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div
                      className={`w-14 h-14 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${feature.color}-200 transition-colors`}
                    >
                      <feature.icon
                        className={`h-7 w-7 text-${feature.color}-600`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-500"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div className="space-y-8">
              <motion.h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Choose <span className="text-green-500">MSGZONE</span>?
              </motion.h2>

              <motion.p className="text-xl text-gray-600">
                Professional WhatsApp automation designed for businesses that
                need reliable, scalable, and secure messaging solutions.
              </motion.p>

              <motion.div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "99% Uptime Reliability",
                    description:
                      "Enterprise-grade reliability ensures your business communication never stops.",
                  },
                  {
                    icon: Zap,
                    title: "High Performance",
                    description:
                      "Process and send messages to 1000+ users per batch with minimal delay.",
                  },
                  {
                    icon: Lock,
                    title: "Data Security",
                    description:
                      "All user data, WhatsApp numbers, and payment details are securely encrypted.",
                  },
                  {
                    icon: Headphones,
                    title: "24/7 Support",
                    description:
                      "Professional support team ready to help you maximize your automation potential.",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-3 bg-green-100 rounded-xl">
                      <benefit.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="relative">
              <Card className="bg-white shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white text-2xl">
                        Performance Stats
                      </CardTitle>
                      <p className="text-green-100">Real-time system metrics</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      {
                        label: "Messages Sent",
                        value: "50.2K+",
                        color: "green",
                      },
                      { label: "Active Users", value: "50+", color: "blue" },
                      {
                        label: "Success Rate",
                        value: "98.7%",
                        color: "purple",
                      },
                      { label: "Uptime", value: "99.9%", color: "orange" },
                    ].map((stat, index) => (
                      <motion.div key={stat.label} className="text-center">
                        <p
                          className={`text-3xl font-bold text-${stat.color}-600 mb-1`}
                        >
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        System Performance
                      </span>
                      <span className="text-sm text-green-600 font-semibold">
                        Excellent
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "97%" }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Choose Your <span className="text-green-500">Plan</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Flexible pricing plans designed for businesses of all sizes. Start
              with our free trial and scale as you grow.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                name: "Starter",
                price: "Free",
                period: "trial",
                description: "Perfect for testing and small businesses",
                features: [
                  "100 messages",
                  "1 WhatsApp number",
                  "Basic templates",
                  "Email support",
                  "7-day trial",
                  "Bulk Messaging",
                  "Message Scheduling",
                  "Anti-Block System",
                  "API Integration",
                ],
                popular: false,
                cta: "Start Free Trial",
              },
              {
                name: "PREMIUM",
                price: "₹399",
                period: "month",
                description: " For large organizations",
               
                features: [
                "Unlimited messages",
                  "5 WhatsApp number",
                  "Unlimited templates",
                  "Email support",
                  "30 days",
                  "Bulk Messaging",
                  "Message Scheduling",
                  "Media Attachments ",
                  "Anti-Block System",
                  "AI Template Generator",
                  "WhatsApp Marketing Tools",
                  "API Integration",
                ],
                popular: true,
                cta: "Get PREMIUM",
              },
              {
                name: "CLASSIC",
                price: "₹149",
                period: "month",
                description: "Ideal for growing businesses",
                features: [
                "10000 messages",
                  "5 WhatsApp number",
                  "Email support",
                  "30 days",
                  "Bulk Messaging",
                  "Message Scheduling",
                  "Media Attachments ",
                  "Anti-Block System",
                  "AI Template Generator",
                  "WhatsApp Marketing Tools",
                  "API Integration",
                ],
                popular: false,
                cta: "GET CLASSIC",
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`h-full text-center ${
                    plan.popular
                      ? "border-green-200 shadow-xl ring-2 ring-green-500 ring-opacity-20"
                      : "border-gray-200 hover:border-green-200"
                  } transition-all duration-300`}
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <div className="mb-8">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-500">/{plan.period}</span>
                      )}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full rounded-full ${
                        plan.popular
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-gray-100 hover:bg-green-50 text-gray-900 hover:text-green-700"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              All plans include free updates, security patches, and basic
              support
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                30-day money back
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1" />
                No setup fees
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section
        id="download"
        className="py-16 bg-gradient-to-r from-green-500 to-emerald-600"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div className="max-w-4xl mx-auto space-y-8">
            <motion.h2 className="text-3xl lg:text-5xl font-bold text-white">
              Ready to Automate Your{" "}
              <span className="text-green-200">WhatsApp Marketing</span>?
            </motion.h2>

            <motion.p className="text-xl text-green-100 max-w-2xl mx-auto">
              Create Account on MSGZONE now and start your free trial. No credit
              card required, setup takes less than 5 minutes.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://whatsapp.web.webifyit.in/login">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-50 rounded-full px-8 shadow-lg group"
                >
                  <LogIn className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Login
                </Button>
              </a>
              <a href="https://whatsapp.web.webifyit.in/register">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white  hover:bg-white text-green-600 rounded-full px-8"
                >
                  <User className="mr-2 h-4 w-4" />
                  Register
                </Button>
              </a>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                {
                  icon: Play,
                  title: "Quick Start",
                  description: "Begin using the platform in minutes",
                },
                {
                  icon: QrCode,
                  title: "Easy Setup",
                  description: "Connect your WhatsApp with QR scan",
                },
                {
                  icon: MessageSquare,
                  title: "Start Messaging",
                  description: "Begin your automation journey",
                },
              ].map((step, index) => (
                <motion.div key={step.title} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-green-100">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div className="grid md:grid-cols-4 gap-8">
            <motion.div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">MSGZONE</span>
                  <p className="text-green-400 text-sm">WhatsApp Automation</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-sm">
                Professional WhatsApp automation software for businesses.
                Automate your marketing and boost customer engagement.
              </p>
            </motion.div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "About", "API", "Updates"],
              },
              {
                title: "Support",
                links: [
                  "Help Center",
                  "Documentation",
                  "Contact Us",
                  "Training",
                  "Community",
                ],
              },
              {
                title: "Company",
                links: [
                  "About Us",
                  "Privacy Policy",
                  "Terms of Service",
                  "Careers",
                  "Partners",
                ],
              },
            ].map((section, index) => (
              <motion.div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 MSGZONE. All rights reserved. Version 1.0
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">
                  All systems operational
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
