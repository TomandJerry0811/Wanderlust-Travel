import { motion } from "motion/react";
import { Leaf, TreePine, Droplet, Wind } from "lucide-react";
import { Card } from "./ui/card";

const impacts = [
  {
    icon: TreePine,
    label: "Carbon Offset",
    value: "2.5 tons",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Droplet,
    label: "Water Saved",
    value: "500 L",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Wind,
    label: "Clean Energy",
    value: "85%",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Leaf,
    label: "Eco Score",
    value: "94/100",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
];

export function EcoImpactMeter() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Leaf className="w-4 h-4" />
            <span>Sustainable Travel</span>
          </div>
          <h2 className="mb-4">Travel Mindfully</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every journey counts. See the positive impact your eco-conscious
            travel choices make on our planet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <motion.div
                    className={`w-16 h-16 ${impact.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className={`w-8 h-8 ${impact.color}`} />
                  </motion.div>
                  <h3 className="mb-2">{impact.value}</h3>
                  <p className="text-gray-600">{impact.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h3>Your Sustainability Journey</h3>
            <span className="text-teal-600">Level 5 - Eco Warrior</span>
          </div>
          
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          
          <p className="text-gray-600 mt-4">
            You're 250 points away from becoming an Eco Champion! Keep choosing
            sustainable travel options.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
