create database store;
use store;
 create table products(
 id_product int primary key not null auto_increment,
 productName varchar(50)not null,
 productDescription varchar(200),
 productCategory varchar(50),
 productPrice varchar(10.2),
 urlProductImage varchar(200)
 );

create database BDmuseu;
use BDmuseu;
