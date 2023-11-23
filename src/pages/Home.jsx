import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import "../styles/Home.css";
import axios from 'axios';

 const Home = () => {
  const [res,setRes] = useState({})
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if(user && user.token){
      getData(user.token)
    }
  },[])

  const getData = async (token) =>{
    try {
      const config = {
        headers: {
          Authorization: token
        }
      }

      const response = await axios.get("http://localhost:3000/home/", config);
      console.log(config);

      if(response.data === "Invalid Token"){
        alert("login again");
      }else if (response.data === "Server Busy"){
        alert("Unauthorized usage")
      }else if(response?.status === true){
        setRes(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }



  return (
   <Container>
    <h1>
        Welcome USER!
    </h1>
    <p>Hope you have a wonderful time with us {res.name}</p>
    <Button variant='primary' type='submit'>Get Started</Button>
   </Container>
  )
}

export default Home;