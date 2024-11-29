import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { ModeToggle } from "../ui/mode-toggle";
import ContextualAvatar from "./ContextualAvatar";

export default function Menu() {
    return (
        <div className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 dark:bg-gray-700">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Fonctionnalités</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li>
                                    <Link
                                        to="/outils/dashboard"
                                        className="block select-none space-y-1 rounded-md p-3 no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <div className="text-sm font-medium leading-none">
                                            Tableau de Bord
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Gérez vos activités et accédez rapidement à toutes vos
                                            ressources éducatives.
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/outils/notes"
                                        className="block select-none space-y-1 rounded-md p-3 no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <div className="text-sm font-medium leading-none">
                                            Notes
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Créez, organisez et révisez vos notes efficacement dans un
                                            espace structuré.
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/outils/flashcards"
                                        className="block select-none space-y-1 rounded-md p-3 no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <div className="text-sm font-medium leading-none">
                                            Cartes Mémoire
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Mémorisez des concepts clés avec des cartes interactives et
                                            intuitives.
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/outils/chatbot"
                                        className="block select-none space-y-1 rounded-md p-3 no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <div className="text-sm font-medium leading-none">
                                            Chatbot
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Interagissez avec une IA pour poser des questions et
                                            approfondir vos connaissances.
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Documentation */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/contact" className={navigationMenuTriggerStyle()}>
                                Contact
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/about" className={navigationMenuTriggerStyle()}>
                                À Propos
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="ml-auto flex items-center space-x-4">
                <ContextualAvatar />
                <ModeToggle />
            </div>
        </div>
    );
}
