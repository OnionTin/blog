## System

系统类，不用导包，当然也不能实例化

### 常见的成员方法

| 方法                                                                                | 作用                       |
| ----------------------------------------------------------------------------------- | -------------------------- |
| static void exit(int status)                                                        | 退出 JVM 虚拟机 一般是 0   |
| static long currentTimeMillis()                                                     | 获取当前系统日期时间毫秒值 |
| static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length) | 复制数组(底层用来扩容数组) |

> static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
>
> src：原数组
>
> srcPos：原数组的起始位置
>
> dest：新数组
>
> destPos：新数组的起始位置
>
> length：复制的个数

```java
// 扩容的案例
public class SystemDemo {
  public static void main(String[] args) {
    int[] src = {1, 2, 3};
    int[] dest = new int[5]; // 5：新数组的长度，也是扩容后的长度
    System.arraycopy(src, 0, dest, 0, src.length);
    for (int i = 0; i < dest.length; i++) {
      System.out.print(dest[i] + " ");
      // 输出结果：1 2 3 0 0, 后面的两个0是扩容的结果
    }
  }
}
```
