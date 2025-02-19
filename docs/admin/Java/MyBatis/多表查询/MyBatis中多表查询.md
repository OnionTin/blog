## MyBatis 中多表查询

### 查询所有的学生以及教过该学生的老师(一个学生被多个老师教，一个老师又会教不同的学生)

```xml
<!--Student.xml-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.api.MyBatis.dao.StudentMapper">
<!--方式一-->
  <resultMap id="studentMap" type="student">
    <id column="id" property="id"/>
    <result column="name" property="name"/>
    <collection property="teachers" column="id" ofType="teacher">
      <id column="t_id" property="id"/>
      <result column="t_name" property="name"/>
    </collection>
  </resultMap>
  <select id="findAll" resultMap="studentMap">
    select s.*,
           t.id   t_id,
           t.name t_name
    from student s,
         teacher t,
         s_t st
    where st.sid = s.id
      and st.tid = t.id
  </select>
<!--方式二-->
  <resultMap id="studentMap" type="student">
    <id column="id" property="id"/>
    <result column="name" property="name"/>
    <collection
      property="teachers"
      column="id"
      ofType="teacher"
      select="com.api.MyBatis.dao.TeacherMapper.findBySid"
    >
      <id column="t_id" property="id"/>
      <result column="t_name" property="name"/>
    </collection>
  </resultMap>
  <select id="findAll" resultMap="studentMap">
    select * from student
  </select>
</mapper>
```

```xml
<!--Teacher.xml-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.api.MyBatis.dao.TeacherMapper">
  <select id="findBySid" resultType="teacher" parameterType="int">
    select *
    from teacher t,
         s_t st
    where t.id = st.tid
      and st.sid = #{sid}
  </select>
</mapper>
```

```java
// StudentMapper接口
package com.api.MyBatis.dao;

import com.api.MyBatis.domain.Student;

import java.util.List;

public interface StudentMapper {
    List<Student> findAll();
}
```

```java
// TeacherMapper接口
package com.api.MyBatis.dao;

import com.api.MyBatis.domain.Teacher;

import java.util.List;

public interface TeacherMapper {
  List<Teacher> findBySid(int id);
}

```

```java
// Student实体类
package com.api.MyBatis.domain;

import java.util.List;

public class Student {
  private int id;
  private String name;
  private List<Teacher> teachers;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<Teacher> getTeachers() {
    return teachers;
  }

  public void setTeachers(List<Teacher> teachers) {
    this.teachers = teachers;
  }

  @Override
  public String toString() {
    return "Student{" +
        "id=" + id +
        ", name='" + name + '\'' +
        ", teachers=" + teachers +
        '}';
  }
}
```

```java
// Teacher实体类
package com.api.MyBatis.domain;

public class Teacher {
  private int id;
  private String name;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Override
  public String toString() {
    return "Teacher{" +
        "id=" + id +
        ", name='" + name + '\'' +
        '}';
  }
}
```

```java
// 测试类
package com.api.MyBatis.test;

import com.api.MyBatis.dao.StudentMapper;
import com.api.MyBatis.domain.Student;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.InputStream;
import java.util.List;

public class StudentTest {
  private SqlSession session;
  private StudentMapper StudentDao;

  @BeforeEach
  public void before() throws Exception {
    // 1. 获取流对象，读取核心配置文件
    InputStream is = Resources.getResourceAsStream("SqlMapConfig.xml");
    // 2. 创建 SqlSession 工厂的构建者对象
    SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
    // 3. 获取 SqlSession 工厂对象
    SqlSessionFactory factory = builder.build(is);
    // 4. 获取 SqlSession 对象
    session = factory.openSession();
    // 5. 获取 UserDao 代理类对象
    StudentDao = session.getMapper(StudentMapper.class);
  }

  @AfterEach
  public void after() {
    // 7. 提交事务(增删改需要提交；查询时不要提交)
    session.commit();
    // 8. 释放资源
    session.close();
  }

  @Test
  public void findAll() {
    List<Student> Students = StudentDao.findAll();
    for (Student s : Students) {
      System.out.println(s);
      // 结果：
      // Student{
      //   id=1,
      //   name='tom',
      //   teachers=[
      //     Teacher{id=1, name='rose'},
      //     Teacher{id=2, name='marry'}
      //   ]
      // }
      // Student{
      //    id=2,
      //    name='jerry',
      //    teachers=[
      //      Teacher{id=1, name='rose'}
      //    ]
      // }
    }
  }
}
```

```sql
create table student (
	id int PRIMARY KEY auto_increment,
	name VARCHAR(20)
);

create table teacher (
	id int PRIMARY KEY auto_increment,
	name VARCHAR(20)
);

create table s_t(
	sid int,
	tid int,
	PRIMARY KEY(sid, tid), -- 联合主键
	foreign key (sid) REFERENCES student(id), -- 外键关联
	foreign key (tid) REFERENCES teacher(id) -- 外键关联
);

insert into student values (null, 'tom');
insert into student values (null, 'jerry');
insert into teacher values (null, 'rose');
insert into teacher values (null, 'marry');

insert into s_t values (1, 1);
insert into s_t values (1, 2);
insert into s_t values (2, 1);
```
