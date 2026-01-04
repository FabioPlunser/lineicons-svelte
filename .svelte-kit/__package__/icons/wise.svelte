<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M7.40117 8.20354L2 14.5441H11.6673L12.7632 11.5695H8.61448L11.1585 8.63407V8.55579L9.51468 5.73779H16.9119L11.1585 21.5108H15.0724L22 2.48926H4.1135L7.40117 8.20354Z"}]];

/**
 * @component @name Wise
 * @description Lineicons SVG icon component for wise
 */
</script>

<Icon name="wise" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
