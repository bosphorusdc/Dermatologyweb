import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResponsiveDX } from "responsive-dx";
import Home from "./pages/Home";
import DermatologyHome from "./pages/DermatologyHome";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import SchoolHome from "./pages/SchoolHome";
import SchoolCurriculum from "./pages/SchoolCurriculum";
import SchoolAdmissions from "./pages/SchoolAdmissions";
import SchoolAbout from "./pages/SchoolAbout";
import SchoolContact from "./pages/SchoolContact";
import RegistrationPage from "./pages/RegistrationPage";
import NotFound from "./pages/NotFound";
import ClinicAdminPage from "./pages/admin/ClinicAdminPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Entry Hub / Dual-Category Home */}
          <Route path="/" element={<Home />} />

          {/* Dedicated Registration Route (Only the Form) */}
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/school/registration" element={<RegistrationPage />} />

          {/* Clinic CMS Routes (Self-Contained with Separate Auth) */}
          <Route path="/admin" element={<ClinicAdminPage />} />
          <Route path="/dermatology/admin" element={<ClinicAdminPage />} />

          {/* Dermatology Center Routes */}
          <Route path="/dermatology" element={<DermatologyHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* Cosmetology School Center Routes */}
          <Route path="/school" element={<SchoolHome />} />
          <Route path="/school/curriculum" element={<SchoolCurriculum />} />
          <Route path="/school/admissions" element={<SchoolAdmissions />} />
          <Route path="/school/about" element={<SchoolAbout />} />
          <Route path="/school/contact" element={<SchoolContact />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ResponsiveDX />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
