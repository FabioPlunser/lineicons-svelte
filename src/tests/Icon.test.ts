import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Icon from '../lib/Icon.svelte';

const testIconNode: [string, Record<string, string>][] = [
  ['path', { d: 'M12 2L2 7l10 5 10-5-10-5z' }],
  ['path', { d: 'M2 17l10 5 10-5' }]
];

describe('Icon Component', () => {
  it('renders an SVG element', () => {
    const { container } = render(Icon, {
      props: {
        iconNode: testIconNode
      }
    });

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders with default size of 24', () => {
    const { container } = render(Icon, {
      props: {
        iconNode: testIconNode
      }
    });

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });

  it('accepts custom size', () => {
    const { container } = render(Icon, {
      props: {
        iconNode: testIconNode,
        size: 32
      }
    });

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('accepts custom color', () => {
    const { container } = render(Icon, {
      props: {
        iconNode: testIconNode,
        color: 'red'
      }
    });

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('fill', 'red');
  });

  it('applies custom classes', () => {
    const { container } = render(Icon, {
      props: {
        iconNode: testIconNode,
        class: 'custom-icon'
      }
    });

    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('lineicons');
    expect(svg).toHaveClass('custom-icon');
  });

  it('renders all path elements from iconNode', () => {
    const { container } = render(Icon, {
      props: {
        iconNode: testIconNode
      }
    });

    const paths = container.querySelectorAll('path');
    expect(paths).toHaveLength(2);
  });

  it('has correct viewBox', () => {
    const { container } = render(Icon, {
      props: {
        iconNode: testIconNode
      }
    });

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('accepts string size', () => {
    const { container } = render(Icon, {
      props: {
        iconNode: testIconNode,
        size: '2rem'
      }
    });

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '2rem');
    expect(svg).toHaveAttribute('height', '2rem');
  });
});
