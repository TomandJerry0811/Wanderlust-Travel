import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TravelerQuiz } from "./components/TravelerQuiz";
import { ExperienceCarousel } from "./components/ExperienceCarousel";
import { StoryMap } from "./components/StoryMap";
import { EcoImpactMeter } from "./components/EcoImpactMeter";
import { Footer } from "./components/Footer";
import { ParticleBackground } from "./components/ParticleBackground";
import { Destinations } from "./pages/Destinations";
import { GuideDetail } from "./pages/GuideDetail";
import { Games } from "./pages/Games";
import { BookingFlow } from "./pages/BookingFlow";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";

type Page = "home" | "destinations" | "guide" | "experiences" | "guides" | "about" | "blog" | "start-planning" | "games" | "booking";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: string) => {
    if (page === "home") {
      setCurrentPage("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "destinations") {
      setCurrentPage("destinations");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "guides") {
      setCurrentPage("guide");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "about") {
      setCurrentPage("about");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "blog") {
      setCurrentPage("blog");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "start-planning") {
      setCurrentPage("booking");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "experiences") {
      setCurrentPage("games");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // For other navigation items, scroll to home for now
      setCurrentPage("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleExploreDestinations = () => {
    setCurrentPage("destinations");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookExperience = () => {
    setCurrentPage("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewItinerary = () => {
    setCurrentPage("guide");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "destinations":
        return <Destinations onBack={() => setCurrentPage("home")} />;
      case "guide":
        return <GuideDetail onBack={() => setCurrentPage("home")} />;
      case "games":
        return <Games />;
      case "booking":
        return <BookingFlow />;
      case "about":
        return <About />;
      case "blog":
        return <Blog />;
      default:
        return (
          <>
            <Hero onExploreClick={handleExploreDestinations} />
            <TravelerQuiz onViewItinerary={handleViewItinerary} />
            <ExperienceCarousel onBookExperience={handleBookExperience} />
            <StoryMap />
            <EcoImpactMeter />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer />
    </div>
  );
}