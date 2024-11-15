import * as React from "react";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { manuNav } from "./MenuNav";
import { ModeToggle } from "../ui/mode-toggle";
import ContextualAvatar from "./ContextualAvatar";

export default function Menu() {
    return (
        <div className="flex items-center justify-between w-full px-4 py-2">
            {/* Left Navigation Menu */}
            <NavigationMenu>
                <NavigationMenuList>
                    {/* Getting Started */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <ListItem
                                    to="/"
                                    title="shadcn/ui"
                                    description="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
                                    className="row-span-3 flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6"
                                />
                                <ListItem to="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem to="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem to="/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists, etc.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Components */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {manuNav.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        to={component.href}
                                        title={component.title}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
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
                                About
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>

                {/* Right Actions */}
                <div className="flex items-center space-x-4">
                    <ModeToggle />
                    <ContextualAvatar />
                </div>
            </NavigationMenu>

        </div>
    );
}

type ListItemProps = {
    to: string;
    title: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
};

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
    ({ to, title, description, children, className }, ref) => (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    to={to}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {description || children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
);

ListItem.displayName = "ListItem";
