import type { StorybookConfig } from '@storybook/react-webpack5';
const path = require("path");

const config: StorybookConfig = {
  webpackFinal: async (config, { configType }) => {
    (config as any).resolve.modules.push(path.resolve(__dirname, '../src'));

    // config.resolve.modules = [...(config.resolve.modules || []), path.resolve('./')]

    return config;
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};
export default config;
