import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@mocks',
        replacement: path.resolve(__dirname, 'src/mocks'),
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, 'src/services'),
      },
      {
        find: '@models',
        replacement: path.resolve(__dirname, 'src/models'),
      },
      {
        find: '@apis',
        replacement: path.resolve(__dirname, 'src/apis'),
      },
      {
        find: '@router',
        replacement: path.resolve(__dirname, 'src/router'),
      },
    ],
  },
});
