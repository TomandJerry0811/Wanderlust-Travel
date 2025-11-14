import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mountain, Waves, Landmark, Heart, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const travelerTypes = [
  {
    id: "adventure",
    label: "Adventure Seeker",
    icon: Mountain,
    color: "bg-orange-500",
    description: "Thrills, hikes, and adrenaline rushes",
  },
  {
    id: "relaxation",
    label: "Relaxation Expert",
    icon: Waves,
    color: "bg-blue-500",
    description: "Beaches, spas, and peaceful retreats",
  },
  {
    id: "culture",
    label: "Culture Enthusiast",
    icon: Landmark,
    color: "bg-purple-500",
    description: "Museums, history, and local traditions",
  },
  {
    id: "foodie",
    label: "Foodie Explorer",
    icon: Heart,
    color: "bg-red-500",
    description: "Culinary experiences and local flavors",
  },
];

interface TravelerQuizProps {
  onComplete?: (type: string) => void;
  onViewItinerary?: () => void;
}

export function TravelerQuiz({ onComplete, onViewItinerary }: TravelerQuizProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSelectType = (typeId: string) => {
    setSelectedType(typeId);
  };

  const handleGenerateItinerary = () => {
    if (selectedType) {
      setShowResults(true);
      if (onComplete) {
        onComplete(selectedType);
      }
    }
  };

  const handleViewFullItinerary = () => {
    if (onViewItinerary) {
      onViewItinerary();
    }
  };

  const getRecommendations = () => {
    const recommendations = {
      adventure: [
        { name: "Patagonia Trek", location: "Chile & Argentina" },
        { name: "Mount Kilimanjaro", location: "Tanzania" },
        { name: "Kayaking in Norway", location: "Norwegian Fjords" },
      ],
      relaxation: [
        { name: "Maldives Resort", location: "Indian Ocean" },
        { name: "Bali Retreat", location: "Indonesia" },
        { name: "Greek Islands", location: "Greece" },
      ],
      culture: [
        { name: "Kyoto Temples", location: "Japan" },
        { name: "Rome & Vatican", location: "Italy" },
        { name: "Marrakech Medina", location: "Morocco" },
      ],
      foodie: [
        { name: "Street Food Tour", location: "Bangkok, Thailand" },
        { name: "Wine & Dine", location: "Tuscany, Italy" },
        { name: "Tapas Trail", location: "Barcelona, Spain" },
      ],
    };
    return recommendations[selectedType as keyof typeof recommendations] || [];
  };

  return (
    <section id="traveler-quiz" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Personalized for You</span>
          </div>
          <h2 className="mb-4">What Type of Traveler Are You?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tell us your travel style and we'll create a personalized itinerary
            just for you
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {travelerTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <motion.div
                      key={type.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        onClick={() => handleSelectType(type.id)}
                        className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                          selectedType === type.id
                            ? "ring-2 ring-teal-600 shadow-lg"
                            : "hover:shadow-md"
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-16 h-16 ${type.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-center mb-2">{type.label}</h3>
                        <p className="text-gray-600 text-center">
                          {type.description}
                        </p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: selectedType ? 1 : 0.5 }}
              >
                <Button
                  onClick={handleGenerateItinerary}
                  disabled={!selectedType}
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8"
                >
                  Generate My Itinerary
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="mb-2">Your Personalized Recommendations</h3>
                <p className="text-gray-600">
                  Based on your{" "}
                  {
                    travelerTypes.find((t) => t.id === selectedType)?.label
                  }{" "}
                  profile
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {getRecommendations().map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-teal-600">{index + 1}</span>
                      </div>
                      <h4 className="mb-2">{rec.name}</h4>
                      <p className="text-gray-600">{rec.location}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="rounded-full"
                >
                  Try Again
                </Button>
                <Button
                  onClick={handleViewFullItinerary}
                  className="bg-teal-600 hover:bg-teal-700 text-white rounded-full"
                >
                  View Full Itinerary
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}