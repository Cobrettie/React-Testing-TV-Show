// Main testing imports
// import React, render, component to be tested

import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Episodes from './Episodes';

// extra imports ??
// import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect';

test('renders empty array', () => {
  const { getAllByTestId, rerender } = render(<Episodes episodes={[]} />)

  expect(getAllByTestId('episodesContainer')).toHaveLength(1)
})  

// begin Lecture follow along stuff
test('Episodes renders correctly', () => {
  const { } = render(<Episodes episodes={[]} />)
})