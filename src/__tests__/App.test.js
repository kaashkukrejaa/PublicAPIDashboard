import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders Public APIs heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Public APIs/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders search bar', () => {
    render(<App />);
    const searchBarElement = screen.getByPlaceholderText(/Search/i);
    expect(searchBarElement).toBeInTheDocument();
  });

  it('renders data table', () => {
    render(<App />);
    const dataTableElement = screen.getByRole('table');
    expect(dataTableElement).toBeInTheDocument();
  });

  it('renders pagination', () => {
    render(<App />);
    const paginationElement = screen.getByRole('navigation');
    expect(paginationElement).toBeInTheDocument();
  });
});
