import React, { useState } from "react";
import { addQuizToSubject } from "@/api/postQuizzesFromFirebase";
import { Textarea } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Button } from "../ui/button";
import { Field } from "../ui/field";


export default function AddQuestionForm() {
  const [subjectId, setSubjectId] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  const handleOptionChange = (value: string, index: number) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!subjectId || !question || options.some((opt) => opt === "") || !answer) {
      alert("Preencha todos os campos antes de enviar.");
      return;
    }

    const questionData = { question, options, answer };
    const result = await addQuizToSubject(subjectId, questionData);

    if (result.success) {
      alert("Questão adicionada com sucesso!");
      setSubjectId("");
      setQuestion("");
      setOptions(["", "", "", ""]);
      setAnswer("");
    } else {
      alert(`Erro ao adicionar a questão: ${result.error}`);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Adicionar Questão</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo ID do Sujeito */}
        <div>
          <Field label="ID do Sujeito">
            <Input
              type="text"
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
              placeholder="Insira o ID do sujeito"
              required
            />
          </Field>
        </div>

        {/* Campo Pergunta */}
        <div>
          <Field label="Pergunta">
            <Textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Escreva a pergunta"
              required
            />
          </Field>
        </div>

        {/* Campo Opções */}
        <div>
          <Field>Opções</Field>
          {options.map((opt, index) => (
            <div key={index} className="mb-2">
              <Input
                type="text"
                placeholder={`Opção ${index + 1}`}
                value={opt}
                onChange={(e) => handleOptionChange(e.target.value, index)}
                required
              />
            </div>
          ))}
        </div>

        {/* Campo Resposta Correta */}
        {/* <div>
          <Field>Resposta Correta</Field>
          <Select
            onValueChange={(value) => setAnswer(value)}
            value={answer}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione a resposta correta" />
            </SelectTrigger>
            <SelectContent>
              {options
                .filter((opt) => opt.trim() !== "") // Ignorar valores vazios
                .map((opt, index) => (
                  <SelectItem key={index} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div> */}

        {/* Botão de Enviar */}
        <Button type="submit" className="w-full">
          Adicionar Questão
        </Button>
      </form>
    </div>
  );
}
