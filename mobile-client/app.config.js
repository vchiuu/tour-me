import 'dotenv/config';

export default {
  name: 'tour-me',
  slug: 'tour-me',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/icon.png',
  splash: {
    image: './src/assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#D9F1FD',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './src/assets/favicon.png',
  },
  packagerOpts: {
    config: 'metro.config.js',
    sourceExts: ['expo.ts', 'expo.tsx', 'expo.js', 'expo.jsx', 'ts', 'tsx', 'js', 'jsx', 'json', 'wasm', 'svg'],
  },
  entryPoint: './src/entry.js',
  extra: {
    apolloServerUri: process.env.APOLLO_SERVER_URI,
  },
};
