import { fireEvent, render, screen } from '@testing-library/react';
import { Column } from './Column'

describe('Display Row', () => {
  it('shows the name', () => {
    var headerName = "Test Header Name";
    var { container } = render(<Column headerName={headerName}/>);
    expect(screen.getByRole('heading')).toHaveTextContent(headerName);
  });

  it('has a button to add a card', () => {
    var { container } = render(<Column headerName={"Test"} />);
    expect(container.getElementsByTagName('button')).toHaveLength(1);
  });

  it('creates a new card when the addcard button submits', () => {
    render(<Column headerName="Test" />)
    fireEvent.click(screen.getByRole("button"))
    screen.getByRole("textbox").setAttribute("value", "Test Card");
        
    fireEvent.keyDown(screen.getByRole("textbox"), {
        key: "Enter",
        shiftKey: false
    });

    expect(screen.getAllByRole("card")).toHaveLength(1);
  })
});
