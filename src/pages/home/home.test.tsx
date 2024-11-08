import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Homepage from "./homepage";

describe("Given :Home page", () => {
  describe("When: Homepage loads", () => {
    it("Then : should display hompage heading, two buttons and an image", () => {
      const btnTexts = ["EXPLORE COURSES", "LEARN MORE"];
      render(<Homepage />);

      const heading = screen.getByRole("heading");
      expect(heading).toHaveTextContent(/skills/i);

      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(2);
      buttons.forEach((button, index) =>
        expect(button).toHaveTextContent(btnTexts[index])
      );

      const image = screen.getByRole("img");
      expect(image).toBeInTheDocument();
    });
  });
});
