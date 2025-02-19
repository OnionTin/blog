## ObjectInputStream 类

反序列化流

> 反序列化：将本地磁盘中的对象，以流的形式，还原成内存中的对象。

### 常见的构造方法

| 方法                                     | 作用                                                                                      |
| ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| public ObjectInputStream(InputStream in) | 创建一个指定 InputStream 的 ObjectInputStream 对象，该 InputStream 对象用于读取流中的数据 |

### 常见的成员方法

| 方法                             | 作用               |
| -------------------------------- | ------------------ |
| public final Object readObject() | 从流中读取一个对象 |

### 方法的使用

```java
package com.wuziqi.gobang.IO.ObjectInput;

import java.io.FileInputStream;
import java.io.ObjectInputStream;

public class ObjectInputStream01 {
    public static void main(String[] args) throws Exception {
        // public ObjectInputStream(InputStream in)
        ObjectInputStream ois = new ObjectInputStream(
          new FileInputStream("aaa/o.txt")
        );

        // public final Object readObject()
        Object p = ois.readObject();
        System.out.println(p); // Person{name='张三', age=18}
    }
}
```
