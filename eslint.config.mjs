import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import {defineConfig} from 'eslint/config';
import {getPresets} from 'eslint-config-molindo';

export default defineConfig([
  ...(await getPresets('typescript', 'react', 'tailwind', 'vitest')),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {globals: {...globals.browser, ...globals.node}}
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-sort-props': 'off'
    }
  }
]);
