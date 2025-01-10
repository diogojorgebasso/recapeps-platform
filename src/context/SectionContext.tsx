/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, ReactNode } from "react";

interface SectionContextType {
    registerSection: (id: string, title: string, ref: React.RefObject<HTMLDivElement>) => void;
    sections: { id: string; title: string; ref: React.RefObject<HTMLDivElement> }[];
}

export const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
    const [sections, setSections] = useState<
        { id: string; title: string; ref: React.RefObject<HTMLDivElement> }[]
    >([]);

    const registerSection = (
        id: string,
        title: string,
        ref: React.RefObject<HTMLDivElement>
    ) => {
        setSections((prev) => {
            if (prev.some((section) => section.id === id)) {
                return prev;
            }
            return [...prev, { id, title, ref }];
        });
    };

    return (
        <SectionContext.Provider value={{ registerSection, sections }}>
            {children}
        </SectionContext.Provider>
    );
}

