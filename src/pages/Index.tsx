import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import { ServicesSection, AboutPreview, CTASection } from "@/components/home/HomeSections";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <ServicesSection />
      <AboutPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
