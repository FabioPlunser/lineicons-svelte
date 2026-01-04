import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Home2 from '../lib/icons/home-2.svelte';
import Heart from '../lib/icons/heart.svelte';
import Search1 from '../lib/icons/search-1.svelte';

describe('Icon Components', () => {
  describe('Home2', () => {
    it('renders without errors', () => {
      const { container } = render(Home2);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('has correct default attributes', () => {
      const { container } = render(Home2);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '24');
      expect(svg).toHaveAttribute('height', '24');
      expect(svg).toHaveAttribute('fill', 'currentColor');
    });

    it('accepts props', () => {
      const { container } = render(Home2, {
        props: {
          size: 48,
          color: 'blue'
        }
      });

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '48');
      expect(svg).toHaveAttribute('fill', 'blue');
    });
  });

  describe('Heart', () => {
    it('renders without errors', () => {
      const { container } = render(Heart);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('applies custom class', () => {
      const { container } = render(Heart, {
        props: {
          class: 'heart-icon'
        }
      });

      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('heart-icon');
    });
  });

  describe('Search1', () => {
    it('renders without errors', () => {
      const { container } = render(Search1);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('renders path elements', () => {
      const { container } = render(Search1);
      const paths = container.querySelectorAll('path');
      expect(paths.length).toBeGreaterThan(0);
    });
  });
});
