import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  const { getByText } = render(<App />);
  const text = getByText(/this is my CI\/CD react app/i);
  expect(text).toBeInTheDocument();
});
