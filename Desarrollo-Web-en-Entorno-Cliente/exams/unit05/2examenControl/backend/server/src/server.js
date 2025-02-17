import { MongoClient } from "mongodb";
import http from "http";

const DATABASE_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const DATABASE_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
const DATABASE_DB = process.env.MONGO_INITDB_DATABASE;
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_PORT = process.env.DATABASE_PORT;
const DATABASE_COLLECTION = process.env.DATABASE_COLLECTION;

const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;

const URI = `mongodb://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}`;
const client = new MongoClient(URI);
const db = client.db(DATABASE_DB);
const collection = db.collection(DATABASE_COLLECTION);

async function main() {
  try {
    // Connect to Mongo
    await client.connect();
    console.log("Connected to Mongo!");
    // Create server and listen for requests
    const server = http.createServer();
    // Query Mongo
    server.on("request", async (req, res) => {
      const result = await collection.findOne();
      res.end(JSON.stringify(result));
    });
    server.listen(SERVER_PORT, SERVER_HOST);
  } catch (err) {
    console.error("Something went wrong", err);
  }
}

main()
  .then(() => console.log("Server started!"))
  .catch((err) => console.error("Something went wrong", err));
