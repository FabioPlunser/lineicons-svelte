<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M22 5.76465L15.6105 18.2358H9.62125L12.2848 13.0626H12.1617C9.97537 15.9263 6.68052 17.8047 2 18.2358V13.1396C2 13.1396 5.00231 12.9702 6.75751 11.1072H2V5.76465H7.34257V10.168H7.46574L9.65204 5.76465H13.7013V10.1372H13.8245L16.0724 5.76465H22Z"}]];

/**
 * @component @name Webflow
 * @description Lineicons SVG icon component for webflow
 */
</script>

<Icon name="webflow" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
