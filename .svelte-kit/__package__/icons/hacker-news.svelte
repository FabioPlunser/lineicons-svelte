<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M3 3V21H21V3H3ZM12.6097 13.1032V17.1387H11.3323V13.0161L8.13871 6.83226H9.61935C11.7387 10.7516 11.5935 10.9258 12 11.8548C12.4935 10.7516 12.2032 10.8677 14.4677 6.83226H15.8613L12.6097 13.1032Z"}]];

/**
 * @component @name HackerNews
 * @description Lineicons SVG icon component for hacker-news
 */
</script>

<Icon name="hacker-news" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
