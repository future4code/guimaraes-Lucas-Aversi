import connection from "./connection";
import users from "./tables/users.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

const createTables = () => connection
   .raw(`
   CREATE TABLE IF NOT EXISTS labook_users(
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS labook_posts(
      id VARCHAR(255) PRIMARY KEY,
      photo VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      type ENUM("normal","event") DEFAULT "normal",
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      author_id VARCHAR(255),
      FOREIGN KEY (author_id) REFERENCES labook_users (id)
   ); 
   `)
   .then(() => { console.log("As 2 tabelas foram criadas!") })
   .catch(printError);

const insertUsers = () => connection("labook_users")
   .insert(users)
   .then(() => { console.log("Tabela users foi populada com sucesso!!") })
   .catch(printError);


const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .finally(closeConnection);
