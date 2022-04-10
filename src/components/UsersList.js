import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Spinner} from 'react-bootstrap'
import UserCard from './UserCard'
function UsersList() {
  
    const [users, setUsers] = useState()
    const [error, setError] = useState(null)
    useEffect(() => {
     axios
     .get("https://jsonplaceholder.typicode.com/users")
     .then(res=>setUsers(res.data))
     .catch(err=>setError(err))
    }, [])
   // console.log(users)

  return (
<>

    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",color:"red"}}>
   {error?<Spinner animation="border" />:users && React.Children.toArray(users.map(el=> <UserCard user={el} />))}
    </div>
    </>)
}

export default UsersList