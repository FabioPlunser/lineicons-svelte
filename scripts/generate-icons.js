import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Convert kebab-case to PascalCase
function toPascalCase(str) {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Convert kebab-case to camelCase
function toCamelCase(str) {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

// Parse SVG string and extract path elements
function parseSvg(svgContent) {
  const iconNode = [];

  // Match all path elements
  const pathRegex = /<path\s+([^>]*)\/>/g;
  let match;

  while ((match = pathRegex.exec(svgContent)) !== null) {
    const attrsString = match[1];
    const attrs = {};

    // Parse attributes
    const attrRegex = /(\w+(?:-\w+)*)=["']([^"']*)["']/g;
    let attrMatch;

    while ((attrMatch = attrRegex.exec(attrsString)) !== null) {
      const [, key, value] = attrMatch;
      // Skip fill attribute as we'll set it dynamically
      if (key !== 'fill') {
        attrs[key] = value;
      }
    }

    iconNode.push(['path', attrs]);
  }

  // Also match rect, circle, polygon, etc.
  const elementsToMatch = ['rect', 'circle', 'polygon', 'polyline', 'line', 'ellipse'];

  for (const elem of elementsToMatch) {
    const elemRegex = new RegExp(`<${elem}\\s+([^>]*)\\/?>`, 'g');
    while ((match = elemRegex.exec(svgContent)) !== null) {
      const attrsString = match[1];
      const attrs = {};

      const attrRegex = /(\w+(?:-\w+)*)=["']([^"']*)["']/g;
      let attrMatch;

      while ((attrMatch = attrRegex.exec(attrsString)) !== null) {
        const [, key, value] = attrMatch;
        if (key !== 'fill') {
          attrs[key] = value;
        }
      }

      iconNode.push([elem, attrs]);
    }
  }

  return iconNode;
}

// Generate Svelte component content
function generateSvelteComponent(iconName, componentName, iconNode) {
  return `<script lang="ts">
import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = ${JSON.stringify(iconNode)};

/**
 * @component @name ${componentName}
 * @description Lineicons SVG icon component for ${iconName}
 */
</script>

<Icon name="${iconName}" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
`;
}

// Main generation function
function generateIcons() {
  const svgDir = path.join(__dirname, '../../assets/svgs/regular');
  const outputDir = path.join(__dirname, '../src/lib/icons');

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Get all SVG files
  const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'));

  const exports = [];
  const iconNames = [];

  console.log(`Found ${files.length} SVG files to process...`);

  for (const file of files) {
    const iconName = path.basename(file, '.svg');
    let componentName = toPascalCase(iconName);

    // Handle names that start with numbers
    if (/^\d/.test(componentName)) {
      componentName = 'Icon' + componentName;
    }

    const svgPath = path.join(svgDir, file);
    const svgContent = fs.readFileSync(svgPath, 'utf8');

    const iconNode = parseSvg(svgContent);

    if (iconNode.length === 0) {
      console.warn(`Warning: No path elements found in ${file}`);
      continue;
    }

    const componentContent = generateSvelteComponent(iconName, componentName, iconNode);
    const outputPath = path.join(outputDir, `${iconName}.svelte`);

    fs.writeFileSync(outputPath, componentContent, 'utf8');

    exports.push(`export { default as ${componentName} } from './${iconName}.svelte';`);
    iconNames.push({ iconName, componentName });
  }

  // Generate index.ts
  const indexContent = `// Auto-generated icon exports
// Total: ${exports.length} icons

${exports.join('\n')}
`;

  fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent, 'utf8');

  // Generate icons list for reference
  const iconsListContent = `// Auto-generated icons list
export const iconNames = ${JSON.stringify(iconNames, null, 2)} as const;

export type IconName = typeof iconNames[number]['iconName'];
export type ComponentName = typeof iconNames[number]['componentName'];
`;

  fs.writeFileSync(path.join(outputDir, 'iconNames.ts'), iconsListContent, 'utf8');

  console.log(`✅ Successfully generated ${exports.length} Svelte icon components!`);
  console.log(`📁 Output directory: ${outputDir}`);
}

// Run the generation
generateIcons();
