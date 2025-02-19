## BufferedOutputStream 类

> 缓冲字节输出流、有缓冲区、高效

### 常见的构造方法

| 方法                                         | 作用                             |
| -------------------------------------------- | -------------------------------- |
| public BufferedInputStream(OutputStream out) | 将输出流写到给定 File 对象的文件 |

### 常见的成员方法

| 方法              | 作用                                                                                                           |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| public void flush | 刷新缓冲区                                                                                                     |
| public void close | 释放资源，同时自带刷新缓冲区的功能                                                                             |
| 其他方法          | <RouteLink to="/admin/Java/Java常用Api/IO流/字节流/写入/FileOutputStream类.md">同 FileOutputStream</RouteLink> |

### 方法的使用

```java
package com.wuziqi.gobang.IO.ZiJieOutput;

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;

public class DemoBufferedIOutputStream {
    public static void main(String[] args) throws Exception {
        // public BufferedOutputStream(FileOutputStream out)
        // 有参构造的原因是因为底层，使用的是装饰设计模式

        // FileOutputStream fos = new FileOutputStream("aaa/bbb.txt");
        // BufferedOutputStream bos = new BufferedOutputStream(fos);

        BufferedOutputStream bos =
        new BufferedOutputStream(new FileOutputStream("aaa/bbb.txt", true));

        // 写出数据
        // 一次写出一个字节
        bos.write(97);
        bos.write(97);
        bos.write(99);
        bos.write(98);
        // 刷新缓冲区，否则数组一直在缓冲区，没有写入，导致文件一直是空白的
        bos.flush();

        // 一次写出一个数组长度的字节
        byte[] bytes = {97, 98, 99, 100, 101, 102, 103, 104};
        // 换行
        bos.write("\r\n".getBytes());
        bos.write(bytes);
        // 缓冲
        bos.flush();
    }
}
```
