import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { StatsSection } from "./components/StatsSection";
import { TrainingSection } from "./components/TrainingSection";
import { OfficialCoursesSection } from "./components/OfficialCoursesSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <BenefitsSection />
      <TrainingSection />
      <OfficialCoursesSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
