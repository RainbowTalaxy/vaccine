# 新冠疫苗指南书-后端

端口 `3000`

* [数据库](#数据库)
  * [资讯表](#资讯表)
  * [问答表](#问答表)
* [接口](#接口)
  * [管理员登陆](#管理员登陆)
  * [资讯列表](#资讯列表)
  * [添加资讯](#添加资讯)
  * [删除资讯](#删除资讯)
  * [问答列表](#问答列表)
  * [添加问答](#添加问答)
  * [删除问答](#删除问答)
  * [获取须知](#获取须知)
  * [保存须知](#保存须知)

# 数据库

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

### 问答表

表名 `qna`

|字段        |名称         |类型        |约束                         |
|:----------|:-----------|:-----------|:---------------------------|
|q_id       |问答条目ID    |bigint(10)  |primary key auto_increment |
|q_date     |问答日期      |date        |not null                   |
|q_question |问答问题      |text        |not null                   |
|q_answer   |问答回答      |text        |not null                   |

# 接口

### 测试接口
`ALL` /hello

### 管理员登陆
`POST` /login

|参数    |类型    |参考值  |
|:------|:------|:------|
|u_name |String |root   |
|u_pwd  |String |root   |

成功返回参考
```json
{
    "code": 200
}
```

失败返回参考
```json
{
    "code": 400,
    "msg": "身份失效"
}
```

### 资讯列表
`GET` /news/list

成功返回参考
```json
{
    "code": 200,
    "list": [
        {
            "n_id": 2,
            "n_title": "《新冠疫苗指南书》即将发布",
            "n_short": "该项目将在近期发布，尽请期待！",
            "n_date": "2021-04-14T16:00:00.000Z",
            "n_link": "https://www.talaxy.cn"
        }
    ]
}
```

失败返回参考
```json
{
    "code": 401,
    "msg": "获取资讯列表失败"
}
```

### 添加资讯
`POST` /news/add

|参数        |类型    |参考值                                     |
|:----------|:------|:------------------------------------------|
|n_title    |String |News Title                                 |
|n_short    |String |Here is a short desription of the news.    |
|n_date     |Date   |2021-4-16                                  |
|n_link     |String |https://talaxy.cn                          |

成功返回参考
```json
{
    "code": 200
}
```

失败返回参考
```json
{
    "code": 402,
    "msg": "缺少资讯参数"
}
```

### 删除资讯
`DELETE` /news/remove

|参数    |类型    |参考值  |
|:------|:------|:------|
|n_id   |Int    |17     |

成功返回参考
```json
{
    "code": 200
}
```

失败返回参考
```json
{
    "code": 402,
    "msg": "缺少资讯参数"
}
```

### 问答列表
`GET` /qna/list

成功返回参考
```json
{
    "code": 200,
    "list": [
        {
            "q_id": 2,
            "q_date": "2021-04-16T16:00:00.000Z",
            "q_question": "新冠疫苗建议打吗？",
            "q_answer": "当然建议打了。"
        }
    ]
}
```

失败返回参考
```json
{
    "code": 411,
    "msg": "获取问答列表失败"
}
```

### 添加问答
`POST` /qna/add

|参数        |类型    |参考值                                     |
|:----------|:------|:------------------------------------------|
|q_question |String |新冠疫苗建议打吗？                            |
|q_answer   |String |当然建议打了。                               |
|q_date     |Date   |2021-4-17                                  |

成功返回参考
```json
{
    "code": 200
}
```

失败返回参考
```json
{
    "code": 412,
    "msg": "缺少问答参数"
}
```

### 删除问答
`DELETE` /qna/remove

|参数    |类型    |参考值  |
|:------|:------|:------|
|q_id   |Int    |2     |

成功返回参考
```json
{
    "code": 200
}
```

失败返回参考
```json
{
    "code": 402,
    "msg": "缺少问答参数"
}
```

### 获取须知
`GET` /notice

成功返回参考
```json
{
    "code": 200,
    "content": "疫苗须知！！！！！"
}
```

### 保存须知
`GET` /notice/save

|参数        |类型    |参考值               |
|:----------|:------|:-------------------|
|content    |String |疫苗须知！！！！！     |

成功返回参考
```json
{
    "code": 200
}
```

失败返回参考
```json
{
    "code": 420,
    "msg": "缺少须知内容参数"
}
```
