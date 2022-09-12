### Exercício 1
```
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
bith_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;

SELECT * FROM Table; 
```

a) VARCHAR: Conjunto de dados de caracteres de comprimento variável, nesse caso, com 255 caractéres. PRIMARY KEY: Campo em uma tabela que identifica exclusivamente cada linha/registro em uma tabela de banco de dados, contenco valores exclusivos. NOT NULL: Valor não pode ser nulo/vazio;

b) SHOW DATABASES mostra todas as databases existentes, enquanto o SHOW TABLES mostra todas as tabelas existentes;

c) O comando DESCRIBE Actor mostra toda a estrutura da tabela Actor;

### Exercício 2

a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b)O erro que é mostrado é o 1062, que é o de entrada duplicada de key primaria. Como o ID contém o comando PRIMARY ID, o valor adicionado a eles é exclusivo, não podendo ser repetido;

c) Error code 1136. A contagem da coluna não combina com a contagem de valores da linha 1.

```
INSERT INTO Actor (id, name, salary, birth_date,gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) Error code 1364. O campo "name" não tem um valor padrão.

```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes"
  400000,
  "1949-04-18", 
  "male"
);
```

e) Error code 1292. Valor de data incorreto: '1950' para a coluna "birth_date" na linha 1(O valor digitado não está envolvido por "").

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f) 

```
INSERT INTO Actor (id,name,salary,birth_date,gender)
VALUES(
"006",
"Alice Braga",
8000000,
"1983-04-15",
"female"
);
```

### Exercício 3

a)
```
SELECT * FROM Actor
WHERE gender = "female";
```

b)
```
SELECT salary FROM Actor
WHERE name = "Tony Ramos";
```

c) Não foi retornada nenhuma linha e os valores vieram todos com NULL

d)  
```
SELECT id,name,salary FROM Actor
Where salary <= 500000;
```

e)  Error code 1054: A coluna "nome" é desconhecida na lista de campos

```
SELECT id, name from Actor WHERE id = "002"	;
```

### Exercício 4

a)
```
SELECT * FROM Actor
WHERE name LIKE "A%" OR name LIKE"J%" AND salary > 300000
```

b) 
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" and salary > 350000;
```

c)
```
Select * FROM Actor
WHERE name LIKE "%G%" OR name LIKE"%g%";
```

d) 
```
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%" AND salary BETWEEN 350000 AND 900000);
```

### Exercício 5

a) TEXT é um tipo de dado padrão para armazenar strings de caracteres especiais com tamanhos máximos ou conforme definido. Na ordenação de seu conjunto de caracteres, são construídas as avaliações e ordenações.
```
CREATE TABLE MOVIES (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
release_date DATE NOT NULL,
rating FLOAT NOT NULL
); 
```

b)
```
INSERT INTO Movies (id,name,synopsis,release_date,rating)
VALUES ("001",
"Se EU Fosse Você", 
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7);
```

c)
```
INSERT INTO Movies(id,name,synopsis,release_date,rating)
VALUES("002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10);
```

d)
```
INSERT INTO Movies(id,name,synopsis,release_date,rating)
VALUES("003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8;
```
e)
```
INSERT INTO Movies(id,name,synopsis,release_date,rating)
VALUES ("004",
"Cidade de Deus",
"Buscapé (Alexandre Rodrigues) é um jovem pobre, negro e muito sensível, que cresce em um universo de muita violência. Buscapé vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos da cidade. Amedrontado com a possibilidade de se tornar um bandido, Buscapé acaba sendo salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É através de seu olhar atrás da câmera que Buscapé analisa o dia-a-dia da favela onde vive, onde a violência aparenta ser infinita.",
"2002-08-30",
9);
```

### Exercício 6

a)
```
SELECT id,name,rating FROM Movies
WHERE id = "003";
```

b) 
```
SELECT * FROM Movies
WHERE name = "Cidade de Deus";
```

c)
```
SELECT id,name,synopsis FROM Movies
WHERE rating >=7;
```

### Exercício 7

a) 
```
SELECT * FROM Movies
WHERE name LIKE "%vida%";
```

b)
```
SELECT * FROM Movies
WHERE name LIKE "%cidade%" OR synopsis LIKE "%cidade%";
```

c)
```
SELECT * FROM Movies
WHERE release_date < "2022-08-22";
```

d)
```
SELECT * FROM Movies
WHERE release_date < "2022-08-22" AND (name LIKE "%dona%" OR  synopsis LIKE "%dona%") AND rating > 7;
```