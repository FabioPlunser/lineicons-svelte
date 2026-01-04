<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M19.9525 11.2318L14.6518 16.6153L19.9525 22H13.893L11.6215 19.6929L8.59115 16.6153L13.893 11.2318H19.9525ZM13.893 2L4.04688 12L7.07719 15.0777L19.9525 2H13.893Z"}]];

/**
 * @component @name Flutter
 * @description Lineicons SVG icon component for flutter
 */
</script>

<Icon name="flutter" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
