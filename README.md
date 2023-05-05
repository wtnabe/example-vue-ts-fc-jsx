# Vue 3 + TypeScript + JSX + Vite + JSDoc sample project

## 実現したこと

 * Vite x Vue 3 x JSX x TypeScriptの環境
 * JSDoc x JSX x TypeScriptの環境
 * Functional Componentに対するそれっぽいJSDocドキュメンテーション

Functional Component に対する JSDoc ドキュメンテーションは Vue だけでなく React など他のプロジェクトでも使えるはず

### 実現していないこと

`.vue` に対して TypeScript を書きつつ JSDoc で parse できるようにすること

## 追加した設定

 * npm create vite で vue-ts のプロジェクトをセットアップ
 * vite plugin で `@vitejs/plugin-vue-jsx` を追加
    * README では `defineComponent` を利用していないと JSX が書けないように読めるが、実際には Functional Component でも動作する
    * `vite@^2` では動作しないので `vite@^3` 以上に上げる（これを書いている時点で vite の最新メジャーバージョンは 4）
 * `tsconfig.json` に jsx 関連の項目を Vue で処理するように設定
 * JSDoc でも TypeScript と JSX を処理できるように `jsdoc-babel` plugin と babel の設定を追加
    * `@babel/preset-typescript` + `tsconfig.json` で `.tsx` は処理できるが `.jsx` は処理できないので `@babel/plugin-syntax-jsx` も添える

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
