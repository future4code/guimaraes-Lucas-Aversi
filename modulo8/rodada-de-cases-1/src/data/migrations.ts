import connection from "./connection";
import users from "./tables/users.json"
import walk from "./tables/walk.json"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

const createTables = () => connection
   .raw(`
   CREATE TABLE IF NOT EXISTS dogWalking_users(
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role ENUM ("NORMAL","ADMIN") NOT NULL DEFAULT ("NORMAL")
   );
   
   CREATE TABLE IF NOT EXISTS dogWalking_walk(
      id VARCHAR(255) PRIMARY KEY,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      status ENUM ("TO DO","HAPPENING", "DONE") NOT NULL DEFAULT ("TO DO"),
      latitude VARCHAR(255) NOT NULL,
      longitude VARCHAR(255) NOT NULL,
      walk_date DATE NOT NULL,
      start_walk TIME NOT NULL,
      finish_walk TIME NOT NULL,
      quantity_dogs INT NOT NULL,
      client_id VARCHAR(255) NOT NULL,
      FOREIGN KEY (client_id) REFERENCES dogWalking_users (id)
   );

   
   `)
   .then(() => { console.log("As 2 tabelas foram criadas!") })
   .catch(printError);

const insertUsers = () => connection("dogWalking_users")
   .insert(users)
   .then(() => { console.log("Tabela users foi populada com sucesso!!") })
   .catch(printError);

const insertWalk = () => connection("dogWalking_walk")
   .insert(walk)
   .then(() => { console.log("Tabela walk foi populada com sucesso!!") })
   .catch(printError);


const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .then(insertWalk)
   .finally(closeConnection);
