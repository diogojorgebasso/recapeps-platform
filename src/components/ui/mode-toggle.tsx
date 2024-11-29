import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Switch } from "@/components/ui/switch"; // Assume a Switch component is available

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="flex items-center space-x-2">
            <Sun
                className={`h-5 w-5 ${theme === "light" ? "text-yellow-500" : "text-gray-500"}`}
            />
            <Switch
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
            />
            <Moon
                className={`h-5 w-5 ${theme === "dark" ? "text-blue-500" : "text-gray-500"}`}
            />
        </div>
    );
}
