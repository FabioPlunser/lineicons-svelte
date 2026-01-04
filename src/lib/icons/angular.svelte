<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M10.3062 12.5484H13.7256L11.9837 8.45161L10.3062 12.5484ZM11.9837 2L2.72559 5.32258L4.1772 17.6452L11.9837 22L19.8546 17.6452L21.274 5.32258L11.9837 2ZM17.7901 17.2258H15.5966L14.4675 14.3226H9.53204L8.3385 17.2258H6.17721L11.9837 4.22581L17.7901 17.2258Z"}]];

/**
 * @component @name Angular
 * @description Lineicons SVG icon component for angular
 */
</script>

<Icon name="angular" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
