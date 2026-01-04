<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M14.5806 3.62891H22V20.2741L14.5806 3.62891ZM9.41935 3.62891H2V20.2741L9.41935 3.62891ZM12 9.85471L16.6452 20.3708H13.5161L12.1613 17.016H8.74194L12 9.85471Z"}]];

/**
 * @component @name Adobe
 * @description Lineicons SVG icon component for adobe
 */
</script>

<Icon name="adobe" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
