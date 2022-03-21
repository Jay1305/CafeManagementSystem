### This is initial database. 
use mysql;
drop database if exists cafenodejs;
create database cafenodejs;
use cafenodejs;
create table user(
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    contact_number varchar(20),
    email varchar(50),
    password varchar(250),
    status bit,
    role varchar(20),
    UNIQUE (email)
);
insert user(name, contact_number,email,password,status,role) values ('admin','1234567890','admin@admin.com','password',true,'admin');