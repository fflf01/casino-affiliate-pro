import { Crown, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/30 bg-casino-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-8 h-8 text-secondary" />
              <span className="text-2xl font-display font-bold text-gradient-gold">
                CasinoAff
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              O programa de afiliados mais lucrativo do Brasil. Transforme sua audiência em renda passiva.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Programa</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Comissões</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Pagamentos</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Materiais</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Plataformas</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">Bet365</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Betano</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Stake</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">1xBet</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 CasinoAff. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Jogue com responsabilidade. +18
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
