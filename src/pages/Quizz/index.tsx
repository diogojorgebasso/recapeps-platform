import { useEffect, useState } from "react";
import { fetchSubjects } from "@/api/getQuizzesFromFirebase";
import { Subject } from "@/types/Quizz";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"; // Ajuste caso necessário, dependendo de onde seu componente Tabs está
import { Link } from "react-router";

export default function Home() {
  const [subjects1, setSubjects1] = useState<Subject[]>([]);
  const [subjects2, setSubjects2] = useState<Subject[]>([]);
  const [selectedTab, setSelectedTab] = useState("prova1");

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
      <Card className="max-w-md w-full bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sélectionner un test</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="flex space-x-4 justify-center">
              <TabsTrigger value="prova1" className="px-4 py-2 bg-blue-500 text-white rounded">
                Écrit 1
              </TabsTrigger>
              <TabsTrigger value="prova2" className="px-4 py-2 bg-blue-500 text-white rounded">
                Écrit 2
              </TabsTrigger>
            </TabsList>

            <TabsContent value="prova1" className="mt-4">
              <p className="text-center mb-4 font-semibold">Matérias da Prova 1</p>
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
            </TabsContent>

            <TabsContent value="prova2" className="mt-4">
              <p className="text-center mb-4 font-semibold">Matérias da Prova 2</p>
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
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
