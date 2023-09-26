SELECT * FROM musicas;

SELECT id, compositor FROM musicas;

SELECT composicao, tempo FROM musicas WHERE tempo > 60*4;

SELECT compositor, composicao FROM musicas WHERE id BETWEEN 47 AND 123;

SELECT * FROM musicas WHERE compositor IS NOT NULL AND compositor <> 'Bach' AND tempo < 60*5;

SELECT composicao, tempo FROM musicas WHERE compositor <> 'Bach' AND compositor <> 'Mozart';

SELECT * FROM musicas ORDER BY id DESC;

SELECT * FROM musicas ORDER BY tempo DESC;

SELECT * FROM musicas ORDER BY tempo LIMIT 5;

SELECT * FROM musicas ORDER BY tempo DESC LIMIT 10;

SELECT * FROM musicas ORDER BY tempo LIMIT 10 OFFSET 5;

SELECT * FROM musicas LIMIT 10 OFFSET 40;

SELECT * FROM musicas LIMIT 12 OFFSET 72;

SELECT DISTINCT compositor FROM musicas WHERE compositor IS NOT NULL;

SELECT DISTINCT compositor, composicao FROM musicas;

SELECT * FROM musicas WHERE compositor like 'Bra%';

SELECT * FROM musicas WHERE ritmo like '%troppo';

SELECT * FROM musicas WHERE composicao ilike '%quartet%';

SELECT * FROM musicas WHERE NOT composicao ilike '%quartet%';