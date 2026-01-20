import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-casino-surface/50 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-gold mb-8 shadow-gold animate-float">
            <Gift className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            Pronto para{" "}
            <span className="text-gradient-gold">Lucrar</span>?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Cadastre-se agora e receba acesso exclusivo ao nosso programa de afiliados. 
            <span className="text-secondary font-semibold"> Bônus de R$500</span> para os primeiros 100 afiliados!
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="group">
              Cadastrar Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="goldOutline" size="lg">
              Falar com Suporte
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Cadastro 100% Gratuito
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              Sem Taxas Escondidas
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Suporte 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
