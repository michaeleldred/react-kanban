import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App manages Columns', () => {
  it('Has one row on creation', () => {
    var { container } = render(<App />);
    expect(container.getElementsByClassName('column').length).toBe(1);
  });
})
