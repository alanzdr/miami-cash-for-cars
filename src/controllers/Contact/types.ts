import { NextApiHandler } from 'next';


export interface IContactBody {
  email: string,
  name: string,
  phone: string,
}

export interface IContactController {
  store: NextApiHandler
}
