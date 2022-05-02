import path from 'path';

export default {
  history: { type: 'hash' },
  base: '/',
  publicPath: process.env.DOCS_ENV === 'prod' ? 'https://schifred.github.io/react-leaflet2/' : '/',
  mode: 'site',
  logo: 'https://smebimage.fuliaoyi.com/Fger7VZclDUaXDJuqg42MlsUqV-w',
  favicon: 'https://smebimage.fuliaoyi.com/Fger7VZclDUaXDJuqg42MlsUqV-w',
  outputPath: 'docs',
  navs: [
    null,
    {
      title: 'Gitlab',
      path: 'https://github.com/Alfred-sg/react-leaflet2',
    },
  ],
  resolve: {
    includes: ['mds'],
  },
  alias: {
    'react-leaflet2': path.resolve(__dirname, 'src'),
  },
  styles: [
    `
    .__dumi-default-menu-inner ul li a span {
      font-size: 16px
    }
    `,
  ],
};
