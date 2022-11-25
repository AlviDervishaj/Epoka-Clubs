// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Document, WithId, InsertOneResult } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'

// Mongo Helpers
import { MongoActions } from "../../../helpers";
import { StudentData, APIReturnType } from '../../../helpers/Types';

// import bcrypt
const bcrypt = require('bcrypt');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIReturnType>
) {
  const { email, password }: { email: string, password: string } = req.body;


  const mongo: MongoActions = new MongoActions();
  const checkIfUserExists: WithId<Document> | null = await mongo.findOneDocument({ email });
  // compare passwords using bcrypt
  if (checkIfUserExists) {
    const comparePasswords: boolean = await bcrypt.compare(password, checkIfUserExists.password);
    if (comparePasswords) {
      res.json({ info: "Sign In Successfull.", getUser: checkIfUserExists, code: 200 });
      return res.end();
    }
    res.json({ info: "Incorrect password.", error: "auth/incorrect-password", code: 401 });
    return res.end();
  }
  // hash password using bcrypt
  const hashedPassword: string = await bcrypt.hash(password, 12);
  // create username
  const username: string = email.split('@')[0];

  const user: StudentData = {
    name: username,
    epokaId: "",
    email,
    dateCreated: new Date().toISOString(),
    photoURL: '',
    emailVerified: false,
    password: hashedPassword,
  };
  // save user to mongo
  const result: InsertOneResult<Document> = await mongo.insertOneDocument(user);

  res.json({ info: "Created User Successfully", insertedResult: result, code: 200 });
  return res.end();
}
