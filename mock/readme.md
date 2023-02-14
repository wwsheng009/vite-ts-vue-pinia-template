


### 特别说明

`build/vite/plugin/mock.ts` 中的 `configMockPlugin` 方法，属性`prodEnabled` 在生产环境一定要关闭，不然会把大量的mock代码，如fakerjs中的一些源码打包进构建包内。


解决vite类型问题
tsconfig.json

```
{
  "compilerOptions": {
    "types": ["vite/client"] // 👈 add this
  }
}
```