import quizResultsMock from "./quizResults.json";

export async function getQuizzesFromMock() {
  // Simula um atraso na resposta para se parecer mais com uma chamada de rede
  await new Promise((resolve) => setTimeout(resolve, 500));
  return quizResultsMock;
}
