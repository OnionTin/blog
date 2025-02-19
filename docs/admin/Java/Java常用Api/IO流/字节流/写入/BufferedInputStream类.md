## BufferedInputStream 类

> 缓冲字节输入流、有缓冲区、高效

### 常见的构造方法

| 方法                                       | 作用                             |
| ------------------------------------------ | -------------------------------- |
| public BufferedInputStream(InputStream in) | 读取给定的已经存在的文件中的数据 |

### 常见的成员方法

<RouteLink to="/admin/Java/Java常用Api/IO流/字节流/写入/FileInputStream类.md">同 FileInputStream</RouteLink>

### 方法的使用

```java
package com.wuziqi.gobang.IO.ZiJieInput;

import java.io.BufferedInputStream;
import java.io.FileInputStream;

public class DemoBufferedInputStream {
    public static void main(String[] args) throws Exception {
        // public BufferedInputStream(FileInputStream in)
        // 有参构造的原因是因为底层，使用的是装饰设计模式

        // FileInputStream fis = new FileInputStream("aaa/bbb.txt");
        // BufferedInputStream bis = new BufferedInputStream(fis);

        BufferedInputStream bis =
        new BufferedInputStream(new FileInputStream("aaa/bbb.txt"));

        // 读取
        // 一次读取一个字节
        int by = 0;
        while ((by = bis.read()) != -1) {
            System.out.print((char) by);
        }

        // 一次读取一个数组的字节
        byte[] bys = new byte[5];
        int len = 0;
        while ((len = bis.read(bys)) != -1) {
            System.out.print(new String(bys, 0, len));
        }
    }
}
```

### 文件复制

```java
// 方式一(一次读取一个字节，一次写入一个字节)
package com.wuziqi.gobang.IO.ZiJieInput;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;

public class DemoCopyBuffer1 {
    public static void main(String[] args) throws Exception {
        // 创建一个字节输入流对象
        BufferedInputStream fis = new BufferedInputStream(
          new FileInputStream("aaa/bbb.txt")
        );
        // 创建一个字节输出流对象
        BufferedOutputStream fos = new BufferedOutputStream(
          new FileOutputStream("aaa/b.txt")
        );
        // 一次读取一个字节，一次写入一个字节
        int by = 0;
        while ((by = fis.read()) != -1) {
            fos.write(by);
        }
        // 释放资源，关闭流
        fis.close();
        fos.close();
    }
}
```

### 复制文件(高效)

```java
// 方式二(一次读取一个字节数组，一次写入一个字节数组的一部分)
package com.wuziqi.gobang.IO.ZiJieInput;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;

public class DemoCopyBuffer2 {
    public static void main(String[] args) throws Exception {
        // 创建字节输入流对象
        BufferedInputStream fis =
        new BufferedInputStream(new FileInputStream("aaa/b.txt"));
        // 创建字节输出流对象
        BufferedOutputStream fos =
        new BufferedOutputStream(new FileOutputStream("aaa/a.txt"));
        // 一次读取一个字节数组，一次写入一个字节数组的一部分
        byte[] bys = new byte[5];
        int len = 0;
        while( (len = fis.read(bys)) != -1 ){
            fos.write(bys, 0, len);
        }
        // 释放资源
        fis.close();
        fos.close();
    }
}
```
