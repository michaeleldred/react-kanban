import { render, screen } from '@testing-library/react';
import { Card } from "./Card"

describe("Given a card", () => {
    it('Displays the title', () => {
        var title: string = "Test Title";
        render(<Card title={title} />);

        expect(screen.getAllByText(title)).toHaveLength(1);
    });
});