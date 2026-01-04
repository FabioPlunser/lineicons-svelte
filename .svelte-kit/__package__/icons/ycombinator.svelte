<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M3 3V21H21V3H3ZM12.6097 13.2194V16.9355H11.4194V13.2194L8.28387 7.38387H9.70645C9.70645 7.38387 12 12.0581 12.029 12.1161C12.0581 11.9129 14.4097 7.4129 14.4097 7.4129H15.7161L12.6097 13.2194Z"}]];

/**
 * @component @name Ycombinator
 * @description Lineicons SVG icon component for ycombinator
 */
</script>

<Icon name="ycombinator" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
