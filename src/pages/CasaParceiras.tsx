import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Star, Lock, Check, Crown, Zap, Trophy, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const userPlan = "ouro"; // Simulated user plan: bronze, prata, ouro, diamante

const plans = [
  { id: "bronze", name: "Bronze", icon: Trophy, color: "text-amber-600" },
  { id: "prata", name: "Prata", icon: Zap, color: "text-gray-400" },
  { id: "ouro", name: "Ouro", icon: Crown, color: "text-yellow-500" },
  { id: "diamante", name: "Diamante", icon: Diamond, color: "text-cyan-400" },
];

const casas = [
  {
    name: "Bet365",
    description: "A maior plataforma de apostas do mundo com décadas de experiência.",
    commission: "45%",
    rating: 5,
    minDeposit: "R$ 20",
    features: ["Saque Rápido", "Suporte 24h", "Bônus de Boas-Vindas", "App Mobile"],
    paymentMethods: ["PIX", "Cartão", "Boleto"],
    minPlan: "bronze",
    popular: false,
  },
  {
    name: "Betano",
    description: "Líder no mercado brasileiro com as melhores odds e promoções.",
    commission: "50%",
    rating: 5,
    minDeposit: "R$ 10",
    features: ["PIX Instantâneo", "Live Casino", "Super Odds", "Cash Out"],
    paymentMethods: ["PIX", "Cartão", "Transferência"],
    minPlan: "bronze",
    popular: true,
  },
  {
    name: "Stake",
    description: "Pioneira em apostas com criptomoedas e jogos exclusivos.",
    commission: "40%",
    rating: 5,
    minDeposit: "R$ 1",
    features: ["Crypto Friendly", "Jogos Exclusivos", "VIP Program", "Streaming"],
    paymentMethods: ["Bitcoin", "Ethereum", "PIX"],
    minPlan: "prata",
    popular: false,
  },
  {
    name: "1xBet",
    description: "Maior variedade de jogos e mercados de apostas do mundo.",
    commission: "35%",
    rating: 4,
    minDeposit: "R$ 5",
    features: ["1000+ Jogos", "App Mobile", "Streaming ao Vivo", "Bônus Diários"],
    paymentMethods: ["PIX", "Cartão", "Cripto"],
    minPlan: "prata",
    popular: false,
  },
  {
    name: "Sportingbet",
    description: "Tradição e confiança no mercado de apostas esportivas.",
    commission: "40%",
    rating: 4,
    minDeposit: "R$ 15",
    features: ["Foco em Esportes", "Odds Competitivas", "Saque Rápido", "Promoções"],
    paymentMethods: ["PIX", "Cartão", "Boleto"],
    minPlan: "ouro",
    popular: false,
  },
  {
    name: "Blaze",
    description: "Plataforma inovadora com jogos exclusivos como Crash e Double.",
    commission: "45%",
    rating: 4,
    minDeposit: "R$ 1",
    features: ["Jogos Originais", "Crash Game", "Comunidade Ativa", "PIX Rápido"],
    paymentMethods: ["PIX", "Cripto"],
    minPlan: "ouro",
    popular: false,
  },
  {
    name: "Parimatch",
    description: "Experiência premium com odds especiais e eventos exclusivos.",
    commission: "55%",
    rating: 5,
    minDeposit: "R$ 10",
    features: ["Eventos VIP", "Odds Premium", "Cashback Especial", "Suporte Dedicado"],
    paymentMethods: ["PIX", "Cartão", "Cripto"],
    minPlan: "diamante",
    popular: false,
  },
  {
    name: "Pinnacle",
    description: "As melhores odds do mercado para apostadores profissionais.",
    commission: "60%",
    rating: 5,
    minDeposit: "R$ 50",
    features: ["Melhores Odds", "Sem Limites", "Apostadores Pro", "Alta Liquidez"],
    paymentMethods: ["PIX", "Cartão", "Cripto", "Transferência"],
    minPlan: "diamante",
    popular: false,
  },
];

const planOrder = ["bronze", "prata", "ouro", "diamante"];

const hasAccess = (casaMinPlan: string) => {
  const userPlanIndex = planOrder.indexOf(userPlan);
  const casaPlanIndex = planOrder.indexOf(casaMinPlan);
  return userPlanIndex >= casaPlanIndex;
};

const getPlanBadge = (minPlan: string) => {
  const plan = plans.find(p => p.id === minPlan);
  if (!plan) return null;
  const Icon = plan.icon;
  return (
    <Badge variant="outline" className={`${plan.color} border-current`}>
      <Icon className="w-3 h-3 mr-1" />
      {plan.name}
    </Badge>
  );
};

const CasaParceiras = () => {
  const currentPlan = plans.find(p => p.id === userPlan);
  const CurrentPlanIcon = currentPlan?.icon || Crown;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
              Vitrine de Parceiros
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Casas <span className="text-gradient-neon">Parceiras</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Acesse as melhores casas de apostas do mercado de acordo com seu plano
            </p>
          </div>

          {/* Current Plan Card */}
          <Card className="max-w-md mx-auto bg-gradient-card border-secondary/30">
            <CardHeader className="text-center pb-2">
              <CardDescription>Seu plano atual</CardDescription>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <CurrentPlanIcon className={`w-6 h-6 ${currentPlan?.color}`} />
                <span className="text-gradient-gold">{currentPlan?.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Você tem acesso a {casas.filter(c => hasAccess(c.minPlan)).length} de {casas.length} casas parceiras
              </p>
              <Button variant="neonOutline" size="sm" asChild>
                <a href="/planovips">Fazer Upgrade</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Plan Legend */}
      <section className="py-6 px-4 border-y border-border/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div 
                  key={plan.id} 
                  className={`flex items-center gap-2 ${userPlan === plan.id ? 'text-foreground' : 'text-muted-foreground'}`}
                >
                  <Icon className={`w-5 h-5 ${plan.color}`} />
                  <span className="text-sm font-medium">{plan.name}</span>
                  {userPlan === plan.id && (
                    <Badge variant="secondary" className="text-xs">Atual</Badge>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Casas Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {casas.map((casa, index) => {
              const hasAccessToCasa = hasAccess(casa.minPlan);
              
              return (
                <div
                  key={index}
                  className={`relative bg-gradient-card rounded-2xl p-6 border transition-all duration-300 ${
                    hasAccessToCasa 
                      ? casa.popular 
                        ? "border-secondary/50 glow-border hover:scale-[1.02]" 
                        : "border-border/50 hover:border-primary/50 hover:scale-[1.02]"
                      : "border-border/30 opacity-60"
                  }`}
                >
                  {/* Popular Badge */}
                  {casa.popular && hasAccessToCasa && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-gold rounded-full text-xs font-bold text-primary-foreground uppercase">
                      Mais Popular
                    </div>
                  )}

                  {/* Lock Overlay */}
                  {!hasAccessToCasa && (
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                      <div className="text-center p-4">
                        <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">Requer plano</p>
                        {getPlanBadge(casa.minPlan)}
                      </div>
                    </div>
                  )}

                  {/* Plan Required Badge */}
                  <div className="flex justify-between items-start mb-4">
                    {getPlanBadge(casa.minPlan)}
                    {hasAccessToCasa && (
                      <Badge variant="outline" className="text-primary border-primary">
                        <Check className="w-3 h-3 mr-1" />
                        Liberado
                      </Badge>
                    )}
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      {casa.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {casa.description}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < casa.rating
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
                      {casa.commission}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Depósito mínimo:</span>
                      <span className="text-foreground font-semibold">{casa.minDeposit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pagamentos:</span>
                      <span className="text-foreground text-xs">{casa.paymentMethods.join(", ")}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {casa.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                    {casa.features.length > 3 && (
                      <li className="text-xs text-muted-foreground">
                        +{casa.features.length - 3} mais recursos
                      </li>
                    )}
                  </ul>

                  <Button 
                    variant={hasAccessToCasa ? (casa.popular ? "neon" : "neonOutline") : "outline"} 
                    className="w-full"
                    disabled={!hasAccessToCasa}
                  >
                    {hasAccessToCasa ? (
                      <>
                        Acessar
                        <ExternalLink className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        Bloqueado
                      </>
                    )}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Quer acesso a <span className="text-gradient-gold">todas as casas</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Faça upgrade para o plano Diamante e tenha acesso completo a todas as casas parceiras com as melhores comissões do mercado.
          </p>
          <Button variant="gold" size="lg" asChild>
            <a href="/planovips">
              <Diamond className="w-5 h-5" />
              Ver Planos VIP
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasaParceiras;
