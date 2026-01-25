import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, Mail, Phone, Clock, HelpCircle, FileText, Users, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Atendimento rápido pelo WhatsApp",
    contact: "+55 11 99999-9999",
    action: "Iniciar Conversa",
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Envie sua dúvida por e-mail",
    contact: "suporte@iafiliado.com",
    action: "Enviar E-mail",
  },
  {
    icon: Headphones,
    title: "Chat ao Vivo",
    description: "Fale com um atendente agora",
    contact: "Disponível 24/7",
    action: "Abrir Chat",
  },
];

const faqItems = [
  {
    question: "Como faço para me cadastrar como afiliado?",
    answer: "Basta clicar no botão 'Cadastrar' e preencher o formulário com seus dados. O processo leva menos de 2 minutos e é totalmente gratuito.",
  },
  {
    question: "Quanto tempo demora para aprovar meu cadastro?",
    answer: "A aprovação é feita em até 24 horas úteis. Você receberá um e-mail de confirmação assim que seu cadastro for aprovado.",
  },
  {
    question: "Como recebo minhas comissões?",
    answer: "As comissões são pagas semanalmente via PIX, transferência bancária ou criptomoedas. Você pode escolher seu método preferido no dashboard.",
  },
  {
    question: "Posso promover em qualquer plataforma?",
    answer: "Sim! Você pode divulgar seus links em redes sociais, sites, blogs, canais do YouTube, grupos de Telegram e WhatsApp.",
  },
  {
    question: "Existe um valor mínimo para saque?",
    answer: "O valor mínimo para saque via PIX é de R$ 50. Para outros métodos, consulte a página de Comissões.",
  },
  {
    question: "Como acompanho minhas conversões?",
    answer: "Você tem acesso a um dashboard completo com estatísticas em tempo real de cliques, cadastros, depósitos e comissões.",
  },
];

const resources = [
  {
    icon: FileText,
    title: "Materiais de Marketing",
    description: "Banners, vídeos e textos prontos para usar",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Grupo exclusivo de afiliados no Telegram",
  },
  {
    icon: HelpCircle,
    title: "Tutoriais",
    description: "Vídeos explicativos passo a passo",
  },
];

const Suporte = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Responderemos em até 24 horas.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4 uppercase tracking-wider">
            Estamos Aqui para Ajudar
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Central de <span className="text-gradient-gold">Suporte</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas, entre em contato ou acesse nossos recursos de apoio ao afiliado
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl p-6 border border-border/50 card-hover text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center mb-4">
                  <method.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {method.description}
                </p>
                <p className="text-secondary font-semibold mb-4">{method.contact}</p>
                <Button variant="neonOutline" className="w-full">
                  {method.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Banner */}
      <section className="py-6 px-4 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto flex items-center justify-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          <span className="text-foreground font-semibold">
            Atendimento 24 horas, 7 dias por semana
          </span>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Perguntas <span className="text-gradient-neon">Frequentes</span>
          </h2>
          <div className="max-w-3xl mx-auto grid gap-4">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-xl p-6 border border-border/50"
              >
                <h4 className="font-display font-bold text-foreground mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h4>
                <p className="text-muted-foreground pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 bg-casino-surface/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Recursos para <span className="text-gradient-gold">Afiliados</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl p-6 border border-border/50 card-hover"
              >
                <resource.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Envie sua <span className="text-gradient-neon">Mensagem</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nome
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  required
                  className="bg-muted border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  E-mail
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="bg-muted border-border"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Assunto
              </label>
              <Input
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Sobre o que você precisa de ajuda?"
                required
                className="bg-muted border-border"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Mensagem
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Descreva sua dúvida ou solicitação..."
                rows={5}
                required
                className="bg-muted border-border"
              />
            </div>
            <Button type="submit" variant="neon" size="lg" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Suporte;
