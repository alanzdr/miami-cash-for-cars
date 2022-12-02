import { NextApiRequest, NextApiResponse } from 'next'
import { createRouter } from 'next-connect'
import cors from 'cors'

import ContactController from 'controllers/Contact'

const router = createRouter<NextApiRequest, NextApiResponse>()

const contact = ContactController()

router.use(cors())

router.post(contact.store)

export default router.handler({
  onNoMatch: (req, res) => {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
})
