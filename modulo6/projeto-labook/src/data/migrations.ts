import connection from "./connection";
import users from "./tables/users.json"
import posts from "./tables/posts.json"
import friendship from "./tables/friendship.json"


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

   CREATE TABLE IF NOT EXISTS labook_friendships(
      idRequest VARCHAR(255) PRIMARY KEY,
      sender VARCHAR(255) NOT NULL,
      reciever VARCHAR(255) NOT NULL,
      FOREIGN KEY (reciever) REFERENCES labook_users (id),
      FOREIGN KEY (sender) REFERENCES labook_users (id)
   );


   `)
   .then(() => { console.log("As 3 tabelas foram criadas!") })
   .catch(printError);

const insertUsers = () => connection("labook_users")
   .insert(users)
   .then(() => { console.log("Tabela users foi populada com sucesso!!") })
   .catch(printError);

const insertPosts = () => connection("labook_posts")
.insert(posts)
.then(() => { console.log("Tabela posts foi populada com sucesso!!") })
.catch(printError);

const insertFriendship = () => connection("labook_friendships")
.insert(friendship)
.then(() => { console.log("Tabela friendship foi populada com sucesso!!") })
.catch(printError);


const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .then(insertPosts)
   .then(insertFriendship)

   .finally(closeConnection);
