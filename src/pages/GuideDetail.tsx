import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  Share2,
  Bookmark,
  ChevronRight,
  Clock,
  DollarSign,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const tableOfContents = [
  { id: "overview", label: "Overview" },
  { id: "highlights", label: "Top Highlights" },
  { id: "itinerary", label: "Day-by-Day Itinerary" },
  { id: "accommodation", label: "Where to Stay" },
  { id: "food", label: "Must-Try Foods" },
  { id: "tips", label: "Travel Tips" },
  { id: "budget", label: "Budget Guide" },
];

const highlights = [
  {
    title: "Ancient Temples",
    description: "Visit over 2,000 temples and shrines",
    icon: "🏯",
  },
  {
    title: "Bamboo Forest",
    description: "Walk through the magical Arashiyama forest",
    icon: "🎋",
  },
  {
    title: "Tea Ceremony",
    description: "Experience traditional Japanese tea culture",
    icon: "🍵",
  },
  {
    title: "Geisha District",
    description: "Explore historic Gion and spot geishas",
    icon: "👘",
  },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival & Fushimi Inari",
    activities: [
      "Arrive at Kansai International Airport",
      "Check into your ryokan (traditional inn)",
      "Visit Fushimi Inari Shrine's 10,000 torii gates",
      "Enjoy kaiseki dinner at the ryokan",
    ],
  },
  {
    day: 2,
    title: "Eastern Kyoto Temples",
    activities: [
      "Breakfast at the ryokan",
      "Kiyomizu-dera Temple with city views",
      "Stroll through Ninenzaka and Sannenzaka streets",
      "Visit Gion district in the evening",
    ],
  },
  {
    day: 3,
    title: "Arashiyama & Zen Gardens",
    activities: [
      "Explore Arashiyama Bamboo Grove",
      "Visit Tenryu-ji Temple gardens",
      "Traditional lunch by the river",
      "Evening at Kinkaku-ji (Golden Pavilion)",
    ],
  },
];

interface GuideDetailProps {
  onBack?: () => void;
}

export function GuideDetail({ onBack }: GuideDetailProps) {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1614334342593-656fdf19525d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMGphcGFuJTIwdGVtcGxlfGVufDF8fHx8MTc2MzA3NTE5OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Kyoto, Japan"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Floating Action Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-6 right-6 flex gap-2"
        >
          <Button
            size="icon"
            variant="outline"
            className="rounded-full bg-white/90 backdrop-blur-sm border-none"
          >
            <Share2 className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full bg-white/90 backdrop-blur-sm border-none"
          >
            <Bookmark className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 text-white/90 mb-4">
                <MapPin className="w-5 h-5" />
                <span>Kyoto, Japan</span>
              </div>
              <h1 className="text-white mb-4">
                The Ultimate Kyoto Travel Guide
              </h1>
              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>3-7 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Solo / Couples / Families</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span>4.9 (1,234 reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Two-Pane Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <Card className="p-6">
                <h3 className="mb-4">Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`w-full text-left py-2 px-3 rounded-lg transition-colors flex items-center justify-between group ${
                        activeSection === item.id
                          ? "bg-teal-50 text-teal-700"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          activeSection === item.id ? "rotate-90" : ""
                        }`}
                      />
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full">
                    Start Planning
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Overview */}
            <motion.section
              id="overview"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">
                Kyoto, the cultural heart of Japan, offers an enchanting blend
                of ancient traditions and modern charm. Once the imperial
                capital for over a thousand years, this city is home to
                countless temples, pristine gardens, and geisha districts that
                transport you back in time.
              </p>
              <p className="text-gray-700 mb-4">
                From the iconic vermilion torii gates of Fushimi Inari to the
                serene bamboo groves of Arashiyama, Kyoto promises
                unforgettable experiences at every turn. Whether you're seeking
                spiritual enlightenment, culinary adventures, or simply the
                beauty of cherry blossoms in spring, Kyoto delivers magic in
                abundance.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-gray-500">Best Time</p>
                    <p>Mar-May, Oct-Nov</p>
                  </div>
                </Card>
                <Card className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-coral-600" />
                  </div>
                  <div>
                    <p className="text-gray-500">Daily Budget</p>
                    <p>$80-$150</p>
                  </div>
                </Card>
                <Card className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-500">Languages</p>
                    <p>Japanese, English</p>
                  </div>
                </Card>
              </div>
            </motion.section>

            {/* Highlights */}
            <motion.section
              id="highlights"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Top Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-3">{highlight.icon}</div>
                      <h3 className="mb-2">{highlight.title}</h3>
                      <p className="text-gray-600">{highlight.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Itinerary */}
            <motion.section
              id="itinerary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-6">
                {itinerary.map((day, index) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white">
                          {day.day}
                        </div>
                        <h3>{day.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {day.activities.map((activity, actIndex) => (
                          <li
                            key={actIndex}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Accommodation */}
            <motion.section
              id="accommodation"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4">Where to Stay</h2>
              <p className="text-gray-700 mb-6">
                Kyoto offers diverse accommodation options, from traditional
                ryokans with tatami mat rooms to modern hotels in the city
                center. For an authentic experience, stay in a ryokan and enjoy
                kaiseki dinners and onsen baths.
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded">
                <h4 className="mb-2">💡 Pro Tip</h4>
                <p className="text-gray-700">
                  Book accommodations near Kyoto Station for easy access to
                  attractions and the bullet train. The Gion and Higashiyama
                  areas offer a more traditional atmosphere.
                </p>
              </div>
            </motion.section>

            {/* Food */}
            <motion.section
              id="food"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4">Must-Try Foods</h2>
              <p className="text-gray-700 mb-6">
                Kyoto's cuisine is refined and seasonal, emphasizing fresh
                local ingredients. Don't miss kaiseki (multi-course haute
                cuisine), matcha desserts, and yudofu (tofu hot pot).
              </p>
            </motion.section>

            {/* Travel Tips */}
            <motion.section
              id="tips"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4">Travel Tips</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600">✓</span>
                  </div>
                  <p className="text-gray-700">
                    Purchase a Kyoto City Bus Pass for unlimited rides on city
                    buses
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600">✓</span>
                  </div>
                  <p className="text-gray-700">
                    Visit temples early in the morning to avoid crowds
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600">✓</span>
                  </div>
                  <p className="text-gray-700">
                    Respect temple etiquette: remove shoes when required and
                    speak quietly
                  </p>
                </li>
              </ul>
            </motion.section>

            {/* Budget */}
            <motion.section
              id="budget"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4">Budget Guide</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Accommodation (per night)
                    </span>
                    <span>$40-$200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Meals (per day)</span>
                    <span>$25-$60</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Transportation</span>
                    <span>$10-$20</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Activities</span>
                    <span>$15-$40</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span>Total (per day)</span>
                    <span className="text-teal-600">$90-$320</span>
                  </div>
                </div>
              </Card>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
