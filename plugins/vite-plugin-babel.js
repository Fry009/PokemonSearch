// plugins/vite-plugin-babel.js
import { transform } from '@babel/core';

export function viteBabelPlugin() {
  return {
    name: 'vite-babel-plugin', // Este es el nombre del plugin.
    transform(code, id) {
      // Este método transforma el código de entrada utilizando Babel.
      
      // Filtra los archivos que deseas que Babel procese, por ejemplo,
      // solo procesar archivos .js y .jsx:
      if (!/\.[jt]sx?$/.test(id)) return;
      
      // Configura tus opciones de Babel aquí:
      const babelOptions = {
        plugins: [
          ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }]
        ],
      };
      
      // Usa Babel para transformar el código:
      const result = transform(code, babelOptions);

      // Devuelve el código transformado y el mapa de fuente (source map):
      return {
        code: result.code,
        map: result.map,
      };
    },
  };
}
