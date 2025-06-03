import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Check,
  Star,
  Users,
  BarChart3,
  Cloud,
  Target,
  Shield,
  Zap,
  FileText,
  PieChart,
  Monitor,
  Menu,
  X,
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Biccas</span>
            </motion.div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Home", "Product", "FAQ", "Blog", "About Us"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -2 }}
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
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
              className="hidden md:block"
            >
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6">
                Sign Up
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-100"
            >
              <nav className="flex flex-col space-y-3 pt-4">
                {["Home", "Product", "FAQ", "Blog", "About Us"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full w-full mt-4">
                  Sign Up
                </Button>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              We're here to{" "}
              <span className="text-emerald-500">Increase your</span>{" "}
              Productivity
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-md"
            >
              Let's make your work more organized and easily using the Todos
              Dashboard with many of the latest features that help you complete
              tasks every day.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 group"
              >
                Try free trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 hover:bg-emerald-50 hover:border-emerald-300"
              >
                View Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Dashboard Mockup */}
            <div className="relative">
              {/* Background decorative elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-80"
              />

              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-80"
              />

              {/* Main dashboard card */}
              <Card className="bg-white/90 backdrop-blur-sm border-emerald-100 shadow-2xl">
                <CardContent className="p-6">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Analytics
                        </h3>
                        <p className="text-sm text-gray-500">$845.00</p>
                      </div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700">
                      +5.7%
                    </Badge>
                  </div>

                  {/* Chart area */}
                  <div className="h-32 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg mb-4 flex items-end justify-around p-4">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: index * 0.1 + 1, duration: 0.6 }}
                        className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t w-4"
                      />
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">5,420</p>
                      <p className="text-sm text-gray-500">Tasks Done</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">97%</p>
                      <p className="text-sm text-gray-500">Success Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating task card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -right-8 top-8 bg-white rounded-lg shadow-lg p-4 w-48"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">
                      Project Alpha
                    </h4>
                    <p className="text-xs text-gray-500">Due today</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ delay: 2, duration: 1 }}
                    className="bg-blue-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            More than 25,000 teams use Collabs
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Unsplash", "Notion", "INTERCOM", "descript", "grammarly"].map(
              (brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-xl font-semibold text-gray-500"
                >
                  {brand}
                </motion.div>
              ),
            )}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-gray-900"
            >
              How we support our pratner all over the world
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-600 text-lg">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9 Rating</span>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">4.9 Rating</p>
                <p className="text-sm text-gray-500">Databricks</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {[
              {
                icon: FileText,
                title: "Publishing",
                description:
                  "Plan, collaborate, and share with the team from anywhere.",
                color: "emerald",
              },
              {
                icon: BarChart3,
                title: "Analytics",
                description:
                  "Analyze and track performance and trends for optimization.",
                color: "blue",
              },
              {
                icon: Users,
                title: "Engagement",
                description:
                  "Building community and customer engagement across the world.",
                color: "purple",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors"
              >
                <div className={`p-2 rounded-lg bg-${feature.color}-100`}>
                  <feature.icon
                    className={`h-6 w-6 text-${feature.color}-600`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="container mx-auto px-4 py-16">
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
            Our Features you cab get
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We offer a variety of interesting features that you can help
            increase yor productivity at work and manage your projrct easily
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8">
              Get Started
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Users,
              title: "Collaboration Teams",
              description:
                "Here you can handle projects together with team virtually",
            },
            {
              icon: Cloud,
              title: "Cloud Storage",
              description:
                "No nedd to worry about storage because we provide storage up to 2TB",
            },
            {
              icon: PieChart,
              title: "Daily Analytics",
              description:
                "We always provide useful informatin to make it easier for you every day",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center group"
            >
              <Card className="p-8 h-full border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-emerald-200 transition-colors">
                    <feature.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-gray-900"
            >
              What Benefit Will You Get
            </motion.h2>

            <motion.div variants={staggerContainer} className="space-y-4">
              {[
                "Free Consulting With Experet Saving Money",
                "Online Banking",
                "Investment Report Every Month",
                "Saving Money For The Future",
                "Online Transection",
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  variants={fadeInUp}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="bg-white shadow-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Money Transfer Successful
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Transaction ID</span>
                    <span className="font-mono text-sm">#TXN-001</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Amount</span>
                    <span className="font-semibold text-green-600">
                      $2,500.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Status</span>
                    <Badge className="bg-green-100 text-green-700">
                      Completed
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
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
            Choose Plan That's Right For You
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Choose plan that works best for you, feel free to contact us
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-full">
              <div className="flex">
                <button className="px-6 py-2 rounded-full bg-white shadow-sm font-medium">
                  Bil Monthly
                </button>
                <button className="px-6 py-2 rounded-full text-gray-600">
                  Bil Yearly
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              name: "Free",
              price: "0",
              features: [
                "3 Users",
                "All UI components",
                "Lifetime access",
                "Use on 1 project",
                "3 Months support",
              ],
              popular: false,
            },
            {
              name: "Pro",
              price: "9",
              features: [
                "5 Users",
                "All UI components",
                "Lifetime access",
                "Unlimited projects",
                "Features and collaborations",
                "All incoming premium",
                "1 Year support",
              ],
              popular: true,
            },
            {
              name: "Business",
              price: "16",
              features: [
                "All the features of pro plan",
                "Account success Manager",
                "Single sign-On (SSO)",
                "Co-conception program",
                "Collaboration",
              ],
              popular: false,
            },
          ].map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-emerald-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card
                className={`p-8 text-center h-full ${
                  plan.popular
                    ? "bg-emerald-500 text-white border-emerald-500 shadow-2xl"
                    : "bg-white border-gray-200 hover:border-emerald-200"
                } transition-all duration-300`}
              >
                <CardContent className="space-y-6">
                  <div>
                    <h3
                      className={`text-xl font-semibold mb-2 ${
                        plan.popular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span
                        className={`text-4xl font-bold ${
                          plan.popular ? "text-white" : "text-gray-900"
                        }`}
                      >
                        ${plan.price}
                      </span>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-emerald-100" : "text-gray-500"
                        }`}
                      >
                        /month
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center justify-center space-x-2"
                      >
                        <Check
                          className={`h-4 w-4 ${
                            plan.popular
                              ? "text-emerald-200"
                              : "text-emerald-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.popular ? "text-emerald-100" : "text-gray-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full rounded-full ${
                      plan.popular
                        ? "bg-white text-emerald-500 hover:bg-gray-50"
                        : "bg-emerald-500 text-white hover:bg-emerald-600"
                    }`}
                  >
                    {plan.popular ? "Get Pro" : `Get ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  People are Saying About DoWhith
                </h2>
                <p className="text-gray-300 text-lg">
                  Everything you need to accept to payment and grow your money
                  of manage anywhere on planet
                </p>
              </div>

              <div className="space-y-6">
                <blockquote className="text-lg italic">
                  "I am very helped by this E-wallet application , my days are
                  very easy to use this application and its very helpful in my
                  life , even I can pay a short time 😍"
                </blockquote>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-emerald-500 rounded-full border-2 border-gray-900 flex items-center justify-center"
                      >
                        <span className="text-sm font-semibold">U</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold">Arvid Norberg</p>
                    <p className="text-gray-400 text-sm">CEO at Company</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-800 rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Get Started</h3>
                      <p className="text-gray-400 text-sm">
                        Join our community
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Input
                    placeholder="Enter your email"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold">Biccas</span>
              </div>
              <p className="text-gray-400">
                Get started now increase your productivity
              </p>
              <div className="flex space-x-4">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="bg-emerald-500 hover:bg-emerald-600">
                  →
                </Button>
              </div>
            </motion.div>

            {[
              {
                title: "Support",
                links: [
                  "Help centre",
                  "Account information",
                  "About",
                  "Contact us",
                ],
              },
              {
                title: "Help and Solution",
                links: [
                  "Talk to support",
                  "Support docs",
                  "System status",
                  "Covid responds",
                ],
              },
              {
                title: "Product",
                links: ["Update", "Security", "Beta test", "Pricing product"],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                variants={fadeInUp}
                className="space-y-4"
              >
                <h3 className="font-semibold">{section.title}</h3>
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm">
              © 2022 Biccas Inc. Copyright and rights reserved
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms and Condition
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
