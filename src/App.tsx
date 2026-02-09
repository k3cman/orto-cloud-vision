import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import UslugeLayout, { Usluge2D, Usluge3D, UslugeKefa, UslugeCenovnik } from "./pages/Usluge";
import Informacije from "./pages/Informacije";
import ZaDoktore from "./pages/ZaDoktore";
import Lokacije from "./pages/Lokacije";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/usluge" element={<UslugeLayout />}>
            <Route index element={<Navigate to="/usluge/2d" replace />} />
            <Route path="2d" element={<Usluge2D />} />
            <Route path="3d" element={<Usluge3D />} />
            <Route path="kefalometrija" element={<UslugeKefa />} />
            <Route path="cenovnik" element={<UslugeCenovnik />} />
          </Route>
          <Route path="/informacije" element={<Informacije />} />
          <Route path="/za-doktore" element={<ZaDoktore />} />
          <Route path="/lokacije" element={<Lokacije />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
