## react-css

> styled-components: css in js 方式的一种;
>
> antd 按需引入: 参照 antd 官网,3.xxx 版本的详细文档去一步步走即可;

### antd 样式自定义主题

```js
// 在根目录下创建config-overrides.js

// 配置具体的修改规则
const { override, fixBabelImports, addLessLoader } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "true",
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "@primary-color": "green",
      },
    },
  })
);
```
