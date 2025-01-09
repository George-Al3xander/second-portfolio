import {
    ThemeSwitchContextProvider,
    useThemeSwitch,
} from "@/hooks/useThemeSwitch/useThemeSwitch";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitch from "../theme-switch";

const icons = ["sun", "moon"] as const;
const themes = {
    sun: "light",
    moon: "dark",
} as const;

jest.mock("@/hooks/useThemeSwitch/useThemeSwitch.tsx", () => ({
    ...jest.requireActual("@/hooks/useThemeSwitch/useThemeSwitch.tsx"),
    useThemeSwitch: jest.fn(),
}));

const setup = () =>
    render(
        <ThemeSwitchContextProvider>
            <ThemeSwitch />
        </ThemeSwitchContextProvider>,
    );

const mockWindowMatchMedia = () =>
    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
    });

describe("Render", () => {
    mockWindowMatchMedia();
    beforeEach(() => {
        (useThemeSwitch as jest.Mock).mockReturnValue({
            theme: "dark",
            toggleTheme: jest.fn(),
        });
    });
    it("should render the switch button", () => {
        setup();
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
    });
    it("should render the switch  icon", () => {
        setup();
        const moonIcon = screen.getByTestId("switch-moon-icon");
        expect(moonIcon).toBeInTheDocument();
    });
});

describe("Behavior", () => {
    mockWindowMatchMedia();

    const mockToggleTheme = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    icons.forEach((icon) => {
        const currTheme = themes[icon];
        it(`should render the ${icon} icon whe the theme is ${currTheme}`, () => {
            (useThemeSwitch as jest.Mock).mockReturnValue({
                theme: currTheme,
                toggleTheme: mockToggleTheme,
            });
            setup();
            expect(
                screen.getByTestId(`switch-${icon}-icon`),
            ).toBeInTheDocument();
        });
    });
    it("should toggle the theme when the button is clicked", async () => {
        (useThemeSwitch as jest.Mock).mockReturnValue({
            theme: "light",
            toggleTheme: mockToggleTheme,
        });
        setup();
        const btn = screen.getByRole("button");
        await userEvent.click(btn);
        expect(mockToggleTheme).toHaveBeenCalledTimes(1);
    });
});
