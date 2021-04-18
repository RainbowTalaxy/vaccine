create database if not exists vaccine character set utf8;
use vaccine;

create table if not exists `news` (
    n_id        bigint(10)  primary key auto_increment,
    n_title     text        not null,
    n_short     text        not null,
    n_date      date        not null,
    n_link      text        not null
);

create table if not exists `qna` (
    q_id        bigint(10)  primary key auto_increment,
    q_date      date        not null,
    q_question  text        not null,
    q_answer    text        not null
);

create table if not exists `site` (
    s_id        bigint(10)  primary key auto_increment,
    s_name      text        not null,
    s_address   text        not null,
    s_longitude double      not null,
    s_latitude  double      not null
);