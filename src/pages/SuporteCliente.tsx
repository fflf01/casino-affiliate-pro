import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Crown,
  ArrowLeft,
  MessageSquare,
  Send,
  User,
  Bot,
  Clock,
  CheckCheck,
  Paperclip,
  Smile,
  Phone,
  Video,
  MoreVertical,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "support";
  timestamp: string;
  read: boolean;
}

interface Ticket {
  id: string;
  subject: string;
  status: "aberto" | "em_andamento" | "resolvido";
  lastMessage: string;
  updatedAt: string;
  unreadCount: number;
}

const SuporteCliente = () => {
  const { toast } = useToast();
  const [selectedTicket, setSelectedTicket] = useState<string | null>("1");
  const [newMessage, setNewMessage] = useState("");
  const [showNewTicket, setShowNewTicket] = useState(false);
  const [newTicketSubject, setNewTicketSubject] = useState("");
  const [newTicketMessage, setNewTicketMessage] = useState("");

  const [tickets, setTickets] = useState<Ticket[]>([]);

  const [messages, setMessages] = useState<Record<string, Message[]>>({});

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedTicket) return;

    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      read: false,
    };

    setMessages((prev) => ({
      ...prev,
      [selectedTicket]: [...(prev[selectedTicket] || []), message],
    }));

    setTickets((prev) =>
      prev.map((t) =>
        t.id === selectedTicket
          ? { ...t, lastMessage: newMessage, updatedAt: "Agora", status: "em_andamento" }
          : t
      )
    );

    setNewMessage("");
    toast({
      title: "Mensagem enviada",
      description: "Sua mensagem foi enviada com sucesso.",
    });
  };

  const createTicket = () => {
    if (!newTicketSubject.trim() || !newTicketMessage.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha o assunto e a mensagem.",
        variant: "destructive",
      });
      return;
    }

    const newId = Date.now().toString();
    const newTicket: Ticket = {
      id: newId,
      subject: newTicketSubject,
      status: "aberto",
      lastMessage: newTicketMessage,
      updatedAt: "Agora",
      unreadCount: 0,
    };

    setTickets([newTicket, ...tickets]);
    setMessages((prev) => ({
      ...prev,
      [newId]: [
        {
          id: "1",
          content: newTicketMessage,
          sender: "user",
          timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
          read: false,
        },
      ],
    }));

    setSelectedTicket(newId);
    setShowNewTicket(false);
    setNewTicketSubject("");
    setNewTicketMessage("");

    toast({
      title: "Ticket criado",
      description: "Seu ticket foi criado com sucesso.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aberto":
        return "bg-secondary/10 text-secondary";
      case "em_andamento":
        return "bg-primary/10 text-primary";
      case "resolvido":
        return "bg-muted text-muted-foreground";
      default:
        return "";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "aberto":
        return "Aberto";
      case "em_andamento":
        return "Em Andamento";
      case "resolvido":
        return "Resolvido";
      default:
        return status;
    }
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

      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              <span className="text-foreground">Suporte ao </span>
              <span className="text-gradient-neon">Cliente</span>
            </h1>
            <p className="text-muted-foreground">
              Converse com nossa equipe de suporte
            </p>
          </div>
          <Button variant="neon" className="gap-2" onClick={() => setShowNewTicket(true)}>
            <MessageSquare className="w-4 h-4" />
            Novo Ticket
          </Button>
        </div>

        {/* New Ticket Modal */}
        {showNewTicket && (
          <Card className="bg-card/80 border-border/50 p-6 mb-8">
            <h2 className="text-xl font-display font-bold text-foreground mb-4">
              Criar Novo Ticket
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Assunto
                </label>
                <Input
                  placeholder="Ex: Dúvida sobre comissões"
                  value={newTicketSubject}
                  onChange={(e) => setNewTicketSubject(e.target.value)}
                  className="bg-muted/30 border-border/50"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Descreva sua dúvida ou problema..."
                  value={newTicketMessage}
                  onChange={(e) => setNewTicketMessage(e.target.value)}
                  className="bg-muted/30 border-border/50 min-h-[100px]"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="neon" onClick={createTicket}>
                  Criar Ticket
                </Button>
                <Button variant="outline" onClick={() => setShowNewTicket(false)}>
                  Cancelar
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Chat Interface */}
        <div className="h-[600px]">
          {/* Chat Area */}
          <Card className="bg-card/80 border-border/50 flex flex-col overflow-hidden h-full">
            {selectedTicket ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">
                        {tickets.find((t) => t.id === selectedTicket)?.subject}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Equipe de Suporte
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages[selectedTicket]?.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground rounded-br-md"
                            : "bg-muted/50 text-foreground rounded-bl-md"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <div
                          className={`flex items-center gap-1 mt-1 ${
                            message.sender === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          <span
                            className={`text-xs ${
                              message.sender === "user"
                                ? "text-primary-foreground/70"
                                : "text-muted-foreground"
                            }`}
                          >
                            {message.timestamp}
                          </span>
                          {message.sender === "user" && (
                            <CheckCheck
                              className={`w-3 h-3 ${
                                message.read
                                  ? "text-primary-foreground"
                                  : "text-primary-foreground/50"
                              }`}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Input
                      placeholder="Digite sua mensagem..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                      className="flex-1 bg-muted/30 border-border/50"
                    />
                    <Button variant="ghost" size="icon">
                      <Smile className="w-4 h-4" />
                    </Button>
                    <Button variant="neon" size="icon" onClick={sendMessage}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Selecione um ticket para ver as mensagens
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SuporteCliente;
