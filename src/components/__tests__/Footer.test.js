import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('Renders Footer', () => {
  render(<footer />);
  const footerElement = screen.getByText(/Made by Adam Kruschwitz/);
  expect(footerElement).toBeInTheDocument();
});

