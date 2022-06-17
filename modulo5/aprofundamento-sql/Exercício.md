**Aprofundamento SQL**

### Exercício 1

A -> *Exclusão da coluna salary*

B -> *Altera o máximo de caracteres da coluna gender para 6 caracteres*

C-> *ALTER TABLE Actor MODIFY gender VARCHAR(100);*

### Exercício 2

A -> *Exclusão da coluna salary*

B-> UPDATE Actor
SET name = "Aversi", birth_Date = "2015/05/25"
WHERE id = "003"

C->UPDATE Actor
SET name = "JULIANA PAES"
WHERE name="Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name="JULIANA PAES";

D-> UPDATE Actor
SET name = "Aversi", birth_Date = "1991/02/26", salary = 100000, gender = "male"
WHERE id = "005";

E-> UPDATE Actor
SET name = "Aversi", birth_Date = "1991/02/26", salary = 100000, gender = "male"
WHERE id = "1000";
**Não retornou erro porém nada foi afetado.**

### Exercício 3

A-> DELETE FROM Actor WHERE name = "Fernanda Montenegro";

B-> DELETE FROM Actor WHERE gender = "male" AND salary >1000000; 

### Exercício 4

A-> SELECT MAX(salary) FROM Actor;

B-> SELECT MIN(salary) FROM Actor WHERE gender = "female";

C-> SELECT COUNT(*) FROM Actor WHERE gender = "female";
 
D-> SELECT SUM(salary) FROM Actor;

### Exercício 5

A-> *conta quantos elementos de cada genero na tabela*

B-> SELECT id, name FROM Actor ORDER BY name DESC;

C-> SELECT * FROM Actor ORDER BY salary;

D-> SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

E-> SELECT AVG(salary), gender FROM Actor GROUP BY gender;







