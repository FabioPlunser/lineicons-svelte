<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M17.5555 7.41309L22 11.8381L17.5555 16.263L13.1111 11.8381L17.5555 7.41309Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6.44446 7.41309L15.6584 16.5866H6.76946L2 11.8381L6.44446 7.41309Z"}]];

/**
 * @component @name Alpinejs
 * @description Lineicons SVG icon component for alpinejs
 */
</script>

<Icon name="alpinejs" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
