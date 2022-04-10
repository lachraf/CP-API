import React from 'react'
import {Card, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function UserCard({user}) {
  return (

<Link className='Link' to={`/UserList/${user.username}`}>
      <article className="UserCard">
        <Card  style={{ border:"3px solid rgb(255, 0, 0)", width: "15rem", height: "32rem", marginRight: "30px", marginTop:"30px", backgroundColor: " rgb(255, 0, 0) ; ", borderRadius: "8px"}}>
          <Card.Header style={{ fontWeight: "bold", fontSize: "15px", color: " rgb(255, 0, 0)  ",textAlign:"center" }}>NAME: {user.name}</Card.Header>
          <Image className="post" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png" style={{ borderRadius: "3%", textAlign: "center" }} />
          <Card.Body>
            <Card.Title style={{ fontSize: "18px", color: " rgb(255, 0, 0)  ", fontWeight: "bolder",fontFamily:"monospace",textAlign:"center"}}> USERNAME: {user.username} </Card.Title>
            <Card.Title style={{ fontSize: "18px", color: " rgb(255, 0, 0)  ", fontWeight: "bolder",fontFamily:"monospace",textAlign:"center"}}> USERNAME: PHONE: {user.phone} </Card.Title>
            <Card.Title style={{ fontSize: "18px", color: " rgb(255, 0, 0)  ", fontWeight: "bolder",fontFamily:"monospace",textAlign:"center"}}> WEBSITE: {user.website} </Card.Title>
            <Card.Text style={{ fontSize: "12px", fontWeight: "bolder", color: " rgb(255, 0, 0)  ", textAlign: "center" }}>
              {user.rating}
              <Rating rate={user.rating} />
              </Card.Text>
              </Card.Body>
              </Card>
              </article>
              </Link>
              )
            }
export default UserCard