import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), EnvironmentPlugin('all')],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/constants'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@models',
        replacement: path.resolve(__dirname, 'src/models'),
      },
      {
        find: '@themes',
        replacement: path.resolve(__dirname, 'src/themes'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, 'src/services'),
      },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/constants'),
      },
      {
        find: '@apis',
        replacement: path.resolve(__dirname, 'src/apis'),
      },
      {
        find: '@layout',
        replacement: path.resolve(__dirname, 'src/layout'),
      },
      {
        find: '@mockData',
        replacement: path.resolve(__dirname, 'src/mockData'),
      },
      {
        find: '@stores',
        replacement: path.resolve(__dirname, 'src/stores'),
      },
      {
        find: '@helpers',
        replacement: path.resolve(__dirname, 'src/helpers'),
      },
    ],
  },
});
