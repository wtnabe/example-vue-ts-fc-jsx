import { extname } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsxPlugin()
  ]
})

/*
@vitejs/plugin-vue-tsx は defineComponent を利用していないと JSX が使えないようにドキュメントは読めるが、実際には 3.0.1 の時点では Functional Component に対しても有効

ただし vite@^2 では動かず、vite@^3 以降が必要。

@babel/preset-typescript で isTSX を利用しようとすると必ず React に移譲されてしまうのでそこは諦めざるを得ない
babel-preset-typescript-vue は対応する Vue が古い

JSDoc で TypeScript に対応するために別途 jsdoc-babel + @babel/preset-typescript を利用している
*/
