<script lang="ts">
  import defaultAttributes from "./defaultAttributes.js";
  import type { IconProps } from "./types.js";

  const {
    name,
    color = "currentColor",
    size = 24,
    iconNode = [],
    children,
    ...props
  }: IconProps = $props();
</script>

<svg
  {...defaultAttributes}
  {...props}
  width={size}
  height={size}
  fill={color}
  class={["lineicons-icon lineicons", name && `lineicons-${name}`, props.class]}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs} fill={color} />
  {/each}
  {@render children?.()}
</svg>
