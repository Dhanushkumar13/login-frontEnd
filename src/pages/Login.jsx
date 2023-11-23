import React,{useState} from 'react'
import {Container,Form,Button} from 'react-bootstrap';
import '../styles/Login.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

 const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }   

    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const response = await axios.post(`http://localhost:3000/login`, formData);
        console.log(response);
        if(response.data === "Invalid Username or password"){
            alert("Invalid Username or password")
        }else if(response.data == "Server Busy"){
            alert("Kindly verify your username or password")
        }else if(response?.status){
            localStorage.setItem("userInfo",JSON.stringify(response.data));
            navigate("/home")
        }
    }

    
  return (
    <Container>
    <h1>Login</h1>
    <Form>
        <Form.Group>
            <Form.Label>Email Id</Form.Label>
            <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} required></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} required></Form.Control>
        </Form.Group>
    </Form>
    <Button variant='primary' type='submit' onClick={handleSubmit}>Login</Button>
    {/* <p>Already have an account</p><Link to="/login"><Login></Login></Link> */}
</Container>
  )
}

export default Login;