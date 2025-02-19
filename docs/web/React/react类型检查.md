## react 类型检查

基础数据类型:
| 类型 | 描述 |
| :----: | :----: |
| PropTypes.array | 检查数组 |
| PropTypes.bool | 检查布尔值 |
| PropTypes.func | 检查函数 |
| PropTypes.number | 检查数字 |
| PropTypes.object | 检查对象 |
| PropTypes.string | 检查字符串 |
| PropTypes.symbol | 检查符号 |

React 元素:
| 类型 | 描述 |
| :----: | :----: |
| PropTypes.element | 检查 React 元素 |
| PropTypes.elementType | 检查 React 元素类型 |
| PropTypes.instanceOf(class) | 检查是否是某个类的实例 |

其他类型:
| 类型 | 描述 |
| :----: | :----: |
| PropTypes.node | 检查任何可以被渲染的 React 元素 |
| PropTypes.objectOf(type) | 检查对象中的所有值是否是某个类型 |
| PropTypes.shape(obj) | 检查对象是否具有某些属性 |
| PropTypes.any | 检查任何类型 |
| PropTypes.oneOf(values) | 检查值是否在某个数组中 |
| PropTypes.oneOfType(types) | 检查值是否是某个类型的子类型 |

### arrOf 和 objectOf 多重嵌套类型检测

```jsx
// An array of a certain type
optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
// An object with property values of a certain type
optionalObjectOf: PropTypes.objectOf(PropTypes.number),
//示例
static propTypes = {
  todoList:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
      text:PropTypes.string
  }))
}
```

### shape 检测不同对象的不同属性的不同数据类型:

```jsx
// An object taking on a particular shape
optionalObjectWithShape: PropTypes.shape({
  optionalProperty: PropTypes.string,
  requiredProperty: PropTypes.number.isRequired
}),
//示例
static propTypes = {
  object:PropTypes.shape({
    name:PropTypes.string,
    age:PropTypes.number
  })
}
```
