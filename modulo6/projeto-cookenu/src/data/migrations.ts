import connection from "./connection";
import users from "./tables/users.json"
import recipies from "./tables/recipies.json"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

const createTables = () => connection
   .raw(`
   CREATE TABLE IF NOT EXISTS cookenu_users(
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL
   );
   
   CREATE TABLE IF NOT EXISTS cookenu_recipes(
      id VARCHAR(255) PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      instructions VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      author_id VARCHAR(255),
      FOREIGN KEY (author_id) REFERENCES cookenu_users (id)
   );

   CREATE TABLE IF NOT EXISTS cookenu_follows(
      id VARCHAR(255) PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      following_id VARCHAR(255) NOT NULL,
      FOREIGN KEY (user_id) REFERENCES cookenu_users (id),
      FOREIGN KEY (following_id) REFERENCES cookenu_users (id)
   );
   
   `)
   .then(() => { console.log("As 3 tabelas foram criadas!") })
   .catch(printError);

const insertUsers = () => connection("cookenu_users")
   .insert(users)
   .then(() => { console.log("Tabela users foi populada com sucesso!!") })
   .catch(printError);

const insertRecipes = () => connection("cookenu_recipes")
.insert(recipies)
.then(() => { console.log("Tabela recipies foi populada com sucesso!!") })
.catch(printError);




const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .then(insertRecipes)
   .finally(closeConnection);
