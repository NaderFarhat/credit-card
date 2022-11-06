import { render, screen, fireEvent } from "@testing-library/react";
import Back from "../Back/Back";

describe("App functionality", () => {
  test("should render name CVV", async () => {
    render(<Back pin={"357"} />);
    const textElement = screen.getByText("CVV") as HTMLInputElement;
    expect(textElement).toBeInTheDocument();
  });
});
