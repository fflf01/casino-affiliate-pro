import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Star, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: "Bet365",
    description: "A maior plataforma de apostas do mundo, com décadas de experiência e milhões de usuários.",
    commission: "45%",
    rating: 5,
    features: ["Saque Rápido", "Suporte 24h", "Bônus de Boas-Vindas", "App Mobile"],
    minDeposit: "R$ 20",
    paymentMethods: ["PIX", "Cartão", "Boleto"],
  },
  {
    name: "Betano",
    description: "Líder no mercado brasileiro com as melhores odds e promoções exclusivas.",
    commission: "50%",
    rating: 5,
    features: ["PIX Instantâneo", "Live Casino", "Super Odds", "Cash Out"],
    featured: true,
    minDeposit: "R$ 10",
    paymentMethods: ["PIX", "Cartão", "Transferência"],
  },
  {
    name: "Stake",
    description: "Pioneira em apostas com criptomoedas, oferecendo jogos exclusivos e comunidade ativa.",
    commission: "40%",
    rating: 5,
    features: ["Crypto Friendly", "Jogos Exclusivos", "VIP Program", "Streaming"],
    minDeposit: "R$ 1",
    paymentMethods: ["Bitcoin", "Ethereum", "PIX"],
  },
  {
    name: "1xBet",
    description: "Maior variedade de jogos e mercados de apostas do mundo.",
    commission: "35%",
    rating: 4,
    features: ["1000+ Jogos", "App Mobile", "Streaming ao Vivo", "Bônus Diários"],
    minDeposit: "R$ 5",
    paymentMethods: ["PIX", "Cartão", "Cripto"],
  },
  {
    name: "Sportingbet",
    description: "Tradição e confiança no mercado de apostas esportivas desde 1998.",
    commission: "40%",
    rating: 4,
    features: ["Foco em Esportes", "Odds Competitivas", "Saque Rápido", "Promoções"],
    minDeposit: "R$ 15",
    paymentMethods: ["PIX", "Cartão", "Boleto"],
  },
  {
    name: "Blaze",
    description: "Plataforma inovadora com jogos exclusivos como Crash e Double.",
    commission: "45%",
    rating: 4,
    features: ["Jogos Originais", "Crash Game", "Comunidade Ativa", "PIX Rápido"],
    minDeposit: "R$ 1",
    paymentMethods: ["PIX", "Cripto"],
  },
];

const Plataformas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4 uppercase tracking-wider">
            Parceiros Premium
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Nossas <span className="text-gradient-gold">Plataformas</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhe com as maiores e mais confiáveis casas de apostas do mundo
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-4 border-y border-border/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>Licenciadas e Regulamentadas</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span>Pagamentos Garantidos</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="w-5 h-5 text-primary" />
              <span>Alcance Global</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
                <div className="mb-4 p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm text-muted-foreground">Comissão até</span>
                  <div className="text-3xl font-display font-bold text-gradient-gold">
                    {platform.commission}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Depósito mínimo:</span>
                    <span className="text-foreground font-semibold">{platform.minDeposit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pagamentos:</span>
                    <span className="text-foreground">{platform.paymentMethods.join(", ")}</span>
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
                  Promover
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plataformas;
