import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '../Pagination';

describe('Pagination', () => {
  const entriesPerPage = 10;
  const totalEntries = 100;
  const paginate = jest.fn();

  beforeEach(() => {
    render(
      <Pagination
        entriesPerPage={entriesPerPage}
        totalEntries={totalEntries}
        paginate={paginate}
      />
    );
  });

  it('renders page numbers', () => {
    const pageNumbers = screen.getAllByRole('listitem');
    expect(pageNumbers).toHaveLength(10);
  });

  it('calls the paginate function when a page number is clicked', () => {
    const pageNumber = screen.getByText('1');
    userEvent.click(pageNumber);
    expect(paginate).toHaveBeenCalledWith(1);
  });

  it('renders the correct number of page numbers', () => {
    const pageNumbers = screen.getAllByRole('listitem');
    expect(pageNumbers).toHaveLength(Math.ceil(totalEntries / entriesPerPage));
  });
});
