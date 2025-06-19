-- DROP SCHEMA IF EXISTS ecommerce;
-- CREATE SCHEMA ecommerce;
USE ecommerce;

CREATE TABLE `user`(
	id int not null primary key auto_increment,
    `name` varchar(150) null,
    last_name varchar(150),
    second_last_name varchar(150) null,
    email varchar(150),
	`password` varchar(150),
	created_at timestamp default current_timestamp,
	updated_at timestamp null default null on update current_timestamp
)engine=innoDB;

CREATE TABLE `company` (
	id int not null primary key auto_increment,
    `name` varchar(150),
	created_at timestamp default current_timestamp,
	updated_at timestamp null default null on update current_timestamp
)engine=innoDB;

CREATE TABLE `category` (
	id int not null primary key auto_increment,
    `name` varchar(150),
	created_at timestamp default current_timestamp,
	updated_at timestamp null default null on update current_timestamp
)engine=innoDB;


create table `product` (
	id int not null primary key auto_increment,
    `name` varchar(150) null,
    `description` tinytext,
	price decimal(16, 2),
    user_id int,
	company_id int,
    category_id int,
	created_at timestamp default current_timestamp,
	updated_at timestamp null default null on update current_timestamp,
	CONSTRAINT fk_product_user FOREIGN KEY (user_id) REFERENCES `user` (id),
	CONSTRAINT fk_product_company FOREIGN KEY (company_id) REFERENCES `company` (id),
	CONSTRAINT fk_product_category FOREIGN KEY (category_id) REFERENCES `category` (id)

) engine=innoDB;

/*
	USUARIOS Y CONTRASEÑAS:
	user: usuario1@gmail.com - password: soyelusuario1
    user: usuario2@gmail.com - password: soyelusuario2
    user: usuario3@gmail.com - password: soyelusuario3
*/
INSERT INTO
	`user`(`name`, last_name, second_last_name, email, `password`)
VALUES
	('Alejandro', 'Martínez', 'Ibarra', 'usuario1@gmail.com', '$2b$10$j1MRhQsRYRxHlMt4glpGdOI3FzXTa.gDY.U1dyVP.rtqXLum1LONa'),
    ('Joseline', 'Juárez', 'Barranco', 'usuario2@gmail.com', '$2b$10$Y3fQudFzlzCldeSEIKke9efky7Nkqe/B3NJ5sl.9wlSOWmMqA3HEi'),
    ('Jaime', 'López', 'Espinoza', 'usuario3@gmail.com', '$2b$10$6jk5eMJuDwHsQ4qwl7oGceSGEcnsqEBJ715K7uSpVKIK/wp/sLf3O');


INSERT INTO
	`company`(`name`)
VALUES
	('Mabe'),
    ('Amazon'),
    ('Samsung'),
    ('Apple'),
    ('P&G'),
    ('Bimbo'),
    ('New Balance');

INSERT INTO
	`category`(`name`)
VALUES
	('Supermercado'),
    ('Tecnología'),
    ('Deportes'),
    ('Alimentos'),
    ('Hogar y cuidado personal'),
    ('Electrodomésticos');

INSERT INTO
	`product`(`name`,description, price, user_id, company_id, category_id)
VALUES
	('Lavadora 20 KG', 'Lavadora profesional para uso diario.', 8455.32, 1, 1, 6),
    ('Galaxy A54 5G', 'Teléfono celular gama media.', 5465.56, 1, 3, 2),
    ('New Balance 550', 'Tenis casual color blanco con verde.', 3250.52, 1, 7, 3),
    ('New Balance 450', 'Tenis casual color amarillo con azul.', 3150.00, 2, 7, 3),
	('New Balance 350', 'Tenis casual color negro con morado.', 3100.00, 3, 7, 3);