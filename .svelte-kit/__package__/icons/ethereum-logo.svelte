<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M6.09277 12.1854L11.9983 2L17.9049 12.1854L11.9983 15.8144L6.09277 12.1854Z"}],["path",{"d":"M6.09277 13.3499L11.9983 22L17.9082 13.3499L11.9983 16.9767L6.09277 13.3499Z"}]];

/**
 * @component @name EthereumLogo
 * @description Lineicons SVG icon component for ethereum-logo
 */
</script>

<Icon name="ethereum-logo" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
