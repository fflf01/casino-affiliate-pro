import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import ComoFunciona from "./pages/ComoFunciona";
import Plataformas from "./pages/Plataformas";
import Comissoes from "./pages/Comissoes";
import Suporte from "./pages/Suporte";
import SuporteMensagens from "./pages/SuporteMensagens";
import Links from "./pages/Links";
import Carteira from "./pages/Carteira";
import SuporteCliente from "./pages/SuporteCliente";
import PlanosVip from "./pages/PlanosVip";
import CasaParceiras from "./pages/CasaParceiras";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/esqueci-senha" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/plataformas" element={<Plataformas />} />
          <Route path="/comissoes" element={<Comissoes />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/suporte/mensagens" element={<SuporteMensagens />} />
          <Route path="/links" element={<Links />} />
          <Route path="/carteira" element={<Carteira />} />
          <Route path="/suporte-cliente" element={<SuporteCliente />} />
          <Route path="/planovips" element={<PlanosVip />} />
          <Route path="/casa-parceiras" element={<CasaParceiras />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
