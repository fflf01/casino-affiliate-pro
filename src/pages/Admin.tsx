import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Crown,
  Plus,
  Search,
  Users,
  DollarSign,
  BarChart2,
  Wallet,
  TrendingUp,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Building2,
  Menu,
  X,
  LayoutDashboard,
  ArrowLeft,
  ClipboardList,
  CheckCircle,
  XCircle,
  Clock,
  Mail,
  Phone,
  User,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

// ── Types ────────────────────────────────────────────────────────────────
interface Casino {
  id: string;
  nome: string;
  comissaoCPA: number;
  comissaoRevShare: number;
  status: "ativo" | "inativo";
  urlAfiliado: string;
}

interface EntradaAdmin {
  id: string;
  usuario: string;
  email: string;
  casa: string;
  tipo: "deposito" | "cpa" | "ftd" | "revshare";
  valor: number;
  data: string;
}

interface UserWallet {
  id: string;
  usuario: string;
  email: string;
  saldoDisponivel: number;
  saldoPendente: number;
  totalSacado: number;
  ultimaAtividade: string;
}

interface Solicitacao {
  id: string;
  nome: string;
  login: string;
  email: string;
  telefone: string;
  dataCadastro: string;
  status: "pendente" | "aprovado" | "rejeitado";
}

// ── Mock Data ────────────────────────────────────────────────────────────
const mockCasinos: Casino[] = [
  { id: "1", nome: "BrasilBet", comissaoCPA: 150, comissaoRevShare: 30, status: "ativo", urlAfiliado: "https://brasilbet.com/aff" },
  { id: "2", nome: "BetMGM", comissaoCPA: 200, comissaoRevShare: 25, status: "ativo", urlAfiliado: "https://betmgm.com/aff" },
  { id: "3", nome: "LuvaBet", comissaoCPA: 120, comissaoRevShare: 35, status: "ativo", urlAfiliado: "https://luvabet.com/aff" },
  { id: "4", nome: "BigBet", comissaoCPA: 180, comissaoRevShare: 28, status: "ativo", urlAfiliado: "https://bigbet.com/aff" },
  { id: "5", nome: "BetMGM Pro", comissaoCPA: 250, comissaoRevShare: 22, status: "inativo", urlAfiliado: "https://betmgmpro.com/aff" },
  { id: "6", nome: "SeuBet", comissaoCPA: 100, comissaoRevShare: 40, status: "ativo", urlAfiliado: "https://seubet.com/aff" },
];

const mockEntradas: EntradaAdmin[] = [
  { id: "1", usuario: "João Silva", email: "joao@email.com", casa: "BrasilBet", tipo: "deposito", valor: 3200, data: "20/02/2026" },
  { id: "2", usuario: "João Silva", email: "joao@email.com", casa: "BrasilBet", tipo: "cpa", valor: 750, data: "20/02/2026" },
  { id: "3", usuario: "João Silva", email: "joao@email.com", casa: "BrasilBet", tipo: "ftd", valor: 5, data: "20/02/2026" },
  { id: "4", usuario: "Maria Santos", email: "maria@email.com", casa: "BetMGM", tipo: "deposito", valor: 1500, data: "20/02/2026" },
  { id: "5", usuario: "Maria Santos", email: "maria@email.com", casa: "BetMGM", tipo: "revshare", valor: 150, data: "20/02/2026" },
  { id: "6", usuario: "Pedro Costa", email: "pedro@email.com", casa: "LuvaBet", tipo: "deposito", valor: 900, data: "19/02/2026" },
  { id: "7", usuario: "Pedro Costa", email: "pedro@email.com", casa: "LuvaBet", tipo: "cpa", valor: 150, data: "19/02/2026" },
  { id: "8", usuario: "Ana Lima", email: "ana@email.com", casa: "BigBet", tipo: "deposito", valor: 2100, data: "19/02/2026" },
  { id: "9", usuario: "Ana Lima", email: "ana@email.com", casa: "BigBet", tipo: "ftd", valor: 3, data: "19/02/2026" },
  { id: "10", usuario: "Carlos Souza", email: "carlos@email.com", casa: "SeuBet", tipo: "revshare", valor: 320, data: "18/02/2026" },
  { id: "11", usuario: "Carlos Souza", email: "carlos@email.com", casa: "SeuBet", tipo: "deposito", valor: 1800, data: "18/02/2026" },
  { id: "12", usuario: "Fernanda Oliveira", email: "fer@email.com", casa: "BetMGM Pro", tipo: "cpa", valor: 450, data: "18/02/2026" },
];

const mockWallets: UserWallet[] = [
  { id: "1", usuario: "João Silva", email: "joao@email.com", saldoDisponivel: 4850, saldoPendente: 1680, totalSacado: 12450, ultimaAtividade: "20/02/2026" },
  { id: "2", usuario: "Maria Santos", email: "maria@email.com", saldoDisponivel: 2300, saldoPendente: 950, totalSacado: 8700, ultimaAtividade: "20/02/2026" },
  { id: "3", usuario: "Pedro Costa", email: "pedro@email.com", saldoDisponivel: 1200, saldoPendente: 400, totalSacado: 5600, ultimaAtividade: "19/02/2026" },
  { id: "4", usuario: "Ana Lima", email: "ana@email.com", saldoDisponivel: 3670, saldoPendente: 1200, totalSacado: 15300, ultimaAtividade: "19/02/2026" },
  { id: "5", usuario: "Carlos Souza", email: "carlos@email.com", saldoDisponivel: 890, saldoPendente: 250, totalSacado: 3200, ultimaAtividade: "18/02/2026" },
  { id: "6", usuario: "Fernanda Oliveira", email: "fer@email.com", saldoDisponivel: 5200, saldoPendente: 2100, totalSacado: 22000, ultimaAtividade: "18/02/2026" },
];

const mockSolicitacoes: Solicitacao[] = [
  { id: "1", nome: "Lucas Ferreira", login: "lucasf", email: "lucas@email.com", telefone: "(11) 99999-1111", dataCadastro: "20/02/2026", status: "pendente" },
  { id: "2", nome: "Bruna Almeida", login: "brunaa", email: "bruna@email.com", telefone: "(21) 98888-2222", dataCadastro: "19/02/2026", status: "pendente" },
  { id: "3", nome: "Rafael Mendes", login: "rafaelm", email: "rafael@email.com", telefone: "(31) 97777-3333", dataCadastro: "19/02/2026", status: "pendente" },
  { id: "4", nome: "Camila Rocha", login: "camilar", email: "camila@email.com", telefone: "(41) 96666-4444", dataCadastro: "18/02/2026", status: "aprovado" },
  { id: "5", nome: "Thiago Nunes", login: "thiagon", email: "thiago@email.com", telefone: "(51) 95555-5555", dataCadastro: "17/02/2026", status: "rejeitado" },
  { id: "6", nome: "Juliana Costa", login: "julianac", email: "juliana@email.com", telefone: "(61) 94444-6666", dataCadastro: "17/02/2026", status: "pendente" },
];

// ── Sidebar nav items ────────────────────────────────────────────────────
const sidebarItems = [
  { id: "overview", label: "Visão Geral", icon: LayoutDashboard },
  { id: "solicitacoes", label: "Solicitações", icon: ClipboardList },
  { id: "casinos", label: "Casinos", icon: Building2 },
  { id: "entradas", label: "Entradas", icon: Calendar },
  { id: "carteiras", label: "Carteiras", icon: Wallet },
];

// ── Component ────────────────────────────────────────────────────────────
const Admin = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Casino state
  const [casinos, setCasinos] = useState<Casino[]>(mockCasinos);
  const [casinoDialog, setCasinoDialog] = useState(false);
  const [editingCasino, setEditingCasino] = useState<Casino | null>(null);
  const [casinoForm, setCasinoForm] = useState({ nome: "", comissaoCPA: "", comissaoRevShare: "", urlAfiliado: "" });

  // Search
  const [searchEntradas, setSearchEntradas] = useState("");
  const [searchWallets, setSearchWallets] = useState("");
  const [searchCasinos, setSearchCasinos] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("todos");

  // Solicitações state
  const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>(mockSolicitacoes);
  const [searchSolicitacoes, setSearchSolicitacoes] = useState("");
  const [filtroStatusSol, setFiltroStatusSol] = useState("todos");
  const [detailDialog, setDetailDialog] = useState(false);
  const [selectedSolicitacao, setSelectedSolicitacao] = useState<Solicitacao | null>(null);

  // Filtros seletores
  const [filtroCasa, setFiltroCasa] = useState("todos");
  const [filtroPeriodo, setFiltroPeriodo] = useState("todos");

  const fmt = (v: number) => `R$ ${v.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;

  // ── Casino CRUD ─────────────────────────────────
  const openNewCasino = () => {
    setEditingCasino(null);
    setCasinoForm({ nome: "", comissaoCPA: "", comissaoRevShare: "", urlAfiliado: "" });
    setCasinoDialog(true);
  };

  const openEditCasino = (c: Casino) => {
    setEditingCasino(c);
    setCasinoForm({ nome: c.nome, comissaoCPA: String(c.comissaoCPA), comissaoRevShare: String(c.comissaoRevShare), urlAfiliado: c.urlAfiliado });
    setCasinoDialog(true);
  };

  const saveCasino = () => {
    if (!casinoForm.nome.trim()) {
      toast({ title: "Erro", description: "Nome é obrigatório.", variant: "destructive" });
      return;
    }
    if (editingCasino) {
      setCasinos(prev => prev.map(c => c.id === editingCasino.id ? { ...c, nome: casinoForm.nome, comissaoCPA: Number(casinoForm.comissaoCPA), comissaoRevShare: Number(casinoForm.comissaoRevShare), urlAfiliado: casinoForm.urlAfiliado } : c));
      toast({ title: "Casino atualizado!", description: `${casinoForm.nome} foi atualizado.` });
    } else {
      setCasinos(prev => [...prev, { id: String(Date.now()), nome: casinoForm.nome, comissaoCPA: Number(casinoForm.comissaoCPA) || 0, comissaoRevShare: Number(casinoForm.comissaoRevShare) || 0, status: "ativo", urlAfiliado: casinoForm.urlAfiliado }]);
      toast({ title: "Casino cadastrado!", description: `${casinoForm.nome} foi adicionado.` });
    }
    setCasinoDialog(false);
  };

  const toggleCasinoStatus = (id: string) => setCasinos(prev => prev.map(c => c.id === id ? { ...c, status: c.status === "ativo" ? "inativo" : "ativo" } : c));
  const deleteCasino = (id: string) => { setCasinos(prev => prev.filter(c => c.id !== id)); toast({ title: "Casino removido!" }); };

  // ── Solicitações actions ─────────────────────────────────
  const aprovarSolicitacao = (id: string) => {
    setSolicitacoes(prev => prev.map(s => s.id === id ? { ...s, status: "aprovado" } : s));
    toast({ title: "Solicitação aprovada!", description: "O afiliado foi aprovado e pode acessar a plataforma." });
    setDetailDialog(false);
  };

  const rejeitarSolicitacao = (id: string) => {
    setSolicitacoes(prev => prev.map(s => s.id === id ? { ...s, status: "rejeitado" } : s));
    toast({ title: "Solicitação rejeitada", description: "O cadastro foi rejeitado." });
    setDetailDialog(false);
  };

  const openDetail = (s: Solicitacao) => {
    setSelectedSolicitacao(s);
    setDetailDialog(true);
  };

  // ── Filtered data ─────────────────────────────────
  // Period filter helper
  const matchPeriodo = (dataStr: string) => {
    if (filtroPeriodo === "todos") return true;
    const parts = dataStr.split("/");
    const d = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
    if (filtroPeriodo === "hoje") return diffDays === 0;
    if (filtroPeriodo === "7dias") return diffDays <= 7;
    if (filtroPeriodo === "30dias") return diffDays <= 30;
    if (filtroPeriodo === "90dias") return diffDays <= 90;
    return true;
  };

  const casasUnicas = [...new Set(mockEntradas.map(e => e.casa))];

  const filteredCasinos = casinos.filter(c => c.nome.toLowerCase().includes(searchCasinos.toLowerCase()));
  const filteredEntradas = mockEntradas.filter(e => {
    const matchSearch = e.usuario.toLowerCase().includes(searchEntradas.toLowerCase()) || e.casa.toLowerCase().includes(searchEntradas.toLowerCase()) || e.email.toLowerCase().includes(searchEntradas.toLowerCase());
    const matchTipo = filtroTipo === "todos" || e.tipo === filtroTipo;
    const matchCasa = filtroCasa === "todos" || e.casa === filtroCasa;
    return matchSearch && matchTipo && matchCasa && matchPeriodo(e.data);
  });
  const filteredWallets = mockWallets.filter(w => w.usuario.toLowerCase().includes(searchWallets.toLowerCase()) || w.email.toLowerCase().includes(searchWallets.toLowerCase()));
  const filteredSolicitacoes = solicitacoes.filter(s => {
    const matchSearch = s.nome.toLowerCase().includes(searchSolicitacoes.toLowerCase()) || s.email.toLowerCase().includes(searchSolicitacoes.toLowerCase());
    const matchStatus = filtroStatusSol === "todos" || s.status === filtroStatusSol;
    return matchSearch && matchStatus;
  });
  const pendentesCount = solicitacoes.filter(s => s.status === "pendente").length;

  // ── Global stats ─────────────────────────────────
  const totalDepositos = mockEntradas.filter(e => e.tipo === "deposito").reduce((s, e) => s + e.valor, 0);
  const totalCPA = mockEntradas.filter(e => e.tipo === "cpa").reduce((s, e) => s + e.valor, 0);
  const totalRevShare = mockEntradas.filter(e => e.tipo === "revshare").reduce((s, e) => s + e.valor, 0);
  const totalSaldoUsuarios = mockWallets.reduce((s, w) => s + w.saldoDisponivel, 0);

  const tipoLabel = (tipo: string) => {
    switch (tipo) { case "deposito": return "Depósito"; case "cpa": return "CPA"; case "ftd": return "FTD"; case "revshare": return "Rev Share"; default: return tipo; }
  };
  const tipoBadge = (tipo: string) => {
    switch (tipo) { case "deposito": return "bg-primary/15 text-primary"; case "cpa": return "bg-secondary/15 text-secondary"; case "ftd": return "bg-blue-500/15 text-blue-400"; case "revshare": return "bg-purple-500/15 text-purple-400"; default: return "bg-muted text-muted-foreground"; }
  };

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* ── Sidebar ──────────────────────────────────── */}
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setSidebarOpen(false)} />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full z-50 bg-card border-r border-border/50 flex flex-col transition-transform duration-300
          w-64
          ${isMobile ? (sidebarOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
          lg:sticky lg:top-0
        `}
      >
        {/* Sidebar header */}
        <div className="p-5 border-b border-border/50 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <Crown className="w-7 h-7 text-primary" />
            <span className="text-lg font-display font-bold text-gradient-neon">iAfiliado</span>
          </Link>
          {isMobile && (
            <button onClick={() => setSidebarOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Admin badge */}
        <div className="px-5 py-3">
          <span className="text-xs font-semibold uppercase px-3 py-1 rounded-full bg-destructive/20 text-destructive border border-destructive/30">
            Painel Admin
          </span>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-2 space-y-1">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === item.id
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.id === "solicitacoes" && pendentesCount > 0 && (
                <span className="ml-auto text-xs font-bold bg-destructive text-destructive-foreground px-2 py-0.5 rounded-full">
                  {pendentesCount}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-border/50">
          <Link to="/dashboard">
            <Button variant="outline" size="sm" className="w-full gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Dashboard
            </Button>
          </Link>
        </div>
      </aside>

      {/* ── Main Content ─────────────────────────────── */}
      <div className="flex-1 min-w-0">
        {/* Top bar (mobile) */}
        <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-sm border-b border-border/50 px-4 py-3 flex items-center justify-between lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="text-foreground">
            <Menu className="w-6 h-6" />
          </button>
          <span className="font-display font-bold text-gradient-neon">Admin</span>
          <div className="w-6" />
        </header>

        <main className="p-4 md:p-8">
          {/* ── Overview ──────────────────────────────── */}
          {activeTab === "overview" && (
            <>
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-1">
                  <span className="text-foreground">Painel </span>
                  <span className="text-gradient-neon">Administrativo</span>
                </h1>
                <p className="text-muted-foreground">Visão geral da plataforma</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card className="bg-card/80 border-border/50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10"><DollarSign className="w-5 h-5 text-primary" /></div>
                    <span className="text-sm text-muted-foreground">Total Depósitos</span>
                  </div>
                  <p className="text-2xl font-bold font-display text-foreground">{fmt(totalDepositos)}</p>
                </Card>
                <Card className="bg-card/80 border-border/50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-secondary/10"><BarChart2 className="w-5 h-5 text-secondary" /></div>
                    <span className="text-sm text-muted-foreground">Total CPA</span>
                  </div>
                  <p className="text-2xl font-bold font-display text-foreground">{fmt(totalCPA)}</p>
                </Card>
                <Card className="bg-card/80 border-border/50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-purple-500/10"><TrendingUp className="w-5 h-5 text-purple-400" /></div>
                    <span className="text-sm text-muted-foreground">Total Rev Share</span>
                  </div>
                  <p className="text-2xl font-bold font-display text-foreground">{fmt(totalRevShare)}</p>
                </Card>
                <Card className="bg-card/80 border-border/50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10"><Wallet className="w-5 h-5 text-primary" /></div>
                    <span className="text-sm text-muted-foreground">Saldo Usuários</span>
                  </div>
                  <p className="text-2xl font-bold font-display text-foreground">{fmt(totalSaldoUsuarios)}</p>
                </Card>
              </div>

              {/* Quick access cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: "solicitacoes", icon: ClipboardList, title: "Solicitações", desc: `${pendentesCount} pendentes`, color: "text-secondary" },
                  { id: "casinos", icon: Building2, title: "Casinos", desc: `${casinos.length} casinos cadastrados`, color: "text-primary" },
                  { id: "entradas", icon: Calendar, title: "Entradas", desc: `${mockEntradas.length} registros`, color: "text-secondary" },
                  { id: "carteiras", icon: Wallet, title: "Carteiras", desc: `${mockWallets.length} usuários`, color: "text-primary" },
                ].map(card => (
                  <Card
                    key={card.id}
                    className="bg-card/80 border-border/50 p-6 cursor-pointer hover:border-primary/30 transition-all"
                    onClick={() => setActiveTab(card.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-muted/30">
                        <card.icon className={`w-6 h-6 ${card.color}`} />
                      </div>
                      <div>
                        <p className="font-bold text-foreground font-display">{card.title}</p>
                        <p className="text-sm text-muted-foreground">{card.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* ── Solicitações ─────────────────────────── */}
          {activeTab === "solicitacoes" && (
            <Card className="bg-card/80 border-border/50 p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">Solicitações de Cadastro</h2>
                  <p className="text-sm text-muted-foreground">{pendentesCount} pendente{pendentesCount !== 1 ? "s" : ""} de análise</p>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Buscar por nome ou email..." value={searchSolicitacoes} onChange={e => setSearchSolicitacoes(e.target.value)} className="pl-10 bg-muted/30 border-border/50" />
                </div>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                {["todos", "pendente", "aprovado", "rejeitado"].map(st => (
                  <Button key={st} size="sm" variant={filtroStatusSol === st ? "default" : "outline"} onClick={() => setFiltroStatusSol(st)} className={filtroStatusSol === st ? "bg-primary text-primary-foreground" : ""}>
                    {st === "todos" ? "Todos" : st.charAt(0).toUpperCase() + st.slice(1) + "s"}
                  </Button>
                ))}
              </div>

              <div className="space-y-3">
                {filteredSolicitacoes.map(sol => (
                  <div key={sol.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-muted/20 border border-border/50 hover:border-primary/30 transition-all gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        sol.status === "pendente" ? "bg-secondary/10" : sol.status === "aprovado" ? "bg-primary/10" : "bg-destructive/10"
                      }`}>
                        {sol.status === "pendente" ? <Clock className="w-5 h-5 text-secondary" /> : sol.status === "aprovado" ? <CheckCircle className="w-5 h-5 text-primary" /> : <XCircle className="w-5 h-5 text-destructive" />}
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{sol.nome}</p>
                        <p className="text-xs text-muted-foreground">{sol.email} • {sol.telefone}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Login</p>
                        <p className="text-sm font-medium text-foreground">@{sol.login}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Data</p>
                        <p className="text-sm text-muted-foreground">{sol.dataCadastro}</p>
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        sol.status === "pendente" ? "bg-secondary/15 text-secondary" : sol.status === "aprovado" ? "bg-primary/15 text-primary" : "bg-destructive/15 text-destructive"
                      }`}>
                        {sol.status.charAt(0).toUpperCase() + sol.status.slice(1)}
                      </span>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={() => openDetail(sol)} title="Ver detalhes">
                          <Eye className="w-4 h-4" />
                        </Button>
                        {sol.status === "pendente" && (
                          <>
                            <Button variant="ghost" size="icon" onClick={() => aprovarSolicitacao(sol.id)} className="text-primary hover:text-primary" title="Aprovar">
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => rejeitarSolicitacao(sol.id)} className="text-destructive hover:text-destructive" title="Rejeitar">
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {filteredSolicitacoes.length === 0 && <p className="text-center py-8 text-muted-foreground">Nenhuma solicitação encontrada.</p>}
              </div>
            </Card>
          )}

          {/* ── Casinos ──────────────────────────────── */}
          {activeTab === "casinos" && (
            <Card className="bg-card/80 border-border/50 p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl font-display font-bold text-foreground">Casinos Afiliados</h2>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Buscar casino..." value={searchCasinos} onChange={e => setSearchCasinos(e.target.value)} className="pl-10 bg-muted/30 border-border/50" />
                  </div>
                  <Button variant="neon" size="sm" className="gap-2" onClick={openNewCasino}>
                    <Plus className="w-4 h-4" /> Novo
                  </Button>
                </div>
              </div>
              <div className="space-y-3">
                {filteredCasinos.map(casino => (
                  <div key={casino.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-muted/20 border border-border/50 hover:border-primary/30 transition-all gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Building2 className="w-5 h-5 text-primary" /></div>
                      <div>
                        <p className="font-bold text-foreground">{casino.nome}</p>
                        <p className="text-xs text-muted-foreground">{casino.urlAfiliado}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                      <div className="text-center"><p className="text-xs text-muted-foreground">CPA</p><p className="text-sm font-semibold text-foreground">{fmt(casino.comissaoCPA)}</p></div>
                      <div className="text-center"><p className="text-xs text-muted-foreground">Rev Share</p><p className="text-sm font-semibold text-foreground">{casino.comissaoRevShare}%</p></div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${casino.status === "ativo" ? "bg-primary/15 text-primary" : "bg-destructive/15 text-destructive"}`}>
                        {casino.status === "ativo" ? "Ativo" : "Inativo"}
                      </span>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={() => openEditCasino(casino)}><Edit className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => toggleCasinoStatus(casino.id)}><Eye className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => deleteCasino(casino.id)} className="text-destructive hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredCasinos.length === 0 && <p className="text-center py-8 text-muted-foreground">Nenhum casino encontrado.</p>}
              </div>
            </Card>
          )}

          {/* ── Entradas ─────────────────────────────── */}
          {activeTab === "entradas" && (
            <Card className="bg-card/80 border-border/50 p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl font-display font-bold text-foreground">Auditoria de Entradas</h2>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Buscar por usuário ou casa..." value={searchEntradas} onChange={e => setSearchEntradas(e.target.value)} className="pl-10 bg-muted/30 border-border/50" />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                {["todos", "deposito", "cpa", "ftd", "revshare"].map(tipo => (
                  <Button key={tipo} size="sm" variant={filtroTipo === tipo ? "default" : "outline"} onClick={() => setFiltroTipo(tipo)} className={filtroTipo === tipo ? "bg-primary text-primary-foreground" : ""}>
                    {tipo === "todos" ? "Todos" : tipoLabel(tipo)}
                  </Button>
                ))}
              </div>
              <div className="overflow-x-auto">
                <div className="grid grid-cols-6 gap-2 px-4 py-3 bg-muted/20 rounded-t-lg text-xs font-medium text-muted-foreground min-w-[700px]">
                  <span>Usuário</span><span>Casa</span><span>Tipo</span><span className="text-right">Valor</span><span className="text-right">Data</span><span className="text-right">Email</span>
                </div>
                <div className="space-y-1 min-w-[700px]">
                  {filteredEntradas.map(entrada => (
                    <div key={entrada.id} className="grid grid-cols-6 gap-2 px-4 py-3 border-b border-border/30 hover:bg-muted/10 transition-colors items-center">
                      <span className="text-sm font-medium text-foreground">{entrada.usuario}</span>
                      <span className="text-sm text-foreground">{entrada.casa}</span>
                      <span><span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tipoBadge(entrada.tipo)}`}>{tipoLabel(entrada.tipo)}</span></span>
                      <span className="text-sm text-right font-semibold text-foreground">{entrada.tipo === "ftd" ? entrada.valor : fmt(entrada.valor)}</span>
                      <span className="text-sm text-right text-muted-foreground">{entrada.data}</span>
                      <span className="text-sm text-right text-muted-foreground truncate">{entrada.email}</span>
                    </div>
                  ))}
                  {filteredEntradas.length === 0 && <p className="text-center py-8 text-muted-foreground">Nenhuma entrada encontrada.</p>}
                </div>
              </div>
            </Card>
          )}

          {/* ── Carteiras ────────────────────────────── */}
          {activeTab === "carteiras" && (
            <Card className="bg-card/80 border-border/50 p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl font-display font-bold text-foreground">Carteiras dos Usuários</h2>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Buscar usuário..." value={searchWallets} onChange={e => setSearchWallets(e.target.value)} className="pl-10 bg-muted/30 border-border/50" />
                </div>
              </div>
              <div className="space-y-3">
                {filteredWallets.map(wallet => (
                  <div key={wallet.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-muted/20 border border-border/50 hover:border-primary/30 transition-all gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><Users className="w-5 h-5 text-primary" /></div>
                      <div><p className="font-bold text-foreground">{wallet.usuario}</p><p className="text-xs text-muted-foreground">{wallet.email}</p></div>
                    </div>
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="text-center"><p className="text-xs text-muted-foreground">Disponível</p><p className="text-sm font-bold text-primary">{fmt(wallet.saldoDisponivel)}</p></div>
                      <div className="text-center"><p className="text-xs text-muted-foreground">Pendente</p><p className="text-sm font-semibold text-secondary">{fmt(wallet.saldoPendente)}</p></div>
                      <div className="text-center"><p className="text-xs text-muted-foreground">Total Sacado</p><p className="text-sm font-semibold text-foreground">{fmt(wallet.totalSacado)}</p></div>
                      <div className="text-center"><p className="text-xs text-muted-foreground">Última Atividade</p><p className="text-sm text-muted-foreground">{wallet.ultimaAtividade}</p></div>
                    </div>
                  </div>
                ))}
                {filteredWallets.length === 0 && <p className="text-center py-8 text-muted-foreground">Nenhum usuário encontrado.</p>}
              </div>
            </Card>
          )}
        </main>
      </div>

      {/* ── Solicitação Detail Dialog ────────────── */}
      <Dialog open={detailDialog} onOpenChange={setDetailDialog}>
        <DialogContent className="bg-card border-border/50">
          <DialogHeader>
            <DialogTitle className="font-display">Detalhes da Solicitação</DialogTitle>
            <DialogDescription>Informações do cadastro enviado pelo usuário.</DialogDescription>
          </DialogHeader>
          {selectedSolicitacao && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><User className="w-3 h-3" /> Nome Completo</p>
                  <p className="text-sm font-medium text-foreground">{selectedSolicitacao.nome}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><User className="w-3 h-3" /> Login</p>
                  <p className="text-sm font-medium text-foreground">@{selectedSolicitacao.login}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><Mail className="w-3 h-3" /> Email</p>
                  <p className="text-sm font-medium text-foreground">{selectedSolicitacao.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><Phone className="w-3 h-3" /> Telefone</p>
                  <p className="text-sm font-medium text-foreground">{selectedSolicitacao.telefone}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" /> Data do Cadastro</p>
                  <p className="text-sm font-medium text-foreground">{selectedSolicitacao.dataCadastro}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Status</p>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    selectedSolicitacao.status === "pendente" ? "bg-secondary/15 text-secondary" : selectedSolicitacao.status === "aprovado" ? "bg-primary/15 text-primary" : "bg-destructive/15 text-destructive"
                  }`}>
                    {selectedSolicitacao.status.charAt(0).toUpperCase() + selectedSolicitacao.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          )}
          {selectedSolicitacao?.status === "pendente" && (
            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={() => selectedSolicitacao && rejeitarSolicitacao(selectedSolicitacao.id)} className="text-destructive border-destructive/30 hover:bg-destructive/10 gap-2">
                <XCircle className="w-4 h-4" /> Rejeitar
              </Button>
              <Button variant="neon" onClick={() => selectedSolicitacao && aprovarSolicitacao(selectedSolicitacao.id)} className="gap-2">
                <CheckCircle className="w-4 h-4" /> Aprovar
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>

      {/* ── Casino Dialog ────────────────────────────── */}
      <Dialog open={casinoDialog} onOpenChange={setCasinoDialog}>
        <DialogContent className="bg-card border-border/50">
          <DialogHeader>
            <DialogTitle className="font-display">{editingCasino ? "Editar Casino" : "Novo Casino"}</DialogTitle>
            <DialogDescription>{editingCasino ? "Atualize as informações do casino." : "Cadastre um novo casino afiliado."}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Nome do Casino</label>
              <Input placeholder="Ex: BrasilBet" value={casinoForm.nome} onChange={e => setCasinoForm(f => ({ ...f, nome: e.target.value }))} className="bg-muted/30 border-border/50" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-1">Comissão CPA (R$)</label>
                <Input type="number" placeholder="150" value={casinoForm.comissaoCPA} onChange={e => setCasinoForm(f => ({ ...f, comissaoCPA: e.target.value }))} className="bg-muted/30 border-border/50" />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-1">Rev Share (%)</label>
                <Input type="number" placeholder="30" value={casinoForm.comissaoRevShare} onChange={e => setCasinoForm(f => ({ ...f, comissaoRevShare: e.target.value }))} className="bg-muted/30 border-border/50" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">URL do Afiliado</label>
              <Input placeholder="https://casino.com/aff" value={casinoForm.urlAfiliado} onChange={e => setCasinoForm(f => ({ ...f, urlAfiliado: e.target.value }))} className="bg-muted/30 border-border/50" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline">Cancelar</Button></DialogClose>
            <Button variant="neon" onClick={saveCasino}>{editingCasino ? "Salvar" : "Cadastrar"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
