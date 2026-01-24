import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Crown,
  TrendingUp,
  Users,
  DollarSign,
  MousePointer,
  Copy,
  Check,
  ExternalLink,
  LogOut,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

// Mock data for charts
const performanceData = [
  { name: "Jan", cliques: 400, conversoes: 24, comissao: 240 },
  { name: "Fev", cliques: 300, conversoes: 18, comissao: 180 },
  { name: "Mar", cliques: 520, conversoes: 32, comissao: 320 },
  { name: "Abr", cliques: 480, conversoes: 29, comissao: 290 },
  { name: "Mai", cliques: 600, conversoes: 38, comissao: 380 },
  { name: "Jun", cliques: 750, conversoes: 48, comissao: 480 },
  { name: "Jul", cliques: 820, conversoes: 52, comissao: 520 },
];

// Mock payment history
const paymentHistory = [
  { id: 1, data: "15/01/2024", valor: 1250.0, status: "pago", metodo: "PIX" },
  { id: 2, data: "15/12/2023", valor: 980.5, status: "pago", metodo: "PIX" },
  { id: 3, data: "15/11/2023", valor: 1450.0, status: "pago", metodo: "Transferência" },
  { id: 4, data: "15/10/2023", valor: 720.0, status: "pago", metodo: "PIX" },
  { id: 5, data: "15/02/2024", valor: 1680.0, status: "pendente", metodo: "PIX" },
];

const Dashboard = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const affiliateLinks = [
    { id: "main", name: "Link Principal", url: "https://casino.com/ref/usuario123" },
    { id: "promo", name: "Promoção Especial", url: "https://casino.com/promo/usuario123" },
    { id: "bonus", name: "Bônus Exclusivo", url: "https://casino.com/bonus/usuario123" },
  ];

  const copyToClipboard = (link: string, id: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const stats = [
    {
      title: "Total de Cliques",
      value: "3.870",
      change: "+12.5%",
      isPositive: true,
      icon: MousePointer,
      color: "primary",
    },
    {
      title: "Conversões",
      value: "241",
      change: "+8.2%",
      isPositive: true,
      icon: Users,
      color: "secondary",
    },
    {
      title: "Comissão Total",
      value: "R$ 4.850",
      change: "+15.3%",
      isPositive: true,
      icon: DollarSign,
      color: "primary",
    },
    {
      title: "Taxa de Conversão",
      value: "6.2%",
      change: "-0.8%",
      isPositive: false,
      icon: TrendingUp,
      color: "secondary",
    },
  ];

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
          
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground hidden sm:block">
              Olá, <span className="text-foreground font-medium">João Silva</span>
            </span>
            <Link to="/login">
              <Button variant="outline" size="sm" className="gap-2">
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sair</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="text-foreground">Painel do </span>
            <span className="text-gradient-neon">Afiliado</span>
          </h1>
          <p className="text-muted-foreground">
            Acompanhe suas estatísticas e gerencie seus links de afiliado
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-card/80 border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl ${
                    stat.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.isPositive ? "text-primary" : "text-destructive"
                  }`}
                >
                  {stat.isPositive ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-1">{stat.title}</p>
              <p className="text-2xl font-display font-bold text-foreground">
                {stat.value}
              </p>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Performance Chart */}
          <Card className="bg-card/80 border-border/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-display font-bold text-foreground">
                  Performance
                </h2>
                <p className="text-muted-foreground text-sm">
                  Cliques e conversões ao longo do tempo
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-xs text-muted-foreground">Cliques</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-xs text-muted-foreground">Conversões</span>
                </div>
              </div>
            </div>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 20%)" />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(220 10% 60%)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(220 10% 60%)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(220 18% 10%)",
                      border: "1px solid hsl(220 15% 20%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="cliques"
                    stroke="hsl(145 80% 42%)"
                    strokeWidth={2}
                    dot={{ fill: "hsl(145 80% 42%)", strokeWidth: 0 }}
                    activeDot={{ r: 6, fill: "hsl(145 80% 42%)" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="conversoes"
                    stroke="hsl(45 85% 55%)"
                    strokeWidth={2}
                    dot={{ fill: "hsl(45 85% 55%)", strokeWidth: 0 }}
                    activeDot={{ r: 6, fill: "hsl(45 85% 55%)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Commission Chart */}
          <Card className="bg-card/80 border-border/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-display font-bold text-foreground">
                  Comissões
                </h2>
                <p className="text-muted-foreground text-sm">
                  Ganhos mensais em R$
                </p>
              </div>
            </div>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorComissao" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(145 80% 42%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(145 80% 42%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 20%)" />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(220 10% 60%)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(220 10% 60%)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(220 18% 10%)",
                      border: "1px solid hsl(220 15% 20%)",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [`R$ ${value}`, "Comissão"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="comissao"
                    stroke="hsl(145 80% 42%)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorComissao)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Links and Payment History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Affiliate Links */}
          <Card className="bg-card/80 border-border/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-display font-bold text-foreground">
                  Links de Afiliado
                </h2>
                <p className="text-muted-foreground text-sm">
                  Copie e compartilhe seus links
                </p>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Novo Link
              </Button>
            </div>
            <div className="space-y-3">
              {affiliateLinks.map((link) => (
                <div
                  key={link.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="flex-1 min-w-0 mr-4">
                    <p className="font-medium text-foreground mb-1">{link.name}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {link.url}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(link.url, link.id)}
                    className="shrink-0"
                  >
                    {copiedLink === link.id ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Payment History */}
          <Card className="bg-card/80 border-border/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-display font-bold text-foreground">
                  Histórico de Pagamentos
                </h2>
                <p className="text-muted-foreground text-sm">
                  Seus últimos pagamentos
                </p>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="w-4 h-4" />
                Ver Todos
              </Button>
            </div>
            <div className="space-y-3">
              {paymentHistory.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/50"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-lg ${
                        payment.status === "pago"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        R$ {payment.valor.toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {payment.data} • {payment.metodo}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      payment.status === "pago"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {payment.status === "pago" ? "Pago" : "Pendente"}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
