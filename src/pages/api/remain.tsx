import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const diff = moment.parseZone("2022-03-01T09:00:00+03:30").diff(moment());
  res.status(200).send(diff);
};

export default handler;
