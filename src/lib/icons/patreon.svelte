<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M22 9.64475C22 13.6125 18.7742 16.8383 14.8065 16.8383C10.8387 16.8383 7.6129 13.6125 7.6129 9.64475C7.6129 5.67701 10.8387 2.4512 14.8065 2.4512C18.7742 2.41895 22 5.64475 22 9.64475ZM2 21.5802H5.54839V2.41895H2V21.5802Z"}]];

/**
 * @component @name Patreon
 * @description Lineicons SVG icon component for patreon
 */
</script>

<Icon name="patreon" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
