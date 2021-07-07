import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// import Display from './components/diplay';
import '@testing-library/jest-dom/extend-expect';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('renders for atBat', () => {
  const { getByText } = render(<App />);
  getByText('At Bat');

})

test('renders for atBat', () => {
  const { findAllByText } = render(<App />);
  findAllByText(/balls/i);

})