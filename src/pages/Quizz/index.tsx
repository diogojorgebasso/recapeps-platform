import { useEffect, useState } from "react";
import { fetchSubjects } from "@/api/getQuizzesFromFirebase";
import { Subject } from "@/types/Quizz";
import { Card, Tabs } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Home() {
  const [subjects1, setSubjects1] = useState<Subject[]>([]);
  const [subjects2, setSubjects2] = useState<Subject[]>([]);

  useEffect(() => {
    const loadSubjects = async () => {
      const allSubjects = await fetchSubjects("ecrit-1");
      setSubjects1(allSubjects);
      const allSubjects2 = await fetchSubjects("ecrit-2");
      setSubjects2(allSubjects2);
    };
    loadSubjects();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <Card.Root className="max-w-md w-full bg-white shadow-lg">
        <Card.Header>
          Sélectionner un test
        </Card.Header>
        <Card.Body>
          <Tabs.Root >
            <Tabs.List className="flex space-x-4 justify-center">
              <Tabs.Trigger value="prova1" className="px-4 py-2 bg-blue-500 text-white rounded">
                Écrit 1
              </Tabs.Trigger>
              <Tabs.Trigger value="prova2" className="px-4 py-2 bg-blue-500 text-white rounded">
                Écrit 2
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="prova1" className="mt-4">
              <p className="text-center mb-4 font-semibold">Choisissez votre sujet :</p>
              <ul className="space-y-4">
                {subjects1.map((subject) => (
                  <li key={subject.id}>
                    <Link to={`/quizz/ecrit-1/${subject.id}`}>
                      <Button className="w-full bg-blue-500 text-white shadow-md hover:bg-blue-600 transition">
                        {subject.name}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </Tabs.Content>

            <Tabs.Content value="prova2" className="mt-4">
              <p className="text-center mb-4 font-semibold">Choisissez votre sujet :</p>
              <ul className="space-y-4">
                {subjects2.map((subject) => (
                  <li key={subject.id}>
                    <Link to={`/quizz/ecrit-2/${subject.id}`}>
                      <Button className="w-full bg-blue-500 text-white shadow-md hover:bg-blue-600 transition">
                        {subject.name}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </Tabs.Content>
          </Tabs.Root>
        </Card.Body>
      </Card.Root>
    </div>
  );
}
