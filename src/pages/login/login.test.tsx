import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import LoginPage from "./loginpage";
import "@testing-library/jest-dom";
import { useAuth } from "../../utils/useAuth";
import LoginApi from "../../hooks/loginapi";
import userEvent from "@testing-library/user-event";

vi.mock("../../utils/useAuth", () => ({
  useAuth: vi.fn(() => ({
    setToken: vi.fn(),
  })),
}));

vi.mock("../../hooks/loginapi", () => ({
  default: vi.fn(),
}));

const mockedUseNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

describe("Login page", () => {
  it("should display login heading, and forms", () => {
    render(<LoginPage />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(/login/i);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/login/i);
  });

  it("should call LoginApi and navigate on successful login", async () => {
    const setToken = vi.fn();
    vi.mocked(useAuth).mockReturnValue({ setToken });
    vi.mocked(LoginApi).mockResolvedValueOnce(true);

    render(<LoginPage />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByRole("button");

    const user = userEvent.setup();
    await user.type(emailInput, "user@123.com");
    await user.type(passwordInput, "password");
    await user.click(submitBtn);

    expect(emailInput).toHaveValue("user@123.com");
    expect(passwordInput).toHaveValue("password");

    await waitFor(() => {
      expect(LoginApi).toHaveBeenCalledWith(
        {
          email: "user@123.com",
          password: "password",
        },
        setToken
      );
      expect(mockedUseNavigate).toHaveBeenCalledWith("/blog");
    });
  });

  it("should display validation errors", () => {});
});
