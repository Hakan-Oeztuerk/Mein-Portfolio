import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Mail from "./Mail";

describe("Mail", () => {
  test("zeigt die Eingabefelder und den Button", () => {
    render(<Mail />);
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("man kann in die Felder tippen", async () => {
    render(<Mail />);
    const user = userEvent.setup();
    const emailInput = screen.getByPlaceholderText("email");
    const pwInput = screen.getByPlaceholderText("password");

    await user.type(emailInput, "test@example.com");
    await user.type(pwInput, "abcdef");

    expect(emailInput).toHaveValue("test@example.com");
    expect(pwInput).toHaveValue("abcdef");
  });

  test("zeigt alert bei falschen Daten", async () => {
    render(<Mail />);
    const user = userEvent.setup();

    window.alert = jest.fn();

    await user.type(screen.getByPlaceholderText("email"), "wrong@mail.com");
    await user.type(screen.getByPlaceholderText("password"), "wrongpw");
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(window.alert).toHaveBeenCalledWith("Login fehlgeschlagen!");
  });

  test("zeigt Erfolg bei richtigen Daten", async () => {
    render(<Mail />);
    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText("email"), "hakan.oeztuerk82@gmail.com");
    await user.type(screen.getByPlaceholderText("password"), "123456");
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText("User ist angemeldet ✔")).toBeInTheDocument();
  });
});
