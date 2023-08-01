import { defineConfig } from 'dumi';
import { homepage } from './package.json';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@aileen/hooks',
    github: homepage,
  },
  html2sketch: {},
});
