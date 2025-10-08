import type { PropsWithChildren } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { CustomPagination } from './CustomPagination';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../button', () => ({
  Button: ({ children, ...props }: PropsWithChildren) => (
    <button {...props}>{children}</button>
  ),
}));

const rendeWithRouter = (
  component: React.ReactElement,
  initialEntries?: string[]
) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>
  );
};

describe('CustomPagination', () => {
  test('Should render component with default values', () => {
    rendeWithRouter(<CustomPagination totalPages={4} />);

    expect(screen.getByText('Previous')).toBeDefined();
    expect(screen.getByText('Next')).toBeDefined();
    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getByText('2')).toBeDefined();
    expect(screen.getByText('3')).toBeDefined();
    expect(screen.getByText('4')).toBeDefined();
  });

  test('Should disable previous button when page is 1', () => {
    rendeWithRouter(<CustomPagination totalPages={4} />);

    const prevButton = screen.getByText('Previous');

    expect(prevButton.getAttributeNames()).toContain('disabled');
  });

  test('Should disable next button when we are in the last page', () => {
    rendeWithRouter(<CustomPagination totalPages={4} />, ['/?page=4']);

    const nextButton = screen.getByText('Next');

    expect(nextButton.getAttributeNames()).toContain('disabled');
  });

  test('Should disable button 3 when we are in the page 3', () => {
    rendeWithRouter(<CustomPagination totalPages={10} />, ['/?page=3']);

    const button2 = screen.getByText('2');
    const button3 = screen.getByText('3');

    expect(button2.getAttribute('variant')).toBe('outline');
    expect(button3.getAttribute('variant')).toBe('default');
  });

  test('Should change page when click on number button', () => {
    rendeWithRouter(<CustomPagination totalPages={5} />, ['/?page=3']);

    const button2 = screen.getByText('2');
    const button3 = screen.getByText('3');

    expect(button2.getAttribute('variant')).toBe('outline');
    expect(button3.getAttribute('variant')).toBe('default');

    fireEvent.click(button2);

    expect(button2.getAttribute('variant')).toBe('default');
    expect(button3.getAttribute('variant')).toBe('outline');
  });
});
