import { useState } from "react";
import { motion } from "motion/react";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Southeast Asia You Must Visit",
    excerpt:
      "Discover the lesser-known paradises that will take your breath away and leave you with memories for a lifetime.",
    image:
      "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?w=800",
    author: "Sarah Chen",
    date: "Nov 10, 2025",
    category: "Destinations",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Sustainable Travel",
    excerpt:
      "Learn how to explore the world while minimizing your environmental impact and supporting local communities.",
    image:
      "https://images.unsplash.com/photo-1551779382-e65b3ec856ef?w=800",
    author: "Aisha Patel",
    date: "Nov 8, 2025",
    category: "Travel Tips",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Best Street Food Destinations Around the World",
    excerpt:
      "Embark on a culinary journey through the world's most vibrant street food scenes and authentic flavors.",
    image:
      "https://images.unsplash.com/photo-1644028734852-0725af9a6f7f?w=800",
    author: "Marcus Rivera",
    date: "Nov 5, 2025",
    category: "Food & Culture",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Digital Nomad's Guide to Working While Traveling",
    excerpt:
      "Tips, tools, and destinations perfect for remote workers who want to explore while earning.",
    image:
      "https://images.unsplash.com/photo-1614334342593-656fdf19525d?w=800",
    author: "James Kim",
    date: "Nov 3, 2025",
    category: "Work & Travel",
    readTime: "12 min read",
  },
  {
    id: 5,
    title: "Adventure Sports Destinations for Thrill Seekers",
    excerpt:
      "Push your limits at these adrenaline-pumping destinations offering world-class adventure sports.",
    image:
      "https://images.unsplash.com/photo-1603741614953-4187ed84cc50?w=800",
    author: "Sarah Chen",
    date: "Oct 28, 2025",
    category: "Adventure",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Luxury Travel on a Budget: Insider Secrets",
    excerpt:
      "Experience five-star travel without breaking the bank with these expert tips and tricks.",
    image:
      "https://images.unsplash.com/photo-1737891681043-435b34d9c8d7?w=800",
    author: "Marcus Rivera",
    date: "Oct 25, 2025",
    category: "Travel Tips",
    readTime: "9 min read",
  },
];

const categories = [
  "All",
  "Destinations",
  "Travel Tips",
  "Food & Culture",
  "Adventure",
  "Work & Travel",
];

export function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        {/* Article Hero */}
        <div className="relative h-[500px] overflow-hidden">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <ImageWithFallback
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 p-8"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-teal-600 text-white px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
                <span className="text-white/90">{selectedPost.readTime}</span>
              </div>
              <h1 className="text-white mb-4">{selectedPost.title}</h1>
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <Button
            onClick={() => setSelectedPost(null)}
            variant="outline"
            className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full"
          >
            ← Back to Blog
          </Button>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700">
              {selectedPost.excerpt}
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2>Exploring the Unknown</h2>
            <p className="text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <h2>Key Takeaways</h2>
            <ul>
              <li>Plan ahead but stay flexible</li>
              <li>Connect with locals for authentic experiences</li>
              <li>Travel sustainably and responsibly</li>
              <li>Document your journey but live in the moment</li>
            </ul>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20 overflow-hidden">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-6">Travel Stories & Guides</h1>
            <p className="mb-8 text-white/90">
              Inspiration, tips, and tales from around the world to fuel your
              wanderlust
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 rounded-full bg-white/95 backdrop-blur-sm text-gray-900 border-none"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : ""
                }`}
              >
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden cursor-pointer group hover:shadow-2xl transition-shadow"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span>{post.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-purple-600 group-hover:gap-4 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="mb-2">No articles found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </motion.div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Never Miss a Story</h2>
            <p className="mb-8 text-white/90">
              Subscribe to get the latest travel tips, destination guides, and
              exclusive deals delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-full"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
