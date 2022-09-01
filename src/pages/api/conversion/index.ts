import { NextApiRequest, NextApiResponse } from 'next'
import { createRouter } from 'next-connect'
import cors from 'cors'

import ConversionController from 'controllers/Conversion'

const router = createRouter<NextApiRequest, NextApiResponse>()

const conversion = ConversionController()

router.use(cors())

router.post(conversion.store)

export default router.handler({
  onNoMatch: (req, res) => {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
})
