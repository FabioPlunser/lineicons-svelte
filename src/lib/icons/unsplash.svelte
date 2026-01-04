<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M22 10.871V22H2V10.871H8.25806V16.4194H15.6774V10.871H22Z"}],["path",{"d":"M15.7416 2H8.25775V7.58065H15.6771V2H15.7416Z"}]];

/**
 * @component @name Unsplash
 * @description Lineicons SVG icon component for unsplash
 */
</script>

<Icon name="unsplash" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
