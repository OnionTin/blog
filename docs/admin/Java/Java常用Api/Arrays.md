## Arrays

需要导包，在 java.util 包下；数组工具类(构造方法是私有的，成员方法都是静态的)

### 常见的成员方法

| 方法                                           | 作用                   |
| ---------------------------------------------- | ---------------------- |
| void sort(int[] a)                             | 按照升序对数组进行排序 |
| String toString()                              | 返回数组的字符串形式   |
| int[] copyOf(Object[] original, int newLength) | 复制数组，扩容         |

`Arrays 扩容 与 System 扩容的区别在于一个是数组扩容，一个是 System 的内存扩容`

```java
// 扩容的案例
public static void main(String[] args) {
  int[] arr = {1, 2, 3};
  System.out.println(Arrays.toString(arr)); // [1, 2, 3]
  int[] newArr = Arrays.copyOf(arr, 6); // 扩容的长度为6，System扩容写法不同
  System.out.println(Arrays.toString(newArr)); // [1, 2, 3, 0, 0, 0]
}
```
