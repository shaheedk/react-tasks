
import { useParams } from 'react-router-dom'

export default function UserDetails() {
  const {userId}=useParams()
 
  // const userId=params.userId;
  return (
    <div>
     <h4> Detail about user {userId} </h4>
    </div>
  )
}
