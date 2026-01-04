<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.67188 17.3799L6.74178 15.0091C8.38312 17.1368 10.1156 18.1398 12.0305 18.1398C13.9454 18.1398 15.6476 17.1672 17.1977 15.0395L20.3284 17.3495C18.0792 20.3891 15.2828 22 12.0305 22C8.80865 22 5.98191 20.3891 3.67188 17.3799Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.8482 7.13678L6.37704 11.848L3.85425 8.8997L11.8482 2L19.8117 8.8997L17.2585 11.8176L11.8482 7.13678Z"}]];

/**
 * @component @name Clickup
 * @description Lineicons SVG icon component for clickup
 */
</script>

<Icon name="clickup" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
