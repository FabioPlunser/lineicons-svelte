# Lineicons Svelte

Lineicons SVG icon components for Svelte 5. A collection of 550+ beautiful line icons, optimized for Svelte applications with full TypeScript support.

## Installation

```bash
npm install lineicons-svelte
# or
pnpm add lineicons-svelte
# or
yarn add lineicons-svelte
```

## Requirements

- Svelte 5.0.0 or higher

## Usage

### Basic Usage

Import icons directly by their PascalCase name:

```svelte
<script>
  import { Home2, Heart, Search1 } from 'lineicons-svelte';
</script>

<Home2 />
<Heart size={32} />
<Search1 color="blue" />
```

### Direct Icon Imports (Better Tree-shaking)

For optimal bundle size, import icons directly from the icons folder:

```svelte
<script>
  import Home2 from 'lineicons-svelte/icons/home-2.svelte';
  import Heart from 'lineicons-svelte/icons/heart.svelte';
</script>

<Home2 />
<Heart />
```

### Using the Generic Icon Component

For dynamic icon rendering, use the base `Icon` component:

```svelte
<script>
  import { Icon } from 'lineicons-svelte';
  
  // Define your icon node
  const customIconNode = [
    ['path', { d: 'M12 2L2 7l10 5 10-5-10-5z' }],
    ['path', { d: 'M2 17l10 5 10-5' }]
  ];
</script>

<Icon iconNode={customIconNode} size={24} color="currentColor" />
```

## Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Width and height of the icon |
| `color` | `string` | `'currentColor'` | Fill color of the icon |
| `class` | `string` | `''` | Additional CSS classes |

Plus any valid SVG attributes.

## Examples

### Sizing

```svelte
<Home2 size={16} />  <!-- Small -->
<Home2 size={24} />  <!-- Default -->
<Home2 size={32} />  <!-- Large -->
<Home2 size="2rem" /> <!-- CSS units -->
```

### Colors

```svelte
<Heart color="red" />
<Heart color="#ff6b6b" />
<Heart color="currentColor" />  <!-- Inherits from parent -->
```

### With Tailwind CSS

```svelte
<Home2 class="w-6 h-6 text-blue-500" />
```

### Dynamic Icons

```svelte
<script>
  import * as icons from 'lineicons-svelte';
  
  let iconName = 'Home2';
  $: IconComponent = icons[iconName];
</script>

<svelte:component this={IconComponent} size={24} />
```

## Available Icons

This package includes 550+ icons. See the full list at [lineicons.com](https://lineicons.com).

## TypeScript Support

Full TypeScript support is included out of the box:

```typescript
import type { IconProps } from 'lineicons-svelte';

const iconProps: IconProps = {
  size: 24,
  color: 'blue',
  class: 'my-icon'
};
```

## License

MIT License - see [LICENSE](LICENSE) for details.

Icons by [Lineicons](https://lineicons.com).
