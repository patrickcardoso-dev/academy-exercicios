CREATE DATABASE ecommerce;

CREATE TABLE categorias (
	id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE produtos (
	id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco INT, 
    quantidade_em_estoque INT,
    categoria_id INT REFERENCES categorias(id)
);

CREATE TABLE clientes (
	cpf VARCHAR(11) UNIQUE,
    nome VARCHAR(150) NOT NULL
);

CREATE TABLE vendedores (
	cpf VARCHAR(11) UNIQUE,
    nome VARCHAR(150) NOT NULL
);

CREATE TABLE pedidos (
	id SERIAL PRIMARY KEY,
    valor INT,
    cliente_cpf CHAR(11) REFERENCES clientes(cpf),
  	vendedor_cpf CHAR(11) REFERENCES vendedores(cpf)
);

CREATE TABLE itens_do_pedido (
	id SERIAL PRIMARY KEY,
    pedido_id INT REFERENCES pedidos(id),
  	quantidade INT,
  	produto_id INT REFERENCES produtos(id)
);

INSERT INTO categorias (nome) 
VALUES 
('frutas'), 
('verduras'), 
('massas'),
('bebidas'),
('utilidades');

INSERT INTO produtos (nome, descricao, preco, quantidade_em_estoque, categoria_id) 
VALUES 
('Mamão',	'Rico em vitamina A, potássio e vitamina C.',	300,	123, 1),
('Maçã',	'Fonte de potássio e fibras.',	90,	34, 1),
('Cebola',	'Rico em quercetina, antocianinas, vitaminas do complexo B, C.',	50,	76, 2), 
('Abacate',	'NÃO CONTÉM GLÚTEN.',	150,	64, 1),
('Tomate',	'Rico em vitaminas A, B e C.',	125,	88, 2),
('Acelga',	'NÃO CONTÉM GLÚTEN.',	235,	13, 2),
('Macarrão parafuso',	'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais.',	690,	5, 3), 
('Massa para lasanha',	'Uma reunião de família precisa ter comida boa e muita alegria.',	875,	19, 3), 
('Refrigerante coca cola lata',	'Sabor original.',	350,	189, 4),
('Refrigerante Pepsi 2l',	'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.',	700,	12, 4),
('Cerveja Heineken 600ml',	'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado.',	1200,	500, 4),
('Agua mineral sem gás',	'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.',	130,	478, 4), 
('Vassoura',	'Pigmento, matéria sintética e metal.',	2350,	30, 5), 
('Saco para lixo',	'Reforçado para garantir mais segurança.',	1340,	90, 5),
('Escova dental',	'Faça uma limpeza profunda com a tecnologia inovadora.',	1000,	44, 5),
('Balde para lixo', '50l	Possui tampa e fabricado com material reciclado.',	2290,	55, 5),
('Manga',	'Rico em Vitamina A, potássio e vitamina C.',	198,	176, 1), 
('Uva',	'NÃO CONTÉM GLÚTEN.',	420,	90, 1);

INSERT INTO clientes (cpf, nome) 
VALUES 
('80371350042', 'José Augusto Silva'),
('67642869061', 'Antonio Oliveira'),
('63193310034', 'Ana Rodrigues'),
('75670505018', 'Maria da Conceição');

INSERT INTO vendedores (cpf, nome) 
VALUES 
('82539841031',	'Rodrigo Sampaio'),
('23262546003',	'Beatriz Souza Santos'),
('28007155023',	'Carlos Eduardo');

INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf) 
VALUES 
(3290, 80371350042, 28007155023);

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id) 
VALUES 
(1, 1, 1),
(1, 6, 11),
(1, 1, 15),
(1, 1, 10),
(1, 5, 2);

UPDATE produtos SET quantidade_em_estoque = 122 WHERE id = 1;
UPDATE produtos SET quantidade_em_estoque = 494 WHERE id = 11;
UPDATE produtos SET quantidade_em_estoque = 43 WHERE id = 15;
UPDATE produtos SET quantidade_em_estoque = 11 WHERE id = 10;
UPDATE produtos SET quantidade_em_estoque = 29 WHERE id = 2;

INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf) 
VALUES 
(1278, 63193310034, 23262546003);

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id) 
VALUES 
(2, 10, 17),
(2, 3, 18),
(2, 5, 1),
(2, 10, 5),
(2, 2, 6);

UPDATE produtos SET quantidade_em_estoque = 166 WHERE id = 17;
UPDATE produtos SET quantidade_em_estoque = 87 WHERE id = 18;
UPDATE produtos SET quantidade_em_estoque = 117 WHERE id = 1;
UPDATE produtos SET quantidade_em_estoque = 78 WHERE id = 5;
UPDATE produtos SET quantidade_em_estoque = 11 WHERE id = 6;

INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf) 
VALUES 
(2678, 75670505018, 23262546003);

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id) 
VALUES 
(3, 1, 13),
(3, 6, 12),
(3, 5, 17);

UPDATE produtos SET quantidade_em_estoque = 29 WHERE id = 13;
UPDATE produtos SET quantidade_em_estoque = 472 WHERE id = 12;
UPDATE produtos SET quantidade_em_estoque = 161 WHERE id = 17;

INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf) 
VALUES 
(4060, 75670505018, 82539841031);

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id) 
VALUES 
(4, 1, 16),
(4, 6, 18),
(4, 1, 7),
(4, 3, 1),
(4, 20, 5),
(4, 2, 6);

UPDATE produtos SET quantidade_em_estoque = 54 WHERE id = 16;
UPDATE produtos SET quantidade_em_estoque = 81 WHERE id = 18;
UPDATE produtos SET quantidade_em_estoque = 4 WHERE id = 7;
UPDATE produtos SET quantidade_em_estoque = 114 WHERE id = 1;
UPDATE produtos SET quantidade_em_estoque = 58 WHERE id = 5;
UPDATE produtos SET quantidade_em_estoque = 9 WHERE id = 6;

INSERT INTO pedidos (valor, cliente_cpf, vendedor_cpf) 
VALUES 
(2818, 67642869061, 82539841031);

INSERT INTO itens_do_pedido (pedido_id, quantidade, produto_id) 
VALUES 
(5, 8, 18),
(5, 1, 8),
(5, 3, 17),
(5, 8, 5),
(5, 2, 11);

UPDATE produtos SET quantidade_em_estoque = 73 WHERE id = 18;
UPDATE produtos SET quantidade_em_estoque = 18 WHERE id = 8;
UPDATE produtos SET quantidade_em_estoque = 158 WHERE id = 17;
UPDATE produtos SET quantidade_em_estoque = 50 WHERE id = 5;
UPDATE produtos SET quantidade_em_estoque = 492 WHERE id = 11;