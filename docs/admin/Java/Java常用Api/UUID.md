## UUID

需要导包，在 java.util 包下

一般不用他的构造

### 常见成员方法

| 方法                     | 作用           |
| ------------------------ | -------------- |
| static UUID randomUUID() | 随机数序列     |
| String toString()        | 转成字符串类型 |

```java
String uuid = UUID.randomUUID().toString();
System.out.println(uuid);
// 输出结果带-：dcf611f4-80c8-4610-ae94-1df5e9694af9
uuid = uuid.replaceAll("-", "");
System.out.println(uuid);
// 输出结果不带-：dcf611f480c84610ae941df5e9694af9
```
