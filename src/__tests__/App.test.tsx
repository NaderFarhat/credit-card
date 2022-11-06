import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App functionality", () => {
  test("should render input element", async () => {
    render(<App />);
    const inputElement = screen.getByTestId("input-cc") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "1234123412341234" } });
    expect(inputElement.value).toBe("1234123412341234");
  });

  test("should not render input element", async () => {
    render(<App />);
    const inputElement = screen.getByTestId("input-cc") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "1234123412341234" } });
    expect(inputElement.value).not.toBe("12341234123412340");
  });

  test("should back card when focus on input", async () => {
    const { container } = render(<App />);
    const inputElement = screen.getByTestId("input-pin") as HTMLInputElement;
    fireEvent.focus(inputElement, {});

    expect(container.getElementsByClassName("flipped").length).toBe(1);
  });
});
