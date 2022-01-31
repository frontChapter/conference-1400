import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const diff = moment("2022-03-01 09:00:00").diff(moment());
  res.status(200).send(diff);
};

export default handler;
