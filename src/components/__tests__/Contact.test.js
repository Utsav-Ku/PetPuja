import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom';

describe("Conatct Us Page Test Case", () => {
    test("Should load contact us component",  () => {
        render(<Contact />);
    
        //Querying
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside Contact Component",  () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    test("Should load input email inside Contact Component",  () => {
        render(<Contact />);
    
        const inputEmail = screen.getAllByPlaceholderText("Enter your email");
    
        expect(inputEmail).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes inside Contact Component",  () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2);
    });
})