# vue3 + ts + pinia + vite模板

## 配置vite

## 代码规范

工具：husky、eslint、prettier

- 结合VsCode编辑器（保存时自动执行格式化：editor.formatOnSave: true）
- 配合Git hooks钩子（commit前或提交前执行：pre-commit => npm run lint:lint-staged）

### 配置eslint

### 配置prettier

### 配置git-cz

## vue能力支持
```json
{
    // "@vitejs/plugin-legacy": "^1.6.2", // 低版本浏览器兼容
    "@vitejs/plugin-vue": "^1.9.3", // vue 支持
    "@vitejs/plugin-vue-jsx": "^1.2.0", // jsx 支持
}
```

## 状态管理器
配置pinia

## 配置router

## 配置axios


## UI组件按需加载、自动导入

- vite-plugin-style-import 不再推荐
- unplugin-vue-components 推荐