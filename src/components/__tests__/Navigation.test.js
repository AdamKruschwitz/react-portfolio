import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';
import {within} from '@testing-library/dom'

test('Renders Navigation Bar', () => {
  render(<Navigation />);
  const navbarElement = screen.getByText(/Adam Kruschwitz/);
  expect(navbarElement).toBeInTheDocument();
});

test('Renders About Me link', () => {
    render(<Navigation />);
    const navbarElement = screen.getByText(/Adam Kruschwitz/);
    const aboutMeLink = screen.getByText(/About Me/);
    expect(aboutMeLink).toBeInTheDocument();
});

test('Renders Portfolio link', () => {
    render(<Navigation />);
    const navbarElement = screen.getByText(/Adam Kruschwitz/);
    const portfolioLink = screen.getByText(/Portfolio/);
    expect(portfolioLink).toBeInTheDocument();
});

test('Renders Contact link', () => {
    render(<Navigation />);
    const navbarElement = screen.getByText(/Adam Kruschwitz/);
    const contactLink = screen.getByText(/Contact/);
    expect(contactLink).toBeInTheDocument();
});

test('Renders Resume link', () => {
    render(<Navigation />);
    const navbarElement = screen.getByText(/Adam Kruschwitz/);
    const resumeLink = screen.getByText(/Resume/);
    expect(resumeLink).toBeInTheDocument();
});