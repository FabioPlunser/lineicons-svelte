<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M21.9956 12.0175C16.6323 12.3419 12.3399 16.6343 12.0156 21.9975H11.9756C11.6556 16.6343 7.36325 12.3419 2 12.0175V11.9775C7.36325 11.6576 11.6556 7.36521 11.98 2.00195H12.02C12.3444 7.36521 16.6367 11.6576 22 11.982V12.0175H21.9956Z"}]];

/**
 * @component @name Gemini
 * @description Lineicons SVG icon component for gemini
 */
</script>

<Icon name="gemini" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
