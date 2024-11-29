import { Meta, StoryObj } from "@storybook/react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "./dropdown-menu";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof DropdownMenu> = {
    title: "DropdownMenu",
    component: DropdownMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Primary: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => alert("Option 1 selected")}>
                    Option 1
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => alert("Option 2 selected")}>
                    Option 2
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => alert("Logout selected")}>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const WithCheckbox: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Menu with Checkboxes</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <input type="checkbox" id="checkbox1" />
                    <label htmlFor="checkbox1" className="ml-2">
                        Enable Notifications
                    </label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <input type="checkbox" id="checkbox2" />
                    <label htmlFor="checkbox2" className="ml-2">
                        Enable Dark Mode
                    </label>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => alert("Save selected")}>
                    Save Changes
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const WithSubmenu: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Menu with Submenu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <DropdownMenuItem>More Options</DropdownMenuItem>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Option A</DropdownMenuItem>
                        <DropdownMenuItem>Option B</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const WithRadioGroup: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Menu with Radio Group</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <input type="radio" name="radioGroup" id="option1" />
                    <label htmlFor="option1" className="ml-2">
                        Option 1
                    </label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <input type="radio" name="radioGroup" id="option2" />
                    <label htmlFor="option2" className="ml-2">
                        Option 2
                    </label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <input type="radio" name="radioGroup" id="option3" />
                    <label htmlFor="option3" className="ml-2">
                        Option 3
                    </label>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};
