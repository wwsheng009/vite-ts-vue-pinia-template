import { UserConfig, ConfigEnv } from 'vite';
// import vue from '@vitejs/plugin-vue';
import { createVitePlugins } from './build/vite/plugin';
import * as path from 'path';
import { VITE_DROP_CONSOLE, VITE_PORT } from './build/config/constant';
import { configManualChunk } from './build/vite/optimizer';
import proxy from './build/vite/proxy';

// https://vitejs.dev/config/
// export default defineConfig({
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  console.log(command, mode);

  return {
    resolve: {
      //设置别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [createVitePlugins(isBuild)], //[vue()],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          //additionalData: '@root-entry-name: default;',
        },
      },
    },
    server: {
      // 服务配置
      port: VITE_PORT, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      // host: '0.0.0.0', // IP配置，支持从IP启动
      hmr: {
        overlay: false, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      },
      // 设置代理
      // proxy: {
      //   '/api': {
      //     target: 'your https address',
      //     changeOrigin: true,
      //     rewrite: (path: string) => path.replace(/^\/api/, ''),
      //   },
      // },
      proxy,
    },

    // build
    build: {
      // 打包文件夹名称
      outDir: 'dist',

      target: 'es2015',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: configManualChunk,
        },
      },
      // Turning off brotliSize display can slightly reduce packaging time
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
    },
  };
};
