import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import PageLoader from "@/components/PageLoader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient();

/* 🔹 Route → Page name mapping */
const routeNames: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/products": "Products",
  "/contact": "Contact",
};

/* 🔹 Inner App (needs router context) */
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [pageName, setPageName] = useState("Home");
  const [showLoader, setShowLoader] = useState(false);


useEffect(() => {
  setPageName(routeNames[location.pathname] || "");

  setShowLoader(true);
  setLoading(true);
  document.body.style.overflow = "hidden";

  const hideTimer = setTimeout(() => {
    setLoading(false);
    document.body.style.overflow = "auto";
  }, 700);

  const unmountTimer = setTimeout(() => {
    setShowLoader(false);
  }, 1500); // allow fade-out to finish

  return () => {
    clearTimeout(hideTimer);
    clearTimeout(unmountTimer);
    document.body.style.overflow = "auto";
  };
}, [location.pathname]);



  return (
    <>
      {/* Global Page Loader */}
      <PageLoader visible={loading} pageName={pageName} />

      {/* Global Navigation */}
      <Navigation />

      {/* Routes */}
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Global Footer */}
      <Footer />
    </>
  );
};

/* 🔹 Root App */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
