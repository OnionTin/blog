## ts 编译选项

### include 指定需要编译的文件

```json
include: ["./src/**/*"] // (src: src 目录下 \*_: 任意目录 _: 任意文件)
```

### exclude 排除不需要编译的文件

```json
// (默认值: ["node_modules", "bower_components", "jspm_packages"])
exclude: ["./src/assets.....自己写"]
```

### files: [ ... 文件名 ]

```json
//只有文件少的时候, 用一个数组来统计编译的文件就行了
files: ["./src/index.ts", "./src/other.ts"]
```

### compilerOptions 配置选项

```json
"compilerOptions":{
  "target": "es5", // 指定编译后的版本
  "module": "es6", // 指定要使用的模块化的规范 commonjs es6
  "lib": ["dom", "dom.iterable", "esnext"], // 指定项目中用到的库 es6 promise...
  "outDir": "./dist", // 指定输出目录
  "outFile": "./dist/app.js", // 将代码合并为一个文件
  "allowJs": false, // 是否对js文件进行编译, 默认为false
  "checkJs": false, // 是否检查js语法符合规范, 默认为false
  "removeComments": true, // 是否移除注释, 默认为false
  "noEmit": false, // 不生成编译后所产生的js文件, 默认为false
  "noEmitOnError": false, // 报错时不生成编译文件, 默认为false
  "awaysStrict": false, // 设置编译后的文件是否使用严格模式, 默认为false
  "noImplicitAny": false, // 不允许隐式的any类型设置, 默认为false
  "noImplicitThis": false, // 不允许不明确类型的this, 默认为false
  "strictNullChecks": false, // 严格的检查空值, 默认为false
  "strict": false // 所有的检查的总开关, 如果设置为true, 所有的都打开了就不用写了
}
```
