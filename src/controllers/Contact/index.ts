import { NextApiHandler } from 'next';

import { IContactBody, IContactController } from './types';

/**
 * Conversion Controller API Handler
 * @return {IContactController} Conversion Controller
 */
function ContactController() : IContactController {

  const store : NextApiHandler = async (req, res) => {
    const { email, name, phone } = req.body as IContactBody;

    try {
      console.log({ email, name, phone });

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

export default ContactController;
