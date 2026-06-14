"use client";
import { useTheme } from "next-themes";

export function ToggleTheme() {
    const { theme, setTheme } = useTheme();
    return (
        <button
            className="bg-black dark:bg-white"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            Toggle
        </button>
    );
}
