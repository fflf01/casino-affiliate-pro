import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: "Bet365",
    description: "A maior plataforma de apostas do mundo",
    commission: "45%",
    rating: 5,
    features: ["Saque Rápido", "Suporte 24h", "Bônus de Boas-Vindas"],
  },
  {
    name: "Betano",
    description: "Líder no mercado brasileiro",
    commission: "50%",
    rating: 5,
    features: ["PIX Instantâneo", "Live Casino", "Super Odds"],
    featured: true,
  },
  {
    name: "Stake",
    description: "Especialista em crypto betting",
    commission: "40%",
    rating: 4,
    features: ["Crypto Friendly", "Jogos Exclusivos", "VIP Program"],
  },
  {
    name: "1xBet",
    description: "Maior variedade de jogos",
    commission: "35%",
    rating: 4,
    features: ["1000+ Jogos", "App Mobile", "Streaming ao Vivo"],
  },
];

const PlatformsSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[180px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
            Parceiros Premium
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Plataformas <span className="text-gradient-neon">Parceiras</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhe com as maiores e mais confiáveis casas de apostas do mundo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`relative bg-gradient-card rounded-2xl p-6 border card-hover ${
                platform.featured 
                  ? "border-secondary/50 glow-border" 
                  : "border-border/50"
              }`}
            >
              {platform.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-gold rounded-full text-xs font-bold text-primary-foreground uppercase">
                  Mais Popular
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {platform.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < platform.rating
                        ? "text-secondary fill-secondary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Commission */}
              <div className="mb-6">
                <span className="text-sm text-muted-foreground">Comissão até</span>
                <div className="text-3xl font-display font-bold text-gradient-gold">
                  {platform.commission}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {platform.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={platform.featured ? "neon" : "neonOutline"} 
                className="w-full"
              >
                Acessar
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
