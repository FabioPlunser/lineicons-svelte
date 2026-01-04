<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M2 13.0317L7 16.2253L12 13.0317L7 9.87046L2 13.0317Z"}],["path",{"d":"M6.96743 17.3221L11.9997 20.5157L16.9997 17.3221L11.9997 14.1286L6.96743 17.3221Z"}],["path",{"d":"M12 13.0317L17 16.2253L22 13.0317L17 9.87046L12 13.0317Z"}],["path",{"d":"M7 3.4834L2 6.67694L7 9.87046L12 6.67694L7 3.4834Z"}],["path",{"d":"M22 6.67694L17 3.4834L12 6.67694L17 9.87046L22 6.67694Z"}]];

/**
 * @component @name Dropbox
 * @description Lineicons SVG icon component for dropbox
 */
</script>

<Icon name="dropbox" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
