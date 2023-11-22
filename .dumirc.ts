import {defineConfig} from 'dumi';

const repo = 'selector-cursor';
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@hocgin/selector-cursor',
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
