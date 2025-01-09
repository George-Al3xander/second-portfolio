import {
    ThemeSwitchContextProvider,
    useThemeSwitch,
} from "@/hooks/useThemeSwitch/useThemeSwitch";
import { act, renderHook } from "@testing-library/react";

// Mock localStorage
const mockLocalStorage = (() => {
    let store: Record<string, string> = {};

    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
            store[key] = value;
        },
        clear: () => {
            store = {};
        },
        removeItem: (key: string) => {
            delete store[key];
        },
    };
})();

Object.defineProperty(window, "localStorage", {
    value: mockLocalStorage,
});

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: query === "(prefers-color-scheme: dark)",
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

describe("useThemeSwitchManager", () => {
    afterEach(() => {
        // Clear localStorage after each test
        window.localStorage.clear();
        document.documentElement.classList.remove("dark");
    });

    it("should initialize theme from localStorage", () => {
        window.localStorage.setItem("theme", "light");

        const { result } = renderHook(() => useThemeSwitch(), {
            wrapper: ThemeSwitchContextProvider,
        });

        expect(result.current.theme).toBe("light");
    });

    it("should initialize theme based on system preference", () => {
        const { result } = renderHook(() => useThemeSwitch(), {
            wrapper: ThemeSwitchContextProvider,
        });

        expect(result.current.theme).toBe("dark");
    });

    it("should toggle theme from light to dark", () => {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");

        const { result } = renderHook(() => useThemeSwitch(), {
            wrapper: ThemeSwitchContextProvider,
        });

        act(() => {
            result.current.toggleTheme();
        });

        expect(result.current.theme).toBe("dark");
        expect(window.localStorage.getItem("theme")).toBe("dark");
        expect(document.documentElement).toHaveClass("dark");
    });

    it("should toggle theme from dark to light", () => {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");

        const { result } = renderHook(() => useThemeSwitch(), {
            wrapper: ThemeSwitchContextProvider,
        });

        act(() => {
            result.current.toggleTheme();
        });

        expect(result.current.theme).toBe("light");
        expect(window.localStorage.getItem("theme")).toBe("light");
        expect(document.documentElement).not.toHaveClass("dark");
    });
});
