import { render, screen, fireEvent } from '@testing-library/react';
import { AddCardButton } from './AddCardButton';

describe("Add Card Button", () => {
    it('renders a button but default', () => {
        render(<AddCardButton />);
        expect(screen.getAllByRole("button")).toHaveLength(1);
    });

    it('focuses the textbox when clicked', () => {
        render(<AddCardButton />);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByRole("textbox")).toHaveFocus()
    });

    it('resets when enter is pressed', () => {
        render(<AddCardButton />);

        fireEvent.click(screen.getByRole('button'));
        fireEvent.keyDown(screen.getByRole("textbox"), {
            key: "Enter",
            shiftKey: false
        });

        expect(screen.queryAllByRole("textbox")).toHaveLength(0);
        expect(screen.getAllByRole("button")).toHaveLength(1);
    });

    it('returns the title of the card when submitted', () => {
        let submitFunction = jest.fn();
        var expectedCardName: string = "A new test card";
        render(<AddCardButton onSubmit={submitFunction} />);
        fireEvent.click(screen.getByRole('button'));

        expect(screen.getAllByRole("textbox")).toHaveLength(1);

        screen.getByRole("textbox").setAttribute("value", expectedCardName);
        
        fireEvent.keyDown(screen.getByRole("textbox"), {
            key: "Enter",
            shiftKey: false
        });

        expect(submitFunction).toHaveBeenCalledWith({
            "title": expectedCardName
        })
    })
  })