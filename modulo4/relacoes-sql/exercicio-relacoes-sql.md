### Exercício 1

a)Uma Foreign Key é uma coluna, ou combinações de coluna, em uma tabela cujos os valores correspodem aos valores de uma coluna de alguma outra tabela.

b)
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating values
('001','Bom filme', 10, "002"),
('002', 'Mediano',7,"003"),
('003',"ruim", 4, "004");

```

c) Não é possível adicionar ou atualizar uma linha filha pois a uma falha em uma restrição de FOREIGN KEY

d)
```
ALTER TABLE Movies DROP COLUMN rating;
```

e)


### Exercício 2

a)Essa é uma tabela intermediária, onde a utilizamos para relacionar os elementos de uma tabela com vários elementos de outra tabela.

b) 
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004","001"),
("002","001"),
("002","002"),
("003","004"),
("003","001"),
("004","006");
```

c) Não é possível adicionar ou atualizar uma linha filha pois a uma falha em uma restrição de FOREIGN KEY

d) Não é possível excluir ou atualizar uma linha pai.

#### Exercício 3

a) A query está buscando dados de mais de uma tabela, através do operador JOIN. O operador ON está relacionando as colunas de duas tabelas:

b)
```
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```