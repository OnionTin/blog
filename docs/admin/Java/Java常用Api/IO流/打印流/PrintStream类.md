## PrintStream 类

打印字节流，只有输出流，没有输入流

### 常见的构造方法

| 方法                                                    | 作用                                                 |
| ------------------------------------------------------- | ---------------------------------------------------- |
| public PrintStream(String fileName)                     | 根据指定的文件创建 PrintStream                       |
| public PrintStream(OutputStream out, boolean autoFlush) | 根据指定的 OutputStream 创建 PrintStream；默认 false |

### 常见的成员方法

| 方法                                            | 作用                                     |
| ----------------------------------------------- | ---------------------------------------- |
| public void println(any x)                      | 打印任意类型的 x，并换行                 |
| public void print(any x)                        | 打印任意类型的 x，不换行                 |
| public void write(int b)                        | 将指定的字节写入此流，不换行             |
| public void write(byte[] buf, int off, int len) | 将指定的字节数组的一部分写入此流，不换行 |

### 方法的使用

```java
package com.wuziqi.gobang.IO.DaYinOutput;

import java.io.FileOutputStream;
import java.io.PrintStream;

public class PrintStream01 {
    public static void main(String[] args) throws Exception{
        // public PrintStream(String fileName)
        /*
        PrintStream ps = new PrintStream("aaa/888.txt");
        ps.println("你好");
        ps.print("这个不换行!");
        ps.write(97);
        ps.close();
        */

        // PrintStream(OutputStream out, boolean autoFlush)
        // autoFlush：只有值为true，且方法为println、printf、format才会自动刷新
        PrintStream ps = new PrintStream(new FileOutputStream("aaa/888.txt") , true);
        ps.println("autoFlush:true，这个会自动刷新；且换行");
        ps.print("autoFlush:true，这个也不会自动刷新；且不换行!");
        ps.write(new byte[]{ 97, 98, 99, 100}, 0, 4);
    }
}
```
