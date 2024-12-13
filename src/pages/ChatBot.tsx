import { useState } from 'react';
import { aiClient } from '@/utils/googleAI';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ChatBot() {
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Adiciona a mensagem do usuário à conversa
    setMessages((prev) => [...prev, `Você: ${userInput}`]);

    try {
      const response = await aiClient.language.generateText({
        prompt: userInput,
        model: 'text-bison-001',
        maxTokens: 150,
      });

      setMessages((prev) => [...prev, `Assistente: ${response.text}`]);
    } catch (error) {
      console.error('Erro ao gerar resposta:', error);
      setMessages((prev) => [...prev, 'Assistente: Desculpe, ocorreu um erro.']);
    }

    // Limpa o campo de entrada
    setUserInput('');
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="border max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Parler avec le Assistent Recap'eps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 overflow-y-auto border p-4 mb-4 rounded bg-gray-50">
            {messages.map((message, index) => (
              <p key={index} className="mb-2">
                {message}
              </p>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="Digite sua mensagem..."
            />
            <Button
              onClick={handleSend}
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white px-4 rounded"
            >
              Enoyer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
