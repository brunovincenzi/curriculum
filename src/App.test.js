import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio, executes terminal commands, changes language, and copies contact details", async () => {
  const writeText = jest.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText },
  });

  render(<App />);

  expect(screen.getByRole("heading", { name: /bruno vincenzi/i })).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/portfolio/i), {
    target: { value: "profilo" },
  });
  fireEvent.click(screen.getByRole("button", { name: /esegui/i }));

  expect(screen.getByText(/firmware developer in edalab/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "English" }));

  expect(screen.getByRole("link", { name: "Experience" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /professional experience/i })).toBeInTheDocument();
  expect(document.documentElement.lang).toBe("en");

  fireEvent.click(screen.getByRole("link", { name: "Contact" }));
  expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("aria-current", "page");

  fireEvent.click(screen.getByRole("button", { name: /copy email/i }));

  expect(await screen.findByText("Copied")).toBeInTheDocument();
  expect(writeText).toHaveBeenCalledWith("vincenzibruno3107@gmail.com");
});
