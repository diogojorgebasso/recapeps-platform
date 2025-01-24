import { ReactElement } from "react";
import { FiBookOpen, FiHelpCircle } from "react-icons/fi";
import { LuInbox, LuNotebookPen, LuListTodo } from "react-icons/lu";

interface Item {
  label: string;
  icon: ReactElement;
  path: string;
  target?: string;
}

export const SidebarItems: Item[] = [
  { label: "Tableau de bord", icon: <LuInbox />, path: "/dashboard" },
  { label: "Quizz", icon: <LuListTodo />, path: "/quizz" },
  { label: "Flashcards", icon: <FiBookOpen />, path: "/flashcards" },
  { label: "Fiches de révision", icon: <LuNotebookPen />, path: "/notes" },
  { label: "Support", icon: <FiHelpCircle />, path: "/support", target: "_blank" },
];
