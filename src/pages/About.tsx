import { motion } from "motion/react";
import { Heart, Globe, Users, Award, Target, Zap } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

const stats = [
  { label: "Destinations", value: "150+", icon: Globe },
  { label: "Happy Travelers", value: "50K+", icon: Users },
  { label: "Countries Covered", value: "75+", icon: Award },
  { label: "Years of Experience", value: "10+", icon: Target },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description:
      "We believe travel transforms lives and opens minds to new possibilities.",
  },
  {
    icon: Globe,
    title: "Sustainable Tourism",
    description:
      "Committed to protecting the places we love for future generations.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Building a global community of adventurers who share and inspire.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Using technology to make travel planning effortless and exciting.",
  },
];

const team = [
  { name: "Sarah Chen", role: "Founder & CEO", avatar: "👩‍💼" },
  { name: "Marcus Rivera", role: "Head of Experiences", avatar: "👨‍✈️" },
  { name: "Aisha Patel", role: "Sustainability Lead", avatar: "👩‍🔬" },
  { name: "James Kim", role: "Tech Director", avatar: "👨‍💻" },
];

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-600 to-purple-600 text-white py-20 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">About Wanderlust</h1>
            <p className="mb-8 text-white/90">
              We're on a mission to make the world more accessible, one journey
              at a time. Since 2015, we've helped over 50,000 travelers discover
              their dream destinations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-6 h-6 text-teal-600" />
                  </motion.div>
                  <h2 className="mb-1">{stat.value}</h2>
                  <p className="text-gray-600">{stat.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To inspire and empower people to explore the world responsibly,
            creating meaningful connections and unforgettable memories along the
            way.
          </p>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from curating experiences
              to building our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-4"
                    >
                      <Icon className="w-7 h-7 text-teal-600" />
                    </motion.div>
                    <h3 className="mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Travel enthusiasts, tech innovators, and culture lovers working
              together to revolutionize how you explore the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                  <motion.div
                    className="text-6xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {member.avatar}
                  </motion.div>
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Join Our Journey</h2>
            <p className="mb-8 text-white/90">
              Be part of a community that's redefining travel. Share your
              stories, discover new places, and connect with fellow adventurers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 rounded-full px-8"
              >
                Start Exploring
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8"
              >
                Work With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
