
import { useTimeBasedTheme } from "@/hooks/useTimeBasedTheme";
import AcademyHero from "@/components/AcademyHero";
import BitcoinFeatures from "@/components/BitcoinFeatures";
import LearningResources from "@/components/LearningResources";
import MembershipSection from "@/components/MembershipSection";
import AcademyFooter from "@/components/AcademyFooter";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const { isDarkMode } = useTimeBasedTheme();

  return (
    <div className="min-h-screen transition-colors duration-300">
      <ThemeToggle />
      <AcademyHero />
      <BitcoinFeatures />
      <LearningResources />
      <MembershipSection />
      <AcademyFooter />
    </div>
  );
};

export default Index;
