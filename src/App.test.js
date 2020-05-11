import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('fetching data text appears when no data is loaded yet', () => {
  const mockFetchShow = jest.fn();
  const { getByText } = render(
    <App fetchShow={mockFetchShow} />
  )

  getByText(/fetching data/i)
})