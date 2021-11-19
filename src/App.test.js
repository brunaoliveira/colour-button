import { render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial colour", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });

  expect(buttonElement).toBe;
  expect(buttonElement).toHaveStyle({backgroundColor: 'red'});
});

test("button turns blue when clicked", () => {});
