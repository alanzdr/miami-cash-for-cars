import { NextApiHandler } from 'next';

import { ILead } from 'conversion';
import { HubspotContext } from 'services/Hubspot/Form/types';

export interface IConversionBody {
  context: HubspotContext,
  data: {
    lead: ILead,
  }
}

export interface IConversionController {
  store: NextApiHandler
}
