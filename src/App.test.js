import React from 'react';
import { render, wait } from '@testing-library/react';
import App from './App';
import { fetchShow } from './api/fetchShow';

test('App Component renders without crashing', () => {
  render(<App />)
})

test('fetching data text appears when no data is loaded yet', () => {
  const { getByText } = render(
    <App />
  )
  getByText(/fetching data/i)
}) 