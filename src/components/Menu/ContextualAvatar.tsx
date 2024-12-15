import { Link } from "react-router";

import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth";

import { Avatar } from "@/components/ui/avatar";
import { defineStyle, MenuItemGroup } from "@chakra-ui/react"

import {
    Cloud,
    CreditCard,
    Keyboard,
    LifeBuoy,
    LogOut,
    Plus,
    Settings,
    User,
    Users,
} from "lucide-react"

import {
    MenuContent,
    MenuItem,
    MenuItemCommand,
    MenuRoot,
    MenuTrigger,
    MenuSeparator
} from "@/components/ui/menu"

import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
    DialogActionTrigger
} from "@/components/ui/dialog"

const ringCss = defineStyle({
    outlineWidth: "2px",
    outlineColor: "colorPalette.500",
    outlineOffset: "2px",
    outlineStyle: "solid",
})

export default function ContextualAvatar() {

    const { photoURL, currentUser, signOut, name } = useAuth();

    if (currentUser) {

        return (
            <MenuRoot>
                <MenuTrigger asChild>
                    <Avatar
                        src={photoURL}
                        name={name}
                        css={ringCss}
                    >
                    </Avatar>
                </MenuTrigger>
                <MenuContent className="w-56">
                    <MenuItemGroup title="Mon Compte">
                        <MenuItem value="profil" asChild>
                            <Link to="/profile">
                                <User />
                                Profil
                                <MenuItemCommand>⇧⌘P</MenuItemCommand>
                            </Link>
                        </MenuItem>
                        <MenuItem value="settings" asChild>
                            <Link to="profile">
                                <Settings />
                                Settings
                                <MenuItemCommand>⌘S</MenuItemCommand>
                            </Link>
                        </MenuItem>
                    </MenuItemGroup>
                    <MenuSeparator />
                    <MenuItem value="checkout" asChild>
                        <Link to="checkout">
                            <CreditCard />
                            Passez à Recap'eps Pro
                            <MenuItemCommand>⌘B</MenuItemCommand>
                        </Link>
                    </MenuItem>
                    <MenuItem value="keyboard">
                        <Keyboard />
                        Keyboard shortcuts
                        <MenuItemCommand>⌘K</MenuItemCommand>
                    </MenuItem>
                    <MenuItem value="team" asChild>
                        <Link to="team">
                            <Users />
                            Team
                        </Link>
                    </MenuItem>
                    <MenuItem value="team" asChild>
                        <Link to="team">
                            <Plus />
                            New Team
                            <MenuItemCommand>⌘+T</MenuItemCommand>
                        </Link>
                    </MenuItem>
                    <MenuSeparator />
                    <MenuItem value="support" asChild>
                        <Link to="support">
                            <LifeBuoy />
                            Support
                        </Link>
                    </MenuItem>
                    <MenuItem value="api" disabled>
                        <Cloud />
                        API
                    </MenuItem>
                    <MenuSeparator />
                    <DialogRoot>
                        <DialogTrigger asChild>
                            <MenuItem value="logOut">
                                <LogOut />
                                Log out
                                <MenuItemCommand>⇧⌘Q</MenuItemCommand>
                            </MenuItem>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogCloseTrigger />
                            <DialogHeader>
                                <DialogTitle>Dialog Title</DialogTitle>
                            </DialogHeader>
                            <DialogBody>
                                Voulez-vous bien vous déconnecter ?
                            </DialogBody>
                            <DialogFooter>
                                <DialogActionTrigger asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogActionTrigger>
                                <Button onClick={signOut}>Sign Out</Button>
                            </DialogFooter>
                            <DialogCloseTrigger />
                        </DialogContent>
                    </DialogRoot>
                </MenuContent>
            </MenuRoot >
        )
    }
    else {
        return (<Button asChild><Link to="/login">Login</Link></Button>)
    }
}
