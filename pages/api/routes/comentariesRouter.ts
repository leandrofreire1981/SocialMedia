import type { NextApiRequest, NextApiResponse } from 'next'
import next from 'next'
import { getComentaries, postComentaries } from '../../../controllers/comentaries'

type Data = {
  name: string
}

export default async function comentariesRouter(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   const { method } = req
  switch (method) {
    case "GET":
      return res.status(200).json( {name: await getComentaries()} )
      break;
    
    case "POST":
      return res.status(200).json( {name: await postComentaries(req.body)} )
      break;
  
    default:
      break;
  } 


}



