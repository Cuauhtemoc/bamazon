DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER(10) NOT NUll,
stock_quantity INTEGER(10) NOT NULL,
PRIMARY KEY(id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Miller High LIfe", "Beer", 15, 100); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Maplewood Son of Juice", "Beer", 12, 20); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jim Bean", "Spirit", 20, 25); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tito's Vodka", "Spirit", 20, 25); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hot Chips", "Food", 2, 100); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Orange Juice", "Drink", 3, 50); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cranberry Juice", "Drink", 3, 500); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("New Holland Dragon's Milk", "Beer", 12, 10); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hop Butcher Tavern Cut", "Beer", 12, 10); 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lo Rez Tamarind Shortcut", "Beer", 15, 10); 


