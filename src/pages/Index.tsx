import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/components/HeroSection';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';

export default function Index() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <SiteFooter />
      <NewsTicker />
    </>
  );
}
