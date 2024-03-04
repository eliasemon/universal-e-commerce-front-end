import Home from "@/app/(homepage)/page";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Home component", () => {
	it('renders the "Hello World!" heading', () => {
		render(<Home />);

		// Improved assertion using querySelector and textContent,
		// addressing potential DOM structure changes
		const heading = screen.getByRole("heading", { name: /Hello World!/i });
		expect(heading).toBeTruthy();
	});
});
