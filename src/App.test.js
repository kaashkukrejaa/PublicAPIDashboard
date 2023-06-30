import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

const mockData = {
  data: {
    entries: [
      {
        API: 'Cat Facts',
        Description: 'Daily cat facts',
        Category: 'Animals'
      },
      {
        API: 'Dog Facts',
        Description: 'Daily dog facts',
        Category: 'Animals'
      }
    ]
  }
};

test('renders App component and fetches data', async () => {
  axios.get.mockResolvedValue(mockData);

  render(<App />);

  expect(screen.getByText('Public APIs')).toBeInTheDocument();

  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

  expect(screen.getByText('Cat Facts')).toBeInTheDocument();
  expect(screen.getByText('Dog Facts')).toBeInTheDocument();
});

test('filters data based on search term', async () => {
  axios.get.mockResolvedValue(mockData);

  render(<App />);

  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));

  fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: 'cat' } });

  expect(screen.getByText('Cat Facts')).toBeInTheDocument();
  expect(() => screen.getByText('Dog Facts')).toThrow();
});
