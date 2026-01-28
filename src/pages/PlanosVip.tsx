import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Crown,
  ArrowLeft,
  Check,
  Star,
  Zap,
  Shield,
  Gift,
  TrendingUp,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PlanosVip = () => {
  const { toast } = useToast();

  const plans = [
    {
      name: "Bronze",
      icon: Shield,
      price: "Grátis",
      description: "Para iniciantes no programa",
      color: "from-amber-600 to-amber-800",
      borderColor: "border-amber-600/30",
      features: [
        "Acesso à plataforma básica",
        "Comissão padrão de 25%",
        "Links de afiliado ilimitados",
        "Relatórios básicos",
        "Suporte por email",
      ],
      notIncluded: [
        "Gerente de conta dedicado",
        "Materiais exclusivos",
        "Bônus de performance",
      ],
      popular: false,
    },
    {
      name: "Prata",
      icon: Star,
      price: "R$ 99",
      period: "/mês",
      description: "Para afiliados em crescimento",
      color: "from-slate-400 to-slate-600",
      borderColor: "border-slate-400/30",
      features: [
        "Tudo do plano Bronze",
        "Comissão aumentada para 30%",
        "Dashboard avançado",
        "Relatórios detalhados",
        "Suporte prioritário",
        "Materiais de divulgação",
      ],
      notIncluded: [
        "Gerente de conta dedicado",
        "Bônus de performance extra",
      ],
      popular: false,
    },
    {
      name: "Ouro",
      icon: Crown,
      price: "R$ 199",
      period: "/mês",
      description: "Para afiliados profissionais",
      color: "from-yellow-500 to-amber-600",
      borderColor: "border-secondary/50",
      features: [
        "Tudo do plano Prata",
        "Comissão de 35%",
        "Gerente de conta dedicado",
        "Materiais exclusivos premium",
        "Bônus mensal de performance",
        "Acesso antecipado a promoções",
        "Suporte 24/7 via WhatsApp",
      ],
      notIncluded: [],
      popular: true,
    },
    {
      name: "Diamante",
      icon: Sparkles,
      price: "R$ 499",
      period: "/mês",
      description: "Para top performers",
      color: "from-cyan-400 to-blue-600",
      borderColor: "border-cyan-400/30",
      features: [
        "Tudo do plano Ouro",
        "Comissão de até 45%",
        "Equipe de suporte dedicada",
        "Campanhas personalizadas",
        "Bônus trimestral extra",
        "Eventos VIP exclusivos",
        "Ferramentas de automação",
        "Análise de dados avançada",
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Comissões Maiores",
      description: "Aumente seus ganhos com taxas de comissão exclusivas para membros VIP",
    },
    {
      icon: Users,
      title: "Suporte Dedicado",
      description: "Tenha um gerente de conta pessoal para ajudar no seu crescimento",
    },
    {
      icon: Gift,
      title: "Bônus Exclusivos",
      description: "Receba bônus mensais e trimestrais baseados na sua performance",
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Seja reconhecido como um top afiliado com badges e destaques",
    },
  ];

  const handleSelectPlan = (planName: string) => {
    toast({
      title: `Plano ${planName} selecionado`,
      description: "Redirecionando para o pagamento...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Crown className="w-8 h-8 text-secondary" />
            <span className="text-xl font-display font-bold text-gradient-gold">
              CasinoAff
            </span>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Dashboard
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-medium">
              Programa VIP Exclusivo
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Planos </span>
            <span className="text-gradient-gold">VIP</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Eleve sua experiência como afiliado com benefícios exclusivos, 
            comissões maiores e suporte premium
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-card/80 border-border/50 p-6 text-center hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-card/80 border-border/50 p-6 flex flex-col hover:border-primary/30 transition-all ${
                plan.popular ? "border-secondary/50 ring-1 ring-secondary/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-secondary to-yellow-500 text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-display font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </div>

              <div className="space-y-3 flex-1">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 opacity-50">
                    <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-1.5 h-0.5 bg-muted-foreground rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground line-through">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.popular ? "neon" : "goldOutline"}
                className="w-full mt-6"
                onClick={() => handleSelectPlan(plan.name)}
              >
                {plan.price === "Grátis" ? "Plano Atual" : "Assinar Agora"}
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <Card className="bg-card/80 border-border/50 p-8">
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Perguntas Frequentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Posso trocar de plano a qualquer momento?
              </h3>
              <p className="text-muted-foreground text-sm">
                Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer
                momento. O valor será ajustado proporcionalmente.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Como funcionam os bônus de performance?
              </h3>
              <p className="text-muted-foreground text-sm">
                Os bônus são calculados com base nas suas conversões mensais.
                Quanto mais você converte, maior o seu bônus.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Existe contrato de fidelidade?
              </h3>
              <p className="text-muted-foreground text-sm">
                Não! Todos os planos são mensais e você pode cancelar quando quiser,
                sem multas ou taxas adicionais.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Como entro em contato com meu gerente?
              </h3>
              <p className="text-muted-foreground text-sm">
                Afiliados Ouro e Diamante têm acesso direto via WhatsApp e email
                ao seu gerente de conta dedicado.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default PlanosVip;
