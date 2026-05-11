import { useEffect } from 'react';
import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/components/HeroSection';
import SiteFooter from '@/components/SiteFooter';

export default function Index() {
  useEffect(() => { document.title = 'כולל ענב | כרמי המשפט – המכון הגבוה ללימודי דיינות'; }, []);
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <SiteFooter />
    </>
  );
}
