import path from 'path';

export default {
  history: { type: 'hash' },
  base: '/',
  publicPath: '/',
  outputPath: 'site',
  mode: 'site',
  logo: 'https://smebimage.fuliaoyi.com/Fger7VZclDUaXDJuqg42MlsUqV-w',
  favicon: 'https://smebimage.fuliaoyi.com/Fger7VZclDUaXDJuqg42MlsUqV-w',
  outputPath: 'site',
  navs: [
    null,
    {
      title: 'Gitlab',
      path: 'https://github.com/Alfred-sg/react-leaflet2',
    },
  ],
  resolve: {
    includes: ['docs'],
  },
  alias: {
    'react-leaflet2': path.resolve(__dirname, 'src'),
  },
  styles: [
    `
    `,
  ],
};
