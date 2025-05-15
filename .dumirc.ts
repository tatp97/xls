import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  themeConfig: {
    logo: '/logo.webp',
    footer: 'Copyright © 2025 Kincy',
    socialLinks: {
      github: 'https://github.com/Jackson-Mseven/xls-components',
    },
  },
  resolve: {
    atomDirs: [
      { type: 'basic', dir: 'packages/basic/src' },
      { type: 'utils', dir: 'packages/utils/src' },
    ],
  },
  alias: {
    '@xls-components/basic': path.resolve(__dirname, './packages/basic/src'),
    '@xls-components/utils': path.resolve(__dirname, './packages/utils/src'),
  },
});
