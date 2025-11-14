import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, MapPin, Share2, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const experiences = [
  {
    id: 1,
    title: "Hidden Gems in Kyoto",
    location: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1614334342593-656fdf19525d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMGphcGFuJTIwdGVtcGxlfGVufDF8fHx8MTc2MzA3NTE5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    price: "$299",
    duration: "3 days",
    saved: false,
  },
  {
    id: 2,
    title: "Santorini Sunset Experience",
    location: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1737891681043-435b34d9c8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzYzMDI2Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5.0,
    price: "$449",
    duration: "5 days",
    saved: false,
  },
  {
    id: 3,
    title: "Bali Rice Terrace Trek",
    location: "Ubud, Bali",
    image:
      "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc2MzA1NTUxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    price: "$349",
    duration: "4 days",
    saved: false,
  },
  {
    id: 4,
    title: "Patagonia Adventure",
    location: "Torres del Paine, Chile",
    image:
      "https://images.unsplash.com/photo-1551779382-e65b3ec856ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRhZ29uaWElMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYzMDQ3MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    price: "$899",
    duration: "7 days",
    saved: false,
  },
  {
    id: 5,
    title: "Northern Lights Quest",
    location: "Reykjavik, Iceland",
    image:
      "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbm9ydGhlcm4lMjBsaWdodHN8ZW58MXx8fHwxNzYzMDUxOTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5.0,
    price: "$799",
    duration: "6 days",
    saved: false,
  },
];

interface ExperienceCarouselProps {
  onBookExperience?: (experienceId: number) => void;
}

export function ExperienceCarousel({ onBookExperience }: ExperienceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [savedExperiences, setSavedExperiences] = useState<number[]>([]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

  const handleSave = (id: number) => {
    setSavedExperiences((prev) =>
      prev.includes(id) ? prev.filter((expId) => expId !== id) : [...prev, id]
    );
  };

  const handleShare = () => {
    // Share functionality
    alert("Share link copied to clipboard!");
  };

  const handleBooking = () => {
    if (onBookExperience) {
      onBookExperience(experiences[currentIndex].id);
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Top Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated adventures that will transform your perspective and create
            memories for a lifetime
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative h-[500px] flex items-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                  {/* Image */}
                  <motion.div
                    className="relative rounded-3xl overflow-hidden h-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={experiences[currentIndex].image}
                      alt={experiences[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Rating Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2"
                    >
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span>{experiences[currentIndex].rating}</span>
                    </motion.div>

                    {/* Action Buttons */}
                    <div className="absolute top-6 left-6 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleSave(experiences[currentIndex].id)}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            savedExperiences.includes(experiences[currentIndex].id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-700"
                          }`}
                        />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleShare}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                      >
                        <Share2 className="w-5 h-5 text-gray-700" />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center gap-2 text-teal-600 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{experiences[currentIndex].location}</span>
                      </div>
                      
                      <h2 className="mb-4">
                        {experiences[currentIndex].title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6">
                        Embark on an unforgettable journey to discover the
                        authentic beauty and culture of this incredible
                        destination. Experience local traditions, breathtaking
                        landscapes, and create memories that will last forever.
                      </p>

                      <div className="flex items-center gap-6 mb-8">
                        <div>
                          <p className="text-gray-500">Duration</p>
                          <p>{experiences[currentIndex].duration}</p>
                        </div>
                        <div className="h-12 w-px bg-gray-300" />
                        <div>
                          <p className="text-gray-500">From</p>
                          <p className="text-teal-600">
                            {experiences[currentIndex].price}
                          </p>
                        </div>
                      </div>

                      <Button
                        onClick={handleBooking}
                        size="lg"
                        className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8"
                      >
                        Book This Experience
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={handlePrev}
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={handleNext}
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {experiences.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-teal-600"
                    : "w-2 bg-gray-300"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}