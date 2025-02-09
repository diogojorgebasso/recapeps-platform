import { Link } from "react-router";

import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth";

import { Avatar } from "@/components/ui/avatar";
import { defineStyle, MenuItemGroup } from "@chakra-ui/react"

import { FaUser, FaCreditCard, FaKeyboard, FaSignOutAlt, FaCog } from "react-icons/fa";

import {
    MenuContent,
    MenuItem,
    MenuItemCommand,
    MenuRoot,
    MenuTrigger,
    MenuSeparator
} from "@/components/ui/menu"


const ringCss = defineStyle({
    outlineWidth: "2px",
    outlineColor: "green.500",
    outlineOffset: "2px",
    outlineStyle: "solid",
})

export default function ContextualAvatar() {

    const { currentUser, isAuthenticated, signOut } = useAuth();

    if (isAuthenticated) {
        return (
            <MenuRoot>
                <MenuTrigger>
                    <Avatar
                        src={currentUser?.photoURL || "/avatar.svg"}
                        name={currentUser?.displayName || "Étudiant"}
                        css={ringCss}
                    >
                    </Avatar>
                </MenuTrigger>
                <MenuContent className="w-56">
                    <MenuItemGroup title="Mon Compte">
                        <MenuItem value="profil" asChild>
                            <Link to="/profil">
                                <FaUser />
                                Profil
                                <MenuItemCommand>⇧⌘P</MenuItemCommand>
                            </Link>
                        </MenuItem>
                        <MenuItem value="settings" asChild>
                            <Link to="profil">
                                <FaCog />
                                Settings
                                <MenuItemCommand>⌘S</MenuItemCommand>
                            </Link>
                        </MenuItem>
                    </MenuItemGroup>
                    <MenuSeparator />
                    <MenuItem value="checkout" asChild>
                        <Link to="checkout">
                            <FaCreditCard />
                            Passez à Recap'eps Pro
                            <MenuItemCommand>⌘B</MenuItemCommand>
                        </Link>
                    </MenuItem>
                    <MenuItem value="keyboard">
                        <FaKeyboard />
                        Keyboard shortcuts
                        <MenuItemCommand>⌘K</MenuItemCommand>
                    </MenuItem>
                    <MenuSeparator />
                    <MenuSeparator />
                    <MenuItem onClick={signOut} value="logOut">
                        <FaSignOutAlt />
                        Log out
                        <MenuItemCommand>⇧⌘Q</MenuItemCommand>
                    </MenuItem>
                </MenuContent>
            </MenuRoot >
        )
    }
    else {
        return (<Button asChild><Link to="/login">Login</Link></Button>)
    }
}
