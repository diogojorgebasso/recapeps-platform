import { useState, useEffect } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress"; // Adjust the import path if necessary

const meta: Meta<typeof Progress> = {
    title: "Components/Progress",
    component: Progress,
    tags: ["autodocs"],
    argTypes: {
        value: { control: "number", description: "The current progress value (0-100)" },
    },
    args: {
        value: 50, // Default progress value
    },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {};

export const DynamicProgress: Story = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 10 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-64">
            <Progress value={progress} />
            <p className="mt-2 text-center text-sm text-gray-600">{progress}%</p>
        </div>
    );
};
