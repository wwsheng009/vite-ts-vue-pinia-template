/**
 * Package file volume analysis
 * 打包后，会产生一个stats.html文件,访问地址http://host:port/stats.html
 */
import visualizer from 'rollup-plugin-visualizer';
import { ANALYSIS } from '../../config/constant';

export function configVisualizerConfig() {
  if (ANALYSIS) {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true, //注意这里要设置为true，否则无效
      gzipSize: true,
      brotliSize: true,
    }) as Plugin;
  }
  return [];
}
