import { render, screen } from '@testing-library/react';
import { Column } from './Column'

describe('Display Row', () => {
  it('It shows the name', () => {
    var headerName = "Test Header Name";
    var { container } = render(<Column headerName={headerName}/>);
    expect(screen.getByRole('heading')).toHaveTextContent(headerName);
  });

  it('Displays a button to add a card', () => {
    var { container } = render(<Column headerName={"Test"} />);
    expect(container.getElementsByTagName('button')).toHaveLength(1);
  });

  /*it('Clicking the button adds a new card', () => {
    var { container } = render(<Column headerName={"Test"} />);
    expect(true).toBe(false)
    //expect(container.getElementsByTagName('button')).toHaveLength(1);
  });*/
})
