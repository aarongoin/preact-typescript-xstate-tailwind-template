import { Component, h } from "preact";
import { render } from "@testing-library/preact";
import Header from "../components/header";

describe("Initial Test of the Header", () => {
  test("Header renders 3 nav items", () => {
    const { getByText } = render(<Header />);
    getByText("Preact App");
    getByText("Home");
    getByText("Me");
    getByText("John");
  });
});
