import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MapPin, Plane } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const destinations = [
  {
    id: 1,
    name: "Marrakech",
    country: "Morocco",
    image:
      "https://images.unsplash.com/photo-1644028734852-0725af9a6f7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMG1hcmtldHxlbnwxfHx8fDE3NjMxMTc3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Lose yourself in the vibrant souks and ancient medinas",
    position: { top: "30%", left: "30%" },
  },
  {
    id: 2,
    name: "Patagonia",
    country: "Chile",
    image:
      "https://images.unsplash.com/photo-1551779382-e65b3ec856ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRhZ29uaWElMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYzMDQ3MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Trek through breathtaking glaciers and pristine wilderness",
    position: { top: "70%", left: "20%" },
  },
  {
    id: 3,
    name: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1614334342593-656fdf19525d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMGphcGFuJTIwdGVtcGxlfGVufDF8fHx8MTc2MzA3NTE5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Discover ancient temples and serene bamboo forests",
    position: { top: "40%", left: "80%" },
  },
  {
    id: 4,
    name: "Serengeti",
    country: "Tanzania",
    image:
      "https://images.unsplash.com/photo-1728466852402-f233aed0d299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB3aWxkbGlmZSUyMGFmcmljYXxlbnwxfHx8fDE3NjMwNDA5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Witness the great migration and majestic wildlife",
    position: { top: "60%", left: "50%" },
  },
];

export function StoryMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="py-20 bg-gradient-to-b from-teal-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Explore the World</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow the journey across continents and discover stories waiting to
            be told
          </p>
        </motion.div>

        <motion.div
          style={{ opacity, scale }}
          className="relative h-[600px] bg-teal-100/30 rounded-3xl overflow-hidden"
        >
          {/* Animated Path Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 1 }}
          >
            <motion.path
              d="M 30% 30% Q 50% 50% 80% 40%"
              stroke="#14B8A6"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 30% 30% Q 25% 50% 20% 70%"
              stroke="#14B8A6"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.path
              d="M 80% 40% Q 65% 50% 50% 60%"
              stroke="#14B8A6"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
            />
          </svg>

          {/* Animated Plane */}
          <motion.div
            className="absolute"
            style={{ top: "30%", left: "30%", zIndex: 2 }}
            animate={{
              top: ["30%", "40%", "60%"],
              left: ["30%", "55%", "80%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Plane className="w-6 h-6 text-teal-600 rotate-45" />
          </motion.div>

          {/* Destination Hotspots */}
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="absolute group cursor-pointer"
              style={{
                top: destination.position.top,
                left: destination.position.left,
                zIndex: 3,
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Pulsing Pin */}
              <div className="relative">
                <motion.div
                  className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(20, 184, 166, 0.7)",
                      "0 0 0 20px rgba(20, 184, 166, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </motion.div>

                {/* Hover Card */}
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={{ y: -10 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-64">
                    <div className="relative h-32">
                      <ImageWithFallback
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h4 className="mb-1">{destination.name}</h4>
                      <p className="text-gray-500 mb-2">
                        {destination.country}
                      </p>
                      <p className="text-gray-600">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Organic Shapes Background */}
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-coral-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
