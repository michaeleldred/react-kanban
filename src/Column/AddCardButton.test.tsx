import { render, screen, fireEvent } from '@testing-library/react';
import { AddCardButton } from './AddCardButton';

describe("Add Card Button", () => {
    it('renders a button but default', () => {
        render(<AddCardButton />);
        expect(screen.getAllByRole("button")).toHaveLength(1);
    });

    it('changes to a textbox when clicked', () => {
        render(<AddCardButton />);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getAllByRole("textbox")).toHaveLength(1);
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
  })