<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 3.33301L22 20.6663H2L12 3.33301Z"}]];

/**
 * @component @name Vercel
 * @description Lineicons SVG icon component for vercel
 */
</script>

<Icon name="vercel" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
