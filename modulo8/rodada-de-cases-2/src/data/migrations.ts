import connection from "./connection";
import competition from "./tables/competition.json"
import race from "./tables/race.json"
import darts from "./tables/dart.json"





const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

const createTables = () => connection
   .raw(`
   CREATE TABLE IF NOT EXISTS estanteVirtual_competition(
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      status ENUM ("OPEN","FINISHED") DEFAULT ("OPEN")
   );
   
   CREATE TABLE IF NOT EXISTS estanteVirtual_athletics_race(
      id VARCHAR(255) PRIMARY KEY,
      game_id VARCHAR(255) NOT NULL,
      athlete VARCHAR(255) NOT NULL,
      value VARCHAR(255) NOT NULL,
      unit_measure VARCHAR(255),
      FOREIGN KEY (game_id) REFERENCES estanteVirtual_competition (id)
   );

   CREATE TABLE IF NOT EXISTS estanteVirtual_darts(
      id VARCHAR(255) PRIMARY KEY,
      game_id VARCHAR(255) NOT NULL,
      athlete VARCHAR(255) NOT NULL,
      first_attempt VARCHAR(255) NOT NULL,
      second_attempt VARCHAR(255) NOT NULL,
      third_attempt VARCHAR(255) NOT NULL,
      best_attempt VARCHAR(255) NOT NULL,
      unit_measure VARCHAR(255),
      FOREIGN KEY (game_id) REFERENCES estanteVirtual_competition (id)
      
   );

   
   `)
   .then(() => { console.log("As 3 tabelas foram criadas!") })
   .catch(printError);

const insertCompetition = () => connection("estanteVirtual_competition")
   .insert(competition)
   .then(() => { console.log("Tabela competition foi populada com sucesso!!") })
   .catch(printError);

const insertRace = () => connection("estanteVirtual_athletics_race")
   .insert(race)
   .then(() => { console.log("Tabela rave competition foi populada com sucesso!!") })
   .catch(printError);

const insertDarts = () => connection("estanteVirtual_darts")
   .insert(darts)
   .then(() => { console.log("Tabela darts competition foi populada com sucesso!!") })
   .catch(printError);


const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertCompetition) 
   .then(insertRace)
   .then(insertDarts)
   .finally(closeConnection);
