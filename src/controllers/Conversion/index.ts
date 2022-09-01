import { NextApiHandler } from 'next';

import { IConversionBody, IConversionController } from './types';

/**
 * Conversion Controller API Handler
 * @return {IConversionController} Conversion Controller
 */
function ConversionController() : IConversionController {

  const store : NextApiHandler = async (req, res) => {
    const { data } = req.body as IConversionBody;

    try {
      console.log({
        data
      });

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
