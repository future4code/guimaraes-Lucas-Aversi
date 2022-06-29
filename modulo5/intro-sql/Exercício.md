>Introdução ao SQL

### Exercício 1

A -> *VARCHAR* = STRING
     *DATE* = DATA
     *PRIMARYKEY* = CHAVE PRIMÁRIA DA TABELA 
     *NOT NULL* = INPUT NÃO PODE SER NULO

B -> *O comando show databases retornou a database que esta sendo trabalhada, o comando show tables mostrou as tabelas criadas*

C -> *Foi possível visualizar todas as propriedades da tabela selecionada*

### Exercício 2

A -> INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

B -> *Ao tentar fazer uma entrada com a mesma PK, um erro de entrada duplicada é mostrado*

C -> *Faltam as entradas de data e gênero*

INSERT INTO Actor (id, name, salary,birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

D ->*O campo nome nao tinha um valor padrão*

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Zé Gaiola",
  400000,
  "1949-04-18", 
  "male"
);

E ->*O valor de data precisava ser passado como string ao invés de numero*

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

F ->

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Ator Global1",
  1200.33,
  1979-03-26, 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Atriz Global2",
  458999.33,
  1979-03-26, 
  "female"
);

### Exercício 3

A -> *SELECT * FROM Actor where gender = "female"*

B -> *SELECT salary from Actor WHERE gender = "male"*

C- > *SELECT id from Actor WHERE gender = invalid*
     *Retornou um erro dizendo que era desconhecida qualquer coluna invalid dentro do WHERE*

D -> *SELECT id from Actor WHERE salary >= 50000*

E -> *SELECT id, name from Actor WHERE id = "002"*
     *O erro estava no nome do campo que era nome ao invés de name*

