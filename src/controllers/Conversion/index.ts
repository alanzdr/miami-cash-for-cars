import { NextApiHandler } from 'next';

import { IConversionBody, IConversionController } from './types';

/**
 * Conversion Controller API Handler
 * @return {IConversionController} Conversion Controller
 */
function ConversionController() : IConversionController {

  const store : NextApiHandler = async (req, res) => {
    const { email, make, model, phone } = req.body as IConversionBody;

    try {
      console.log({ email, make, model, phone });

      return res.send({ error: false });
    } catch (error) {
      console.error(error);
      return res.status(400).send({ error });
    }
  };

  return {
    store,
  };
}

export default ConversionController;
