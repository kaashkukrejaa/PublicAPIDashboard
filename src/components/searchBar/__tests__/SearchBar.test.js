import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  let handleSearch;
  let getByPlaceholderText;

  beforeEach(() => {
    handleSearch = jest.fn();
    ({ getByPlaceholderText } = render(
      <SearchBar handleSearch={handleSearch} />
    ));
  });

  it('renders an input element', () => {
    expect(getByPlaceholderText('Search by API, Description or Category')).toBeInTheDocument();
  });

  it('calls handleSearch when the input value changes', () => {
    fireEvent.change(getByPlaceholderText('Search by API, Description or Category'), {
      target: { value: 'test' },
    });
    expect(handleSearch).toHaveBeenCalled();
  });
});
