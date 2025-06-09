import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Contact from '../components/Contact';

describe('Contact Us Page Test Cases', () => {
  it('Should load Contact component', () => {
    render(<Contact />);

    const heading = screen.getByRole('heading');

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it('Should load button inside Contact component', () => {
    render(<Contact />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('Should load input name inside Contact component', () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText('Name');

    expect(inputName).toBeInTheDocument();
  });

  it('Should load 2 input boxes inside Contact component', () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole('textbox');

    expect(inputBoxes.length).toBe(2);
  });
});
