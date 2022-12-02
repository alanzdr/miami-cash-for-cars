import { NextApiHandler } from 'next';

export interface IConversionBody {
  email: string
  model: string
  make: string
  phone: string
}

export interface IConversionController {
  store: NextApiHandler
}
