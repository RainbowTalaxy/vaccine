# 新冠疫苗指南书-后端

端口 `3000`

## 数据库

数据库名 `vaccine`

### 资讯表

表名 `news`

|字段        |名称         |类型        |约束                         |
|:----------|:-----------|:-----------|:---------------------------|
|n_id       |新闻条目ID    |bigint(10)  |primary key auto_increment |
|n_title    |新闻标题      |text        |not null                   |
|n_short    |新闻简述      |text        |not null                   |
|n_date     |新闻日期      |date        |not null                   |
|n_link     |新闻链接      |text        |not null                   |

### 问答表 qna

表名 `qna`

|字段        |名称         |类型        |约束                         |
|:----------|:-----------|:-----------|:---------------------------|
|q_id       |问答条目ID    |bigint(10)  |primary key auto_increment |
|q_date     |问答日期      |date        |not null                   |
|q_question |问答问题      |text        |not null                   |
|q_answer   |问答回答      |text        |not null                   |

## 接口

### 测试接口
`ALL` [/hello](http://localhost:3000/hello)

### 管理员登陆
`POST` [/login](http://localhost:3000/login)

|参数    |类型    |默认值  |
|:------|:------|:------|
|u_name |String |root   |
|u_pwd  |String |root   |
