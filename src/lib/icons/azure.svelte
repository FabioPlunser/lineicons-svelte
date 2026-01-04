<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M12.9032 4.03223L7 9.129L2 18.1935H6.54839L12.9032 4.03223ZM13.7419 5.25803L11.2258 12.3548L16 18.3871L6.64516 19.9677H22L13.7419 5.25803Z"}]];

/**
 * @component @name Azure
 * @description Lineicons SVG icon component for azure
 */
</script>

<Icon name="azure" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
