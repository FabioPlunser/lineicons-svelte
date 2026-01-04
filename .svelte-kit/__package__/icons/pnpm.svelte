<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M21 8.62565H15.3753V3.00098H21V8.62565Z"}],["path",{"d":"M14.8118 8.62565H9.1871V3.00098H14.8118V8.62565Z"}],["path",{"d":"M8.62467 8.62565H3V3.00098H8.62467V8.62565Z"}],["path",{"d":"M21 14.8129H15.3753V9.18819H21V14.8129Z"}],["path",{"d":"M14.8118 14.8129H9.1871V9.18819H14.8118V14.8129Z"}],["path",{"d":"M14.8118 21H9.1871V15.3753H14.8118V21Z"}],["path",{"d":"M21 21H15.3753V15.3753H21V21Z"}],["path",{"d":"M8.62467 21H3V15.3753H8.62467V21Z"}]];

/**
 * @component @name Pnpm
 * @description Lineicons SVG icon component for pnpm
 */
</script>

<Icon name="pnpm" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
