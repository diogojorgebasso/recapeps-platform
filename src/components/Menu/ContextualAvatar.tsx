import { Link } from "react-router";

import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function ContextualAvatar() {

    const { photoURL, currentUser, signOut } = useAuth();

    if (currentUser) {

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage
                            src={photoURL}
                            alt="User Avatar"
                        />
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <Link to="/profile">
                            <DropdownMenuItem>
                                <User />
                                <span>Profil</span>
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        <Link to="checkout">
                            <DropdownMenuItem>
                                <CreditCard />
                                <span>Passez à Recap'eps Pro</span>
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        <Link to="profile">
                            <DropdownMenuItem>
                                <Settings />
                                <span>Settings</span>
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        <Dialog>
                            <DialogTrigger>
                                <DropdownMenuItem>
                                    <Keyboard />
                                    <span>Keyboard shortcuts</span>
                                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                                    <DialogDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <Link to="team">
                            <DropdownMenuItem>
                                <Users />
                                <span>Team</span>
                            </DropdownMenuItem>
                        </Link>
                        <Link to="team">
                            <DropdownMenuItem>
                                <Plus />
                                <span>New Team</span>
                                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>

                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LifeBuoy />
                        <span>Support</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                        <Cloud />
                        <span>API</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut}>
                        <LogOut />
                        <span>Log out</span>
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
    else {
        return (<Link to="/login"><Button>Login</Button></Link>)
    }
}
