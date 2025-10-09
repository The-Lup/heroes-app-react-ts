import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { SearchControls } from './SearchControls';

if (typeof window.ResizeObserver === 'undefined') {
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  window.ResizeObserver = ResizeObserver;
}

const renderControlWithRouter = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <SearchControls />
    </MemoryRouter>
  );
};

describe('SearchControls', () => {
  test('Should render SearchControls with default values', () => {
    const { container } = renderControlWithRouter();

    expect(container).toMatchSnapshot();
  });

  test('Should set input value when search param name is set', () => {
    renderControlWithRouter(['/?name=flash']);

    const input = screen.getByPlaceholderText(
      'Search heroes, villains, powers, teams...'
    );

    expect(input.getAttribute('value')).toBe('flash');
  });

  test('Should change params when input changed and "Enter" key is pressed', () => {
    renderControlWithRouter(['/?name=flash']);

    const input = screen.getByPlaceholderText(
      'Search heroes, villains, powers, teams...'
    );

    expect(input.getAttribute('value')).toBe('flash');

    fireEvent.change(input, { target: { value: 'superman' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(input.getAttribute('value')).toBe('superman');
  });

  test('Should change param strength when slider is changed', () => {
    renderControlWithRouter([
      '/?name=Flash&active-accordiontab=advanced-filters',
    ]);

    const slider = screen.getByRole('slider');

    expect(slider.getAttribute('aria-valuenow')).toBe('0');

    fireEvent.keyDown(slider, { key: 'ArrowRight' });

    expect(slider.getAttribute('aria-valuenow')).toBe('1');
  });

  test('Should accordion to be open when active-accordiontab param is set', () => {
    renderControlWithRouter([
      '/?name=Flash&active-accordiontab=advanced-filters',
    ]);

    const accordion = screen.getByTestId('accordion');
    const accordionItem = accordion.querySelector('div');

    expect(accordionItem?.getAttribute('data-state')).toBe('open');
  });

  test('Should accordion to be closed when active-accordiontab param is not set', () => {
    renderControlWithRouter(['/?name=Flash']);

    const accordion = screen.getByTestId('accordion');
    const accordionItem = accordion.querySelector('div');

    expect(accordionItem?.getAttribute('data-state')).toBe('closed');
  });
});
