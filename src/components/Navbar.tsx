import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Crown className="w-8 h-8 text-secondary" />
          <span className="text-xl font-display font-bold text-gradient-gold">
            CasinoAff
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
            Como Funciona
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
            Plataformas
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
            Comissões
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
            Suporte
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Login
          </Button>
          <Button variant="neon" size="sm">
            Cadastrar
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border/50 py-6">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a href="#" className="text-foreground hover:text-secondary transition-colors py-2">
              Como Funciona
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-colors py-2">
              Plataformas
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-colors py-2">
              Comissões
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-colors py-2">
              Suporte
            </a>
            <div className="flex gap-4 pt-4 border-t border-border/50">
              <Button variant="goldOutline" size="sm" className="flex-1">
                Login
              </Button>
              <Button variant="neon" size="sm" className="flex-1">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
