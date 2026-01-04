import type { SVGAttributes, SvelteHTMLElements } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type Attrs = SVGAttributes<SVGSVGElement>;

export type IconNode = [elementName: keyof SvelteHTMLElements, attrs: Record<string, string>][];

export interface IconProps extends Attrs {
  name?: string;
  color?: string;
  size?: number | string;
  class?: string;
  iconNode?: IconNode;
  children?: Snippet;
}

export type IconEvents = {
  [evt: string]: CustomEvent<any>;
};
