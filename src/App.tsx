import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Institute from "./pages/Institute.tsx";
import BeitDin from "./pages/BeitDin.tsx";
import RazeiMishpat from "./pages/RazeiMishpat.tsx";
import YoungDayanim from "./pages/YoungDayanim.tsx";
import Donations from "./pages/Donations.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/beit-din" element={<BeitDin />} />
          <Route path="/razei-mishpat" element={<RazeiMishpat />} />
          <Route path="/young-dayanim" element={<YoungDayanim />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
