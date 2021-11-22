import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });

  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
  expect(buttonElement).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  // button starts enabled
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  expect(buttonElement).toBeEnabled();

  // checkbox starts unchecked
  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).not.toBeChecked();
});

test("disable button when checkbox is clicked", () => {
  render(<App />);
  const checkboxElement = screen.getByRole("checkbox");
  fireEvent.click(checkboxElement);

  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  expect(buttonElement).not.toBeEnabled();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
});
