<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M13.6435 21.6677C13.1325 22.3111 12.0966 21.9586 12.0843 21.137L11.9042 9.12064H19.9841C21.4475 9.12064 22.2637 10.811 21.3537 11.9571L13.6435 21.6677Z"}],["path",{"d":"M13.6435 21.6677C13.1325 22.3111 12.0966 21.9586 12.0843 21.137L11.9042 9.12064H19.9841C21.4475 9.12064 22.2637 10.811 21.3537 11.9571L13.6435 21.6677Z"}],["path",{"d":"M10.3574 2.33232C10.8684 1.68882 11.9044 2.04141 11.9167 2.86299L11.9956 14.8794H4.01686C2.55334 14.8794 1.73711 13.189 2.64717 12.0429L10.3574 2.33232Z"}]];

/**
 * @component @name Supabase
 * @description Lineicons SVG icon component for supabase
 */
</script>

<Icon name="supabase" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
