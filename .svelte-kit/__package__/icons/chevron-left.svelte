<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M15.2335 5.21967C15.5263 5.51256 15.5263 5.98744 15.2335 6.28033L9.51379 12L15.2335 17.7197C15.5263 18.0126 15.5263 18.4874 15.2335 18.7803C14.9406 19.0732 14.4657 19.0732 14.1728 18.7803L7.92279 12.5303C7.6299 12.2374 7.6299 11.7626 7.92279 11.4697L14.1728 5.21967C14.4657 4.92678 14.9406 4.92678 15.2335 5.21967Z"}]];

/**
 * @component @name ChevronLeft
 * @description Lineicons SVG icon component for chevron-left
 */
</script>

<Icon name="chevron-left" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
