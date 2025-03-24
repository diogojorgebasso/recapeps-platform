import { ReactElement } from "react";
import { FiBookOpen, FiHelpCircle } from "react-icons/fi";
import { LuInbox, LuNotebookPen, LuListTodo } from "react-icons/lu";
import { FaMicrophoneLines } from "react-icons/fa6";

interface Item {
  label: string;
  icon: ReactElement;
  path: string;
  target?: string;
}

export const SidebarItems: Item[] = [
  { label: "Tableau de bord", icon: <LuInbox />, path: "/dashboard" },
  { label: "Fiches de révision", icon: <LuNotebookPen />, path: "/notes" },
  { label: "Quiz", icon: <LuListTodo />, path: "/quiz" },
  { label: "Flashcards", icon: <FiBookOpen />, path: "/flashcards" },
  { label: "Oral 3", icon: <FaMicrophoneLines />, path: "/oral-3" },
  { label: "Contact", icon: <FiHelpCircle />, path: "/contact", target: "_blank" },
];