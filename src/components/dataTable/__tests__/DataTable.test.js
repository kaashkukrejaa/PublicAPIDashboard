import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DataTable from '../DataTable';

describe('DataTable', () => {
  const currentEntries = [
    {
      API: 'Test API',
      Description: 'Test Description',
      Auth: 'Test Auth',
      HTTPS: true,
      Cors: 'Test Cors',
      Link: 'https://test.com',
      Category: 'Test Category'
    }
  ];
  const handleSort = jest.fn();
  const sortColumn = 'API';
  let container;

  beforeEach(() => {
    ({ container } = render(
      <DataTable
        currentEntries={currentEntries}
        handleSort={handleSort}
        sortColumn={sortColumn}
      />
    ));
  });

  it('renders a table', () => {
    expect(container.querySelector('table')).toBeInTheDocument();
  });

  it('renders the correct number of rows', () => {
    expect(container.querySelectorAll('tr').length).toEqual(currentEntries.length + 1);
  });

  it('renders the correct data in each row', () => {
    const firstRow = container.querySelectorAll('tr')[1];
    expect(firstRow.querySelectorAll('td')[0].textContent).toEqual(currentEntries[0].API);
    expect(firstRow.querySelectorAll('td')[1].textContent).toEqual(currentEntries[0].Description);
    expect(firstRow.querySelectorAll('td')[2].textContent).toEqual(currentEntries[0].Auth);
    expect(firstRow.querySelectorAll('td')[3].textContent).toEqual(currentEntries[0].HTTPS.toString());
    expect(firstRow.querySelectorAll('td')[4].textContent).toEqual(currentEntries[0].Cors);
    expect(firstRow.querySelectorAll('td')[5].querySelector('a').getAttribute('href')).toEqual(currentEntries[0].Link);
    expect(firstRow.querySelectorAll('td')[6].textContent).toEqual(currentEntries[0].Category);
  });

  it('calls handleSort when a column header is clicked', () => {
    const firstHeader = container.querySelector('th');
    fireEvent.click(firstHeader);
    expect(handleSort).toHaveBeenCalledWith(sortColumn);
  });
});
