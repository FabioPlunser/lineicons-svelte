<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M4.42595 11.0004H2.2778L2.1667 11.2227L4.53704 12.9634C4.98151 12.7041 5.48149 12.4449 6 12.1856M6.35187 14.2597L8.44446 15.7782H10.5926L10.6852 15.5745L7.57409 13.2967C7.16669 13.6115 6.74078 13.9263 6.35187 14.2597Z"}],["path",{"d":"M4.11113 15.7782H2.1667L2 15.5189C3.31485 14.2412 9.2037 8.79673 22 8.22266C22 8.22266 11.2778 8.593 4.11113 15.7782Z"}]];

/**
 * @component @name Spacex
 * @description Lineicons SVG icon component for spacex
 */
</script>

<Icon name="spacex" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
