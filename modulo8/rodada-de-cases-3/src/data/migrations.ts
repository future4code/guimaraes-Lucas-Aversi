import connection from "./connection";
import PokemonGoTable  from "./tables/PokemonGo.json"




const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

const createTables = () => connection
   .raw(`
   CREATE TABLE IF NOT EXISTS pokemonGo_pokemons(
      Id VARCHAR(255) PRIMARY KEY,
      Name VARCHAR(255) NOT NULL,
      Pokedex_Number VARCHAR(255) NOT NULL,
      Img_Name VARCHAR(255) NOT NULL,
      Generation VARCHAR(255) NOT NULL,
      Evolution_Stage VARCHAR(255) NOT NULL,
      Evolved VARCHAR(255) NOT NULL,
      FamilyID VARCHAR(255) NOT NULL,
      Cross_Gen VARCHAR(255) NOT NULL,
      Type_1 VARCHAR(255) NOT NULL,
      Type_2 VARCHAR(255) NOT NULL,
      Weather_1 VARCHAR(255) NOT NULL,
      Weather_2 VARCHAR(255) NOT NULL,
      STAT_TOTAL VARCHAR(255) NOT NULL,
      ATK VARCHAR(255) NOT NULL,
      DEF VARCHAR(255) NOT NULL,
      STA VARCHAR(255) NOT NULL,
      Legendary VARCHAR(255) NOT NULL,
      Aquireable VARCHAR(255) NOT NULL,
      Spawns VARCHAR(255) NOT NULL,
      Regional VARCHAR(255) NOT NULL,
      Raidable VARCHAR(255) NOT NULL,
      Hatchable VARCHAR(255) NOT NULL,
      Shiny VARCHAR(255) NOT NULL,
      Nest VARCHAR(255) NOT NULL,
      New VARCHAR(255) NOT NULL,
      Not_Gettable VARCHAR(255) NOT NULL,
      Future_Evolve VARCHAR(255) NOT NULL,
      Max_CP_at_40 VARCHAR(255) NOT NULL,
      Max_CP_at_39 VARCHAR(255) NOT NULL
   );

   
   `)
   .then(() => { console.log("A tabela foi criada!") })
   .catch(printError);

const insertPokemons = () => connection("pokemonGo_pokemons")
   .insert(PokemonGoTable)
   .then(() => { console.log("A tabela foi populada com sucesso") })
   .catch(printError);



const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertPokemons)
   .finally(closeConnection);
