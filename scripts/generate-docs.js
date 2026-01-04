import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const iconsDir = path.join(rootDir, 'src/lib/icons');
const docsDir = path.join(rootDir, 'docs');

// Convert kebab-case to PascalCase
function toPascalCase(str) {
  return str
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Get all icon component names
function getIconNames() {
  const files = fs.readdirSync(iconsDir);
  return files
    .filter(file => file.endsWith('.svelte'))
    .map(file => file.replace('.svelte', ''))
    .sort();
}

// Group icons by first letter
function groupIconsByLetter(iconNames) {
  const groups = {};
  for (const name of iconNames) {
    const letter = name.charAt(0).toUpperCase();
    if (!groups[letter]) {
      groups[letter] = [];
    }
    groups[letter].push(name);
  }
  return groups;
}

// Generate icon list markdown
function generateIconListMarkdown(iconNames) {
  const groups = groupIconsByLetter(iconNames);
  let md = '';

  for (const letter of Object.keys(groups).sort()) {
    md += `### ${letter}\n\n`;
    md += '| Icon | Import |\n';
    md += '|------|--------|\n';
    for (const name of groups[letter]) {
      md += `| \`${name}\` | \`import { ${name} } from 'lineicons-svelte';\` |\n`;
    }
    md += '\n';
  }

  return md;
}

// Generate searchable icon grid (HTML version for docs site)
function generateIconGridHTML(iconNames) {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lineicons Svelte - Icon Browser</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      background: #f5f5f5;
      color: #333;
      padding: 2rem;
    }
    h1 {
      text-align: center;
      margin-bottom: 0.5rem;
      color: #1a1a2e;
    }
    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 2rem;
    }
    .count {
      text-align: center;
      color: #888;
      margin-bottom: 1rem;
    }
    .search-container {
      max-width: 500px;
      margin: 0 auto 2rem;
    }
    #search {
      width: 100%;
      padding: 1rem 1.5rem;
      font-size: 1.1rem;
      border: 2px solid #ddd;
      border-radius: 50px;
      outline: none;
      transition: border-color 0.2s;
    }
    #search:focus {
      border-color: #5c6bc0;
    }
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .icon-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem 1rem;
      text-align: center;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      border: 2px solid transparent;
    }
    .icon-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.1);
      border-color: #5c6bc0;
    }
    .icon-card.copied {
      background: #e8f5e9;
      border-color: #4caf50;
    }
    .icon-placeholder {
      width: 40px;
      height: 40px;
      margin: 0 auto 0.75rem;
      background: #f0f0f0;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }
    .icon-name {
      font-size: 0.8rem;
      color: #555;
      word-break: break-all;
    }
    .toast {
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      background: #333;
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
    }
    .toast.show {
      opacity: 1;
    }
    .letter-nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    .letter-nav a {
      display: inline-block;
      padding: 0.5rem 0.75rem;
      background: white;
      color: #5c6bc0;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.9rem;
    }
    .letter-nav a:hover {
      background: #5c6bc0;
      color: white;
    }
    .letter-section {
      margin-bottom: 2rem;
    }
    .letter-title {
      font-size: 1.5rem;
      color: #5c6bc0;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #eee;
    }
    .hidden {
      display: none !important;
    }
  </style>
</head>
<body>
  <h1>Lineicons Svelte</h1>
  <p class="subtitle">Click any icon to copy its import statement</p>
  <p class="count">${iconNames.length} icons available</p>
  
  <div class="search-container">
    <input type="text" id="search" placeholder="Search icons..." autocomplete="off">
  </div>

  <div class="letter-nav" id="letterNav">
`;

  const groups = groupIconsByLetter(iconNames);
  for (const letter of Object.keys(groups).sort()) {
    html += `    <a href="#section-${letter}">${letter}</a>\n`;
  }

  html += `  </div>

  <div id="iconContainer">
`;

  for (const letter of Object.keys(groups).sort()) {
    html += `    <div class="letter-section" id="section-${letter}">
      <h2 class="letter-title">${letter}</h2>
      <div class="icon-grid">
`;
    for (const name of groups[letter]) {
      html += `        <div class="icon-card" data-name="${name.toLowerCase()}" onclick="copyImport('${name}')">
          <div class="icon-placeholder">📦</div>
          <div class="icon-name">${name}</div>
        </div>
`;
    }
    html += `      </div>
    </div>
`;
  }

  html += `  </div>

  <div class="toast" id="toast">Copied!</div>

  <script>
    const searchInput = document.getElementById('search');
    const iconContainer = document.getElementById('iconContainer');
    const letterNav = document.getElementById('letterNav');
    const toast = document.getElementById('toast');
    
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase();
      const cards = document.querySelectorAll('.icon-card');
      const sections = document.querySelectorAll('.letter-section');
      
      if (query === '') {
        cards.forEach(card => card.classList.remove('hidden'));
        sections.forEach(section => section.classList.remove('hidden'));
        letterNav.classList.remove('hidden');
        return;
      }
      
      letterNav.classList.add('hidden');
      
      cards.forEach(card => {
        const name = card.dataset.name;
        if (name.includes(query)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
      
      // Hide empty sections
      sections.forEach(section => {
        const visibleCards = section.querySelectorAll('.icon-card:not(.hidden)');
        if (visibleCards.length === 0) {
          section.classList.add('hidden');
        } else {
          section.classList.remove('hidden');
        }
      });
    });
    
    function copyImport(iconName) {
      const importStatement = \`import { \${iconName} } from 'lineicons-svelte';\`;
      navigator.clipboard.writeText(importStatement).then(() => {
        toast.textContent = \`Copied: \${iconName}\`;
        toast.classList.add('show');
        
        // Highlight card
        event.currentTarget.classList.add('copied');
        
        setTimeout(() => {
          toast.classList.remove('show');
          event.currentTarget.classList.remove('copied');
        }, 2000);
      });
    }
  </script>
</body>
</html>`;

  return html;
}

// Generate JSON catalog for programmatic access
function generateCatalogJSON(iconNames) {
  const catalog = {
    name: 'lineicons-svelte',
    version: JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf-8')).version,
    totalIcons: iconNames.length,
    generatedAt: new Date().toISOString(),
    icons: iconNames.map(name => ({
      name,
      import: `import { ${name} } from 'lineicons-svelte';`,
      component: `<${name} />`
    }))
  };
  return JSON.stringify(catalog, null, 2);
}

// Generate main ICONS.md documentation
function generateIconsMarkdown(iconNames) {
  let md = `# Lineicons Svelte - Icon Reference

This document contains a complete list of all ${iconNames.length} icons available in the \`lineicons-svelte\` package.

## Quick Start

\`\`\`svelte
<script>
  import { Home2, Heart, Search1 } from 'lineicons-svelte';
</script>

<Home2 size={24} color="currentColor" />
<Heart size={32} color="red" />
<Search1 class="my-icon" />
\`\`\`

## Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`size\` | \`number \\| string\` | \`24\` | Width and height of the icon |
| \`color\` | \`string\` | \`'currentColor'\` | Fill color of the icon |
| \`class\` | \`string\` | \`''\` | Additional CSS classes |
| \`...rest\` | \`object\` | \`{}\` | Any other SVG attributes |

## Icon List

`;

  md += generateIconListMarkdown(iconNames);

  md += `
---

*Generated automatically. Total icons: ${iconNames.length}*
`;

  return md;
}

// Generate TypeScript icon names type for better autocomplete
function generateIconNamesType(iconNames) {
  let ts = `// Auto-generated icon name types for lineicons-svelte

/**
 * All available icon names in lineicons-svelte
 */
export type IconName =
`;

  for (let i = 0; i < iconNames.length; i++) {
    const name = iconNames[i];
    ts += `  | '${name}'`;
    if (i < iconNames.length - 1) {
      ts += '\n';
    } else {
      ts += ';\n';
    }
  }

  ts += `
/**
 * Array of all icon names
 */
export const iconNames: IconName[] = [
`;

  for (let i = 0; i < iconNames.length; i++) {
    ts += `  '${iconNames[i]}'`;
    if (i < iconNames.length - 1) {
      ts += ',\n';
    } else {
      ts += '\n';
    }
  }

  ts += `];

/**
 * Total number of icons available
 */
export const iconCount = ${iconNames.length};
`;

  return ts;
}

// Main generation function
async function generateDocs() {
  console.log('📚 Generating documentation...\n');

  // Ensure docs directory exists
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  const iconNames = getIconNames();
  console.log(`Found ${iconNames.length} icons\n`);

  // Generate ICONS.md
  const iconsMd = generateIconsMarkdown(iconNames);
  fs.writeFileSync(path.join(docsDir, 'ICONS.md'), iconsMd);
  console.log('✅ Generated docs/ICONS.md');

  // Generate interactive HTML browser
  const iconsHtml = generateIconGridHTML(iconNames);
  fs.writeFileSync(path.join(docsDir, 'icons.html'), iconsHtml);
  console.log('✅ Generated docs/icons.html (interactive browser)');

  // Generate JSON catalog
  const catalogJson = generateCatalogJSON(iconNames);
  fs.writeFileSync(path.join(docsDir, 'icons.json'), catalogJson);
  console.log('✅ Generated docs/icons.json (icon catalog)');

  // Generate TypeScript icon names
  const iconNamesTs = generateIconNamesType(iconNames);
  fs.writeFileSync(path.join(rootDir, 'src/lib/iconNames.ts'), iconNamesTs);
  console.log('✅ Generated src/lib/iconNames.ts (type definitions)');

  // Also copy ICONS.md to root for easy access
  fs.copyFileSync(path.join(docsDir, 'ICONS.md'), path.join(rootDir, 'ICONS.md'));
  console.log('✅ Copied ICONS.md to root');

  console.log('\n📚 Documentation generation complete!');
  console.log(`\n📊 Summary:`);
  console.log(`   - Total icons: ${iconNames.length}`);
  console.log(`   - Files generated:`);
  console.log(`     • docs/ICONS.md - Markdown reference`);
  console.log(`     • docs/icons.html - Interactive browser`);
  console.log(`     • docs/icons.json - JSON catalog`);
  console.log(`     • src/lib/iconNames.ts - TypeScript types`);
  console.log(`     • ICONS.md - Root reference copy`);
}

generateDocs().catch(console.error);
