SELECT COUNT(*) FROM usuarios;

SELECT COUNT(medicamento) FROM farmacia;

SELECT MIN(idade) FROM usuarios;

SELECT MAX(idade) FROM usuarios;

SELECT MAX(idade) FROM usuarios;

SELECT SUM(estoque) FROM farmacia WHERE categoria = 'blue' OR categoria = 'black';

SELECT categoria, SUM(estoque) FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

SELECT SUM(estoque) FROM farmacia WHERE categoria IS NULL;

SELECT COUNT(medicamento) FROM farmacia WHERE categoria IS NULL;

SELECT CONCAT(medicamento, ' (', categoria, ')') FROM farmacia WHERE categoria IS NOT NULL;

SELECT CONCAT(id, ' - ', medicamento, ' (', COALESCE(categoria, 'sem categoria'), ')') FROM farmacia;

SELECT nome, idade, CAST(cadastro as date) FROM usuarios WHERE cadastro >= '2020-01-01' AND cadastro <= '2020-12-31';

SELECT nome, idade, email, AGE(CAST(cadastro as timestamp)) FROM usuarios WHERE idade < 18;

SELECT nome, idade, email, AGE(CAST(cadastro as timestamp)) FROM usuarios WHERE idade >= 60;

SELECT categoria, COUNT(medicamento) AS "quantidadeProdutos" FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

SELECT idade, COUNT(id) AS "quantidadeRegistros" from usuarios WHERE idade >= 18 GROUP BY idade ORDER BY idade;

SELECT categoria, SUM(estoque) AS "quantidadeEstoque" from farmacia GROUP BY categoria;
