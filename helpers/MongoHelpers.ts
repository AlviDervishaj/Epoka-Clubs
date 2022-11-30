// Mongo
import { MongoClient, Db, Collection, WithId, Document } from "mongodb";
import {
  ClubData,
  StaffData,
  RequestData,
  StudentData,
  AvailableDatabases,
  BulkDocuments,
  FilterQuery,
  AvailableCollections,
} from "./Types";

export class MongoWrapper {
  protected client: MongoClient;
  protected database: Db;
  protected collection: Collection;

  // constructor
  constructor(
    databaseName: AvailableDatabases = "Student",
    collectionName: AvailableCollections = "StudentData"
  ) {
    this.client = new MongoClient(
      process.env.NEXT_PUBLIC_MONGO_CONNECTION as string
    );
    this.database = this.getClient.db(databaseName);
    this.collection = this.getDatabase.collection(collectionName);
  }

  // getters
  get getClient(): MongoClient {
    return this.client;
  }

  get getDatabase(): Db {
    return this.database;
  }

  get getCollection(): Collection {
    return this.collection;
  }

  // setters

  set setClient(newClient: MongoClient) {
    this.client = newClient;
  }

  set setDatabase(newDatabase: Db) {
    this.database = newDatabase;
  }

  set setCollection(newCollection: Collection) {
    this.collection = newCollection;
  }
}

export class MongoActions extends MongoWrapper {
  constructor(
    databaseName: AvailableDatabases = "Student",
    collectionName: AvailableCollections = "StudentData"
  ) {
    super(databaseName, collectionName);
  }

  // methods

  async insertOneDocument(
    document: StudentData | ClubData | StaffData | RequestData
  ) {
    const result = await this.getCollection.insertOne(document);
    return result;
  }

  // insert many documents
  async insertManyDocuments(documents: BulkDocuments) {
    const result = await this.getCollection.insertMany(documents);
    return result;
  }

  // find one document
  async findOneDocument(filter: FilterQuery | {}) {
    const result: WithId<Document> | null = await this.getCollection.findOne(
      filter
    );
    return result;
  }

  // find many documents
  async findManyDocuments(filter: FilterQuery) {
    const result: Array<WithId<Document>> = await this.getCollection
      .find(filter)
      .toArray();
    return result;
  }
}
