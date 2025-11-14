import { useState } from "react";
import { motion } from "motion/react";
import { Search, MapPin, Star, ArrowRight, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const destinations = [
  {
    id: 1,
    name: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1614334342593-656fdf19525d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMGphcGFuJTIwdGVtcGxlfGVufDF8fHx8MTc2MzA3NTE5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Culture",
    rating: 4.9,
    reviews: 1234,
    price: "$299",
    description: "Ancient temples, serene gardens, and traditional tea ceremonies",
  },
  {
    id: 2,
    name: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1737891681043-435b34d9c8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzYzMDI2Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Relaxation",
    rating: 5.0,
    reviews: 2156,
    price: "$449",
    description: "Stunning sunsets, white-washed buildings, and azure waters",
  },
  {
    id: 3,
    name: "Ubud, Bali",
    image:
      "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc2MzA1NTUxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Adventure",
    rating: 4.8,
    reviews: 987,
    price: "$349",
    description: "Lush rice terraces, yoga retreats, and vibrant culture",
  },
  {
    id: 4,
    name: "Patagonia, Chile",
    image:
      "https://images.unsplash.com/photo-1551779382-e65b3ec856ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRhZ29uaWElMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYzMDQ3MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Adventure",
    rating: 4.9,
    reviews: 1543,
    price: "$899",
    description: "Breathtaking glaciers, rugged mountains, and pristine wilderness",
  },
  {
    id: 5,
    name: "Marrakech, Morocco",
    image:
      "https://images.unsplash.com/photo-1644028734852-0725af9a6f7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMG1hcmtldHxlbnwxfHx8fDE3NjMxMTc3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Culture",
    rating: 4.7,
    reviews: 876,
    price: "$399",
    description: "Colorful souks, stunning palaces, and exotic flavors",
  },
  {
    id: 6,
    name: "Reykjavik, Iceland",
    image:
      "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbm9ydGhlcm4lMjBsaWdodHN8ZW58MXx8fHwxNzYzMDUxOTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Adventure",
    rating: 5.0,
    reviews: 2341,
    price: "$799",
    description: "Northern lights, geothermal pools, and volcanic landscapes",
  },
  {
    id: 7,
    name: "Serengeti, Tanzania",
    image:
      "https://images.unsplash.com/photo-1728466852402-f233aed0d299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB3aWxkbGlmZSUyMGFmcmljYXxlbnwxfHx8fDE3NjMwNDA5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Adventure",
    rating: 4.9,
    reviews: 1765,
    price: "$1299",
    description: "Wildlife safaris, great migration, and untamed beauty",
  },
  {
    id: 8,
    name: "New York City, USA",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eSUyMHNreWxpbmV8ZW58MXx8fHwxNzYzMTExOTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Culture",
    rating: 4.8,
    reviews: 3421,
    price: "$549",
    description: "Iconic skyline, world-class museums, and diverse culture",
  },
];

const categories = ["All", "Adventure", "Relaxation", "Culture", "Foodie"];

interface DestinationsProps {
  onBack?: () => void;
}

export function Destinations({ onBack }: DestinationsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || dest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-br from-teal-600 to-navy-900 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-white mb-6">Explore Destinations</h1>
              <p className="text-white/90 mb-8">
                Discover your next adventure from our curated collection of
                extraordinary places
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 rounded-full bg-white/95 backdrop-blur-sm border-none"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Organic Shapes */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-coral-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Filters */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`rounded-full whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : ""
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <Button variant="outline" className="rounded-full ml-4">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span>{destination.category}</span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>{destination.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.name}</span>
                  </div>

                  <h3 className="mb-2">{destination.description}</h3>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="text-gray-500">From</p>
                      <p className="text-teal-600">{destination.price}</p>
                    </div>
                    <Button
                      className="bg-teal-600 hover:bg-teal-700 text-white rounded-full group"
                    >
                      Explore
                      <motion.div
                        className="inline-block ml-2"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Button>
                  </div>

                  <p className="text-gray-500 mt-2">
                    {destination.reviews.toLocaleString()} reviews
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="mb-2">No destinations found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
