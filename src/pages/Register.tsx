import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, User, Mail, Phone, Lock, UserCircle, Eye, EyeOff, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    login: "",
    email: "",
    telefone: "",
    senha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Cadastro realizado!",
      description: "Seu cadastro foi enviado com sucesso. Em breve entraremos em contato.",
    });

    setIsLoading(false);
    setFormData({
      nome: "",
      login: "",
      email: "",
      telefone: "",
      senha: "",
    });
  };

  const benefits = [
    "Comissões de até 50%",
    "Pagamentos semanais",
    "Dashboard exclusivo",
    "Suporte VIP 24/7",
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 xl:px-20">
        <div className="w-full max-w-md mx-auto">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar ao início
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
              <span className="text-foreground">Torne-se um </span>
              <span className="text-gradient-gold">Afiliado</span>
            </h1>
            <p className="text-muted-foreground">
              Preencha seus dados e comece a ganhar dinheiro hoje mesmo.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome */}
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-foreground">
                Nome Completo
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="pl-11 h-12 bg-card border-border focus:border-primary focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Login */}
            <div className="space-y-2">
              <Label htmlFor="login" className="text-foreground">
                Login (nome de usuário)
              </Label>
              <div className="relative">
                <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="login"
                  name="login"
                  type="text"
                  placeholder="Escolha seu login"
                  value={formData.login}
                  onChange={handleChange}
                  required
                  className="pl-11 h-12 bg-card border-border focus:border-primary focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                E-mail
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-11 h-12 bg-card border-border focus:border-primary focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Telefone */}
            <div className="space-y-2">
              <Label htmlFor="telefone" className="text-foreground">
                Telefone / WhatsApp
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="pl-11 h-12 bg-card border-border focus:border-primary focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Senha */}
            <div className="space-y-2">
              <Label htmlFor="senha" className="text-foreground">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="senha"
                  name="senha"
                  type={showPassword ? "text" : "password"}
                  placeholder="Crie uma senha forte"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  className="pl-11 pr-11 h-12 bg-card border-border focus:border-primary focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full h-12 mt-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  Processando...
                </div>
              ) : (
                "Criar Conta de Afiliado"
              )}
            </Button>
          </form>

          {/* Login Link */}
          <p className="text-center text-muted-foreground mt-6">
            Já tem uma conta?{" "}
            <Link to="/" className="text-secondary hover:text-secondary/80 font-medium transition-colors">
              Fazer login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-card via-muted to-card relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[150px]" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <div className="max-w-md">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
                Programa VIP
              </span>
            </div>

            <h2 className="text-4xl xl:text-5xl font-display font-bold mb-6">
              <span className="text-foreground">Ganhe até </span>
              <span className="text-gradient-neon">R$50.000</span>
              <span className="text-foreground"> por mês</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-10">
              Junte-se a mais de 5.000 afiliados que já transformaram suas vidas com o nosso programa.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-display font-bold text-gradient-gold">R$2M+</div>
                  <div className="text-sm text-muted-foreground">Pagos</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-gradient-neon">5.000+</div>
                  <div className="text-sm text-muted-foreground">Afiliados</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-gradient-gold">50%</div>
                  <div className="text-sm text-muted-foreground">Comissão</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Glow border on left side */}
        <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </div>
    </div>
  );
};

export default Register;
