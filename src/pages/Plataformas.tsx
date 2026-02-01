import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Shield, Zap, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

import logoBrasilbet from "@/assets/logo-brasilbet.png";
import logoBetmgm from "@/assets/logo-betmgm.png";
import logoLuvabet from "@/assets/logo-luvabet.png";
import logoBigbet from "@/assets/logo-bigbet.png";
import logoBetmgmPro from "@/assets/logo-betmgm-pro.png";
import logoSeubet from "@/assets/logo-seubet.png";

const platforms = [
  {
    name: "BrasilBet",
    logo: logoBrasilbet,
    commission: "11% dos depósitos",
    features: ["Pagamento Semanal", "Saque rápido", "Suporte 24h"],
  },
  {
    name: "BetMGM",
    logo: logoBetmgm,
    commission: "R$100 de CPA",
    features: ["BaseLine R$25", "Pagamento Mensal", "Suporte 24h"],
    featured: true,
  },
  {
    name: "LuvaBet",
    logo: logoLuvabet,
    commission: "11% dos depósitos",
    features: ["Pagamento Semanal", "Saque rápido", "Suporte 24h"],
  },
  {
    name: "BigBet",
    logo: logoBigbet,
    commission: "10% dos Depósitos",
    features: ["BaseLine R$25", "Suporte 24h"],
  },
  {
    name: "BetMGM Pro",
    logo: logoBetmgmPro,
    commission: "R$80 de CPA",
    features: ["BaseLine R$25", "Pagamento Semanal", "Suporte 24h"],
  },
  {
    name: "SeuBet",
    logo: logoSeubet,
    commission: "60% de Rev Share",
    features: ["Pagamento Mensal"],
  },
];

const Plataformas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4 uppercase tracking-widest border border-primary/30">
            Parceiros Premium
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Nossas <span className="text-gradient-gold">Plataformas</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Trabalhe com as melhores casas de apostas e maximize seus ganhos
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 px-4 border-y border-border/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Licenciadas e Regulamentadas</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-4 h-4 text-primary" />
              <span>Pagamentos Garantidos</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="w-4 h-4 text-primary" />
              <span>Alcance Global</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`relative bg-card/80 rounded-xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
                  platform.featured 
                    ? "border-secondary/50" 
                    : "border-border/50 hover:border-primary/50"
                }`}
              >
                {platform.featured && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-gold rounded-full text-[10px] font-bold text-primary-foreground uppercase tracking-wide">
                    Destaque
                  </div>
                )}

                {/* Logo */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-xl bg-muted/50 flex items-center justify-center overflow-hidden p-2">
                    <img 
                      src={platform.logo} 
                      alt={`Logo ${platform.name}`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {platform.name}
                    </h3>
                  </div>
                </div>

                {/* Commission */}
                <div className="mb-5 p-4 bg-muted/30 rounded-lg border border-border/30">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Comissão</span>
                  <div className="text-2xl font-display font-bold text-gradient-gold">
                    {platform.commission}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={platform.featured ? "neon" : "neonOutline"} 
                  className="w-full h-10 text-xs font-semibold uppercase tracking-wide"
                >
                  Acessar
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Não encontrou sua <span className="text-gradient-gold">plataforma</span>?
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
            Entre em contato conosco e solicite a inclusão de novas casas parceiras.
          </p>
          <Button variant="neonOutline" size="lg" asChild className="h-11">
            <a href="/suporte">
              Falar com Suporte
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plataformas;
