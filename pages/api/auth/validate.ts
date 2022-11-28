
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Document, ObjectId, WithId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'

// Mongo Helpers
import { MongoActions } from "../../../helpers";
import { APIReturnType } from '../../../helpers/Types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIReturnType>
) {
  const { token }: { token: string | null } = req.body;
  if (token === null) {
    res.json({ info: "Token is not valid.", error: "auth/invalid-token", code: 401 });
    return res.end()
  }

  const mongo: MongoActions = new MongoActions('Student', 'StudentData');
  const checkToken: WithId<Document> | null = await mongo.findOneDocument({ _id: new ObjectId(token) });
  console.log({ checkToken });
  // compare passwords using bcrypt
  if (checkToken && checkToken._id) {

    res.json({ info: "Token is valid.", getUser: checkToken, code: 200 });
    return res.end();
  }
  res.json({ info: "Token is not valid.", error: "auth/invalid-token", code: 401 });
  return res.end();
}
