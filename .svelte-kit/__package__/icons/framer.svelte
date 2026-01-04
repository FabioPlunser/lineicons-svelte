<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M18.6663 2V8.66667H11.9997L5.33301 2H18.6663ZM5.33301 8.66667H11.9997L18.6663 15.3333H11.9997V22L5.33301 15.3333V8.66667Z"}]];

/**
 * @component @name Framer
 * @description Lineicons SVG icon component for framer
 */
</script>

<Icon name="framer" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
