import type { NextApiRequest, NextApiResponse } from 'next'
import next from 'next'
import { getCommentaries, postCommentaries } from '../../../controllers/commentaries'

type Data = {
  name: string
}

export default async function commentariesRouter(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   const { method } = req
  switch (method) {
    case "GET":
      return res.status(200).json( await getCommentaries() )
      break;
    
    case "POST":
      let r = await postCommentaries(req.body)
      res.status(200).json( r )
      break;
  
    default:
      break;
  } 


}



