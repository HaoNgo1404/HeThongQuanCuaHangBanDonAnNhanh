import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders the header', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the footer', () => {
    render(<App />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders the main content', () => {
    render(<App />);
    const mainContent = screen.getByRole('main');
    expect(mainContent).toBeInTheDocument();
  });
});