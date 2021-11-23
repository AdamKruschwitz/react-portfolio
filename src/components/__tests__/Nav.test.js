import { render, screen } from '@testing-library/react';
import Nav from '../../App';

test('Renders Navigation Bar', () => {
  render(<Nav />);
  const navbarElement = screen.getByText(/Adam Kruschwitz/);
  expect(navbarElement).toBeInTheDocument();
});

test('Renders About Me link', () => {
    render(<Nav />);
    const navbarElement = screen.getByText(/Adam Kruschwitz/);
    const aboutMeLink = within(navbarElement).getByText(/About Me/);
    expect(aboutMeLink).toBeInTheDocument();
});

test('Renders Portfolio link', () => {
    render(<Nav />);
    const navbarElement = screen.getByText(/Adam Kruschwitz/);
    const portfolioLink = within(navbarElement).getByText(/Portfolio/);
    expect(portfolioLink).toBeInTheDocument();
});

test('Renders Contact link', () => {
    render(<Nav />);
    const navbarElement = screen.getByText(/Adam Kruschwitz/);
    const contactLink = within(navbarElement).getByText(/Contact/);
    expect(contactLink).toBeInTheDocument();
});

test('Resume Contact link', () => {
    render(<Nav />);
    const navbarElement = screen.getByText(/Adam Kruschwitz/);
    const resumeLink = within(navbarElement).getByText(/Resume/);
    expect(resumeLink).toBeInTheDocument();
});