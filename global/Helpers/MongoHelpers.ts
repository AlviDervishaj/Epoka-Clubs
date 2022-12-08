import { MongoClient, MongoClientOptions } from "mongodb";

if (!process.env.NEXT_PUBLIC_MONGO_CONNECTION) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri: string = process.env.NEXT_PUBLIC_MONGO_CONNECTION as string;
const options: MongoClientOptions = {};

// In production mode, it's best to not use a global variable.
const client: MongoClient = new MongoClient(uri, options);
const MongoClientConnection: Promise<MongoClient> = client.connect();

export { MongoClientConnection };
