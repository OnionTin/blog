## InputStreamReader 类

> 转换流可以将字节流转换成字符流

### 常见的构造方法

| 方法                                                         | 作用                                         |
| ------------------------------------------------------------ | -------------------------------------------- |
| public InputStreamReader(InputStream in)                     | 创建一个使用默认字符编码的 InputStreamReader |
| public InputStreamReader(InputStream in, String charsetName) | 创建一个使用指定字符编码的 InputStreamReader |

### 常见的成员方法

| 方法 | 作用                                                                                               |
| ---- | -------------------------------------------------------------------------------------------------- |
| 方法 | <RouteLink to="/admin/Java/Java常用Api/IO流/字符流/写入/FileReader类.md">同 FileReader</RouteLink> |

### 方法的使用

```java
package com.wuziqi.gobang.IO.ZhuanhuanInput;

import java.io.FileInputStream;
import java.io.InputStreamReader;

public class InputStreamReader01 {
  public static void main(String[] args) throws Exception{
    // public InputStreamReader(InputStream in)
    /*
    FileInputStream fis = new FileInputStream("aaa/111.txt");
    InputStreamReader isr = new InputStreamReader(fis);
    */
    InputStreamReader isr = new InputStreamReader(new FileInputStream("aaa/111.txt"));
    int len = 0;
    while( (len = isr.read()) != -1){
        System.out.print((char)len);
    }
  }
}
```

### 转换流文件复制

```java
package com.wuziqi.gobang.IO.ZhuanhuanInput;

import java.io.*;

public class FileCopy1 {
  public static void main(String[] args) throws Exception {
    // 1. 一次读取一个字符，一次写出一个字符
    InputStreamReader isr = new InputStreamReader(
      new FileInputStream("aaa/111.txt")
    );
    OutputStreamWriter osw = new OutputStreamWriter(
      new FileOutputStream("aaa/222.txt")
    );
    int ch = 0;
    while ((ch = isr.read()) != -1) {
      osw.write(ch);
    }
    osw.close();
    isr.close();

    // 2. 一次读取一个字符数组，一次写出一个字符数组的一部分
    InputStreamReader isr = new InputStreamReader(
      new FileInputStream("aaa/111.txt")
    );
    OutputStreamWriter osw = new OutputStreamWriter(
      new FileOutputStream("aaa/222.txt")
    );
    char[] buf = new char[1024];
    int len = 0;
    while ((len = isr.read(buf)) != -1){
      osw.write(buf,0,len);
    }
    osw.close();
    isr.close();

    // 3. 用BufferedReader增强，一次读取一行并写入一行
    BufferedReader br = new BufferedReader(
      new InputStreamReader(new FileInputStream("aaa/111.txt"))
    );
    BufferedWriter bw = new BufferedWriter(
      new OutputStreamWriter(new FileOutputStream("aaa/222.txt"))
    );
    String line = null;
    while ((line = br.readLine()) != null){
      bw.write(line);
      bw.newLine();
    }
    bw.close();
    br.close();

    // 4. 一次读取一个字符数组，一次写入一个字符数组的一部分(高效)
    BufferedReader br = new BufferedReader(
      new InputStreamReader(new FileInputStream("aaa/111.txt"))
    );
    BufferedWriter bw = new BufferedWriter(
      new OutputStreamWriter(new FileOutputStream("aaa/222.txt"))
    );
    char[] buf = new char[1024];
    int len = 0;
    while ((len = br.read(buf)) != -1){
      bw.write(buf,0,len);
    }
    bw.close();
    br.close();

    // 5. 一次读取一个字符，一次写出一个字符(高效)
    BufferedReader br = new BufferedReader(
      new InputStreamReader(new FileInputStream("aaa/111.txt"))
    );
    BufferedWriter bw = new BufferedWriter(
      new OutputStreamWriter(new FileOutputStream("aaa/222.txt"))
    );
    int ch = 0;
    while ((ch = br.read()) != -1) {
      bw.write(ch);
    }
    bw.close();
    br.close();
  }
}
```
