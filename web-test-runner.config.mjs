import { fromRollup } from '@web/dev-server-rollup';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

const commonjsPlugin = fromRollup(commonjs);
const nodeResolvePlugin = fromRollup(nodeResolve);
const replacePlugin = fromRollup(replace);

export default {
  plugins: [
    replacePlugin({
      // Define `process.env.NODE_ENV` y otros valores según sea necesario
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env': '{}', // Simula un objeto `process.env` vacío
      preventAssignment: true,
    }),
    nodeResolvePlugin(),
    commonjsPlugin(),
    // Añade otros plugins que necesites
  ],
};
