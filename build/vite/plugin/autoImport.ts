/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入依赖
 * vue相关 defineComponent 、computed 、watch等模块依赖根据使用，插件自动导入，你无需关心 import，直接使用即可
 */
import AutoImport from 'unplugin-auto-import/vite';

export const AutoImportDeps = () =>
  AutoImport({
    imports: ['vue', 'vue-router'], //, 'vue-i18n', '@vueuse/head', '@vueuse/core'],
    dts: 'typing/auto-vue-core-imports.d.ts',
  });
