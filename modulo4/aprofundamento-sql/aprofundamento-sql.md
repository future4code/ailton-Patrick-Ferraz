### Exercício 1

a) O comando ALTER TABLE altera a estrutura de uma tabela já existente, que nesse caso seria a tabela "Actor". Já o DROP COLUMN deleta uma coluna da tabela, que nesse caso seria a coluna "salary".

b) Esse comando está alterando a tabela "Actor" e redeclarando a coluna "gender" para "sex" e o campo aceita string de até 6 caracteres.

c) Esse comando está alterando a tabela "Actor" e e aceitando strings com até 255 caracteres no campo "gender";

d)
```
ALTER TABLE Actor 
CHANGE gender gender VARCHAR(100) ;
```

### Exercício 2

a)
```
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "1936-11-5"
WHERE id = "003";
```

b)
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";|

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";
```

c)
```
UPDATE Actor
SET name = "Fernanda Montenegro", salary = 1000000 ,  birth_date = "1929-11-16", gender = "female"
WHERE id = "005";
```

d) 
```
UPDATE Actor
SET name = "Fernanda Montenegro", salary = 1000000 ,  birth_date = "1929-11-16", gender = "female"
WHERE id = "008";
```

Não foi retornado nenhum erro, porém nenhuma linha foi atualizada.

### Exercício 3

a)
```
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";
```

b)
```
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4

a)
```
SELECT max(salary) as salario_maximo
From Actor;
```

b) 
```
SELECT min(salary) as salario_minimo_atrizes
FROM Actor
WHERE gender = "female";
```

c)
```
SELECT count(*) as quantidade_atrizes
FROM Actor
WHERE gender = "female";
```

d) 
```
SELECT sum(salary) as soma_salario
FROM Actor;
```

### Exercício 5

a) A última query está fazendo a contagem de atores pelo gênero e os separando em dois grupos (male e female)

b) 
```
SELECT id,name as ordem_alfabetica_decrescente
FROM Actor
ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor
ORDER BY salary;
```

d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)
```
SELECT AVG(salary)
FROM Actor
group by gender;
```

### Exercício 6

a)
```
ALTER TABLE Movies
ADD playing_limit_date VARCHAR(255);
```

b)
```
ALTER TABLE Movies
CHANGE rating rating FLOAT;
```

c)
```
UPDATE Movies
SET playing_limit_date = "2023-01-08"
WHERE id = "004";

UPDATE Movies
SET playing_limit_date = "2022-05-05"
WHERE name = "Doce de mãe";
```

d)
```
DELETE FROM Movies
Where id = "001";

UPDATE MOVIES
SET synopsis = "Filme belezinha demais"
WHERE id = "001";
```

Não é encontrado nenhum erro, porém nenhuma linha é atualizada.


