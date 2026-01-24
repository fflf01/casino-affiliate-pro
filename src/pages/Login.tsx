import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Crown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
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
      title: "Login realizado!",
      description: "Bem-vindo de volta ao painel de afiliados.",
    });

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[150px]" />

      <div className="w-full max-w-md mx-auto px-6 py-12 relative z-10">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar ao início
        </Link>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Crown className="w-10 h-10 text-secondary" />
          <span className="text-2xl font-display font-bold text-gradient-gold">
            CasinoAff
          </span>
        </div>

        {/* Card */}
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">
              <span className="text-foreground">Bem-vindo de </span>
              <span className="text-gradient-neon">Volta</span>
            </h1>
            <p className="text-muted-foreground">
              Acesse sua conta de afiliado
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="pl-11 h-12 bg-muted/50 border-border focus:border-primary focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Senha */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="senha" className="text-foreground">
                  Senha
                </Label>
                <Link
                  to="/esqueci-senha"
                  className="text-sm text-secondary hover:text-secondary/80 transition-colors"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="senha"
                  name="senha"
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  className="pl-11 pr-11 h-12 bg-muted/50 border-border focus:border-primary focus:ring-primary/20"
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
                  Entrando...
                </div>
              ) : (
                "Entrar"
              )}
            </Button>
          </form>

          {/* Register Link */}
          <p className="text-center text-muted-foreground mt-6">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="text-secondary hover:text-secondary/80 font-medium transition-colors">
              Cadastre-se
            </Link>
          </p>
        </div>

        {/* Footer text */}
        <p className="text-center text-muted-foreground/60 text-xs mt-8">
          Ao fazer login, você concorda com nossos Termos de Uso e Política de Privacidade.
        </p>
      </div>
    </div>
  );
};

export default Login;
