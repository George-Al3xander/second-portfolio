import { act, renderHook } from "@testing-library/react";
import {
    ActiveSectionProvider,
    useActiveSection,
} from "../useActiveSectionContext";

const setup = () =>
    renderHook(() => useActiveSection(), {
        wrapper: ActiveSectionProvider,
    });

//   act(() => {
//     result.current.toggleTheme()
//   })

describe("useActiveSectionContext", () => {
    it("should have the correct default values", () => {
        const { result } = setup();
        expect(result.current.activeSection).toBe("home");
        expect(result.current.lastClickTime).toBe(0);
    });

    it("should change the current section", () => {
        const { result } = setup();
        act(() => {
            result.current.setActiveSection("projects");
        });

        expect(result.current.activeSection).toBe("projects");
    });

    it("should change the last time clicked property", () => {
        const { result } = setup();
        act(() => {
            result.current.setLastClickTime(12);
        });

        expect(result.current.lastClickTime).toBe(12);
    });
});
