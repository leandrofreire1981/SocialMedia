import type { NextApiRequest, NextApiResponse } from 'next'
import next from 'next'

import {  getPublications, postPublication } from '../../../controllers/publications'

type Data = {
  name: string
}

export default async function publicationsRouter(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   const { method } = req
  switch (method) {
    case "GET":
      return res.status(200).json({name: await getPublications()})
      break;
    
    case "POST":
      return res.status(200).json( {name: await postPublication(req.body)} )
      break;
  
    default:
      break;
  } 


}