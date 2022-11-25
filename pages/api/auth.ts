// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Document, InsertOneResult } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'

// Mongo Helpers
import { MongoActions } from "../../helpers";
import { StudentData } from '../../helpers/Types';

// import bcrypt
const bcrypt = require('bcrypt');


type Data = {
  info: string | StudentData | InsertOneResult<Document>,
  error?: string,
  code: 200 | 400 | 401 | 500,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password }: { email: string, password: string } = req.body;
  // hash passwordo
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
  const mongo: MongoActions = new MongoActions();
  const result: InsertOneResult<Document> = await mongo.insertOneDocument(user);

  res.json({ info: result, code: 200 });
  return res.end();
}
