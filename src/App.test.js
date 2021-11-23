import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelCaseWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to Midnight Blue" });

  expect(buttonElement).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to Midnight Blue" });
  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveStyle({ backgroundColor: "Midnight Blue" });
  expect(buttonElement).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);
  // button starts enabled
  const buttonElement = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(buttonElement).toBeEnabled();

  // checkbox starts unchecked
  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).not.toBeChecked();
});

test("disable button when checkbox is clicked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkboxElement = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
});

test("turn button to gray when disabled", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  const checkboxElement = screen.getByRole("checkbox");

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

describe("Spaces before camel case capital letters", () => {
  test("Pass when no inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("Red")).toBe("Red");
  });
  test("Pass when one capital letter", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Pass when two or more inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});