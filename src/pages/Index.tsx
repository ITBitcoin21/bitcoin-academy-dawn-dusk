
import { useTimeBasedTheme } from "@/hooks/useTimeBasedTheme";
import AcademyHero from "@/components/AcademyHero";
import BitcoinFeatures from "@/components/BitcoinFeatures";
import LearningResources from "@/components/LearningResources";
import MembershipSection from "@/components/MembershipSection";
import AcademyFooter from "@/components/AcademyFooter";

const Index = () => {
  const { isDarkMode } = useTimeBasedTheme();

  return (
    <div className="min-h-screen transition-colors duration-300">
      <AcademyHero />
      <BitcoinFeatures />
      <LearningResources />
      <MembershipSection />
      <AcademyFooter />
    </div>
  );
};

export default Index;
