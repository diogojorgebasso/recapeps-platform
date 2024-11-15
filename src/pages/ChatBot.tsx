import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "user", content: "Olá, o que você pode fazer?" },
    { role: "assistant", content: "Posso ajudar com suas dúvidas e oferecer informações!" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Adiciona a mensagem do usuário
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");

    // Simula a resposta do assistente
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Isso é uma resposta simulada!" },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="w-full py-4 px-6 bg-background border-b">
        <h1 className="text-xl font-bold">ChatGPT Clone</h1>
      </header>

      {/* Chat Messages */}
      <main className="flex-1 overflow-y-auto p-4 bg-muted">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <MessageBubble key={index} role={message.role} content={message.content} />
          ))}
        </div>
      </main>

      {/* Input Field */}
      <footer className="w-full p-4 bg-background border-t">
        <div className="flex items-center gap-2 max-w-3xl mx-auto">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage}>Enviar</Button>
        </div>
      </footer>
    </div>
  );
}

type MessageBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

const MessageBubble = ({ role, content }: MessageBubbleProps) => {
  const isUser = role === "user";

  return (
    <Card
      className={`p-4 max-w-xl ${isUser ? "bg-primary text-white self-end" : "bg-white text-black self-start"
        }`}
    >
      <CardContent>{content}</CardContent>
    </Card>
  );
};
