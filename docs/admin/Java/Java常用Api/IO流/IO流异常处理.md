## IO 流异常处理

```java
package com.wuziqi.gobang.IO;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class DemoErrorTryCatch {
    public static void main(String[] args) {
        FileInputStream fis = null;
        FileOutputStream fos = null;
        try{
            // 创建字节输入流对象
            fis = new FileInputStream("aaa/b.txt");
            // 创建字节输出流对象
            fos = new FileOutputStream("aaa/a.txt");
            // 一次读取一个字节数组，一次写入一个字节数组的一部分
            byte[] bys = new byte[1024];
            int len = 0;
            while( (len = fis.read(bys)) != -1 ){
                fos.write(bys, 0, len);
            }
        }catch( IOException e ){
            e.printStackTrace();
        }finally{
            // 释放资源
            if (fos != null){
                try {
                    fos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (fos != null){
                try {
                    fos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```
