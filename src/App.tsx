import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import Index from "./pages/Index.tsx";
import Institute from "./pages/Institute.tsx";
import BeitDin from "./pages/BeitDin.tsx";
import RazeiMishpat from "./pages/RazeiMishpat.tsx";
import YoungDayanim from "./pages/YoungDayanim.tsx";
import Donations from "./pages/Donations.tsx";
import Contact from "./pages/Contact.tsx";
import HalachaYomit from "./pages/HalachaYomit.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

type LightboxItem = {
  image: string;
  pdf?: string;
  formLink?: string;
};

function GlobalLightbox() {
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const item = (e as CustomEvent).detail;
      setLightbox(item);
    };
    window.addEventListener('open-lightbox', handler);
    return () => window.removeEventListener('open-lightbox', handler);
  }, []);

  if (!lightbox) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 999999,
        backgroundColor: 'rgba(0,0,0,0.85)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={() => setLightbox(null)}
    >
      <div
        style={{ position: 'relative', maxWidth: '672px', width: '100%' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setLightbox(null)}
          style={{
            position: 'absolute', top: '-40px', left: 0,
            color: 'white', fontSize: '24px', fontWeight: 'bold',
            background: 'none', border: 'none', cursor: 'pointer',
          }}
        >
          ✕
        </button>

        <img
          src={lightbox.image}
          alt="news"
          style={{
            width: '100%',
            maxHeight: '70vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            display: 'block',
          }}
        />

        {(lightbox.pdf || lightbox.formLink) && (
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '16px', flexWrap: 'wrap' }}>
            {lightbox.pdf && (
              <a
                href={lightbox.pdf}
                download
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: 'white', color: 'black', fontWeight: 600,
                  padding: '10px 20px', borderRadius: '12px',
                  textDecoration: 'none', fontSize: '14px',
                }}
              >
                📄 הורד תקנון PDF
              </a>
            )}
            {lightbox.formLink && (
              <a
                href={lightbox.formLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: '#2563eb', color: 'white', fontWeight: 600,
                  padding: '10px 20px', borderRadius: '12px',
                  textDecoration: 'none', fontSize: '14px',
                }}
              >
                📝 הרשמה לתחרות
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GlobalLightbox />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/beit-din" element={<BeitDin />} />
          <Route path="/razei-mishpat" element={<RazeiMishpat />} />
          <Route path="/young-dayanim" element={<YoungDayanim />} />
          <Route path="/halacha-yomit" element={<HalachaYomit />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;