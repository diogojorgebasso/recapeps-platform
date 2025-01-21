import { ReactElement } from "react";
import { FiBookOpen, FiHelpCircle, FiMail } from "react-icons/fi";
import { LuInbox, LuNotebookPen, LuListTodo, LuBot } from "react-icons/lu";

interface Item {
  label: string;
  icon: ReactElement;
  path: string;
}

export const SidebarItems: Item[] = [
  { label: "Tableau de bord", icon: <LuInbox />, path: "/dashboard" },
  { label: "Quizz", icon: <LuListTodo />, path: "/quizz" },
  { label: "Flashcards", icon: <FiBookOpen />, path: "/flashcards" },
  { label: "Chatbot", icon: <LuBot />, path: "/chatbot" },
  { label: "Fiches de révision", icon: <LuNotebookPen />, path: "/notes" },
  { label: "Support", icon: <FiHelpCircle />, path: "/support" },
  { label: "LuBot", icon: <FiMail />, path: "/feedback" },
];
