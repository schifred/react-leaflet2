import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  entry: 'src/index.tsx',
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: 'babel',
  lessInBabelMode: true,
  runtimeHelpers: true,
};

export default options;
