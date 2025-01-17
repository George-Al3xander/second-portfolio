import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../contact-form";

const inputFields = ["email", "name", "message"] as const;
const errMessagesMin: { [K in (typeof inputFields)[number]]: string } = {
    email: "Invalid email",
    name: "Name must be at least 3 characters in length",
    message: "Message must be at least 50 characters in length",
};

const inputMaxLength: { [K in (typeof inputFields)[number]]: number } = {
    email: 255,
    name: 100,
    message: 300,
};

const errMessagesMax: { [K in (typeof inputFields)[number]]: string } = {
    email: "Invalid email",
    name: "Name can't be longer than 100 characters",
    message: "Message can't be longer than 300 characters",
};
const string2Char = "be";
const newText = "New Text";

describe("Render", () => {
    it("should render the form", () => {
        render(<ContactForm />);
        const form = screen.queryByTestId("contact-form");
        expect(form).toBeInTheDocument();
    });
    inputFields.forEach((field) => {
        it(`should render the '${field}' input`, () => {
            render(<ContactForm />);
            const input = screen.queryByPlaceholderText(field.toUpperCase());
            expect(input).toBeInTheDocument();
        });
    });
});

describe("Behavior", () => {
    describe("Default value is an empty string", () => {
        inputFields.forEach((field) => {
            it(`shouldn't find value of the '${field}' input`, () => {
                render(<ContactForm />);
                const input = screen.queryByPlaceholderText(
                    field.toUpperCase(),
                );
                expect(input).toHaveValue("");
            });
        });
    });
    describe("Input value change", () => {
        inputFields.forEach((field) => {
            it(`should change value of the '${field}' input`, async () => {
                render(<ContactForm />);
                const input = await screen.findByPlaceholderText(
                    field.toUpperCase(),
                );
                await userEvent.type(input, newText);
                expect(input).toHaveValue(newText);
            });
        });
    });
    describe("Error messages", () => {
        describe("Min", () => {
            inputFields.forEach((field) => {
                it(`should render error message for min required characters in the '${field}' input`, async () => {
                    render(<ContactForm />);
                    const input = await screen.findByPlaceholderText(
                        field.toUpperCase(),
                    );

                    await userEvent.type(input, string2Char);

                    const btn = await screen.findByRole("button");
                    await userEvent.click(btn);
                    const errMsg = await screen.findByText(
                        errMessagesMin[field],
                    );
                    expect(errMsg).toBeInTheDocument();
                });
            });
        });
        describe("Max", () => {
            inputFields.forEach((field) => {
                it(`should render error message for max required characters in the '${field}' input`, async () => {
                    render(<ContactForm />);
                    const input = await screen.findByPlaceholderText(
                        field.toUpperCase(),
                    );
                    await userEvent.type(
                        input,
                        "A".repeat(inputMaxLength[field] + 5),
                    );
                    const btn = await screen.findByRole("button");
                    await userEvent.click(btn);
                    const errMsg = await screen.findByText(
                        errMessagesMax[field],
                    );
                    expect(errMsg).toBeInTheDocument();
                });
            });
        });
    });
});
