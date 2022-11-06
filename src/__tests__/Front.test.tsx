import { render, screen, fireEvent } from "@testing-library/react";
import Front from "../Front/Front";

describe("App functionality", () => {
  test("should render name client", async () => {
    render(
      <Front number="1234123412341234" name="joseph" month="04" year="27" />
    );
    const textElement = screen.getByText("joseph") as HTMLInputElement;
    expect(textElement).toBeInTheDocument();
  });
});
