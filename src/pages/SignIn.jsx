import React,{useState} from 'react'
import {Container,Form,Button} from 'react-bootstrap';
import '../styles/SignUp.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config/global';

 const signUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})  
        console.log(formData) 
    }   

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData)
        try {
          const response = await axios.post(`http://localhost:3000/signin/verify`, formData);
          console.log(response);
          if(response.data === true){
            alert("Registration Link has already been sent to your mail Id")
          }else  if(response.data === false){
            alert("User already exists")
          }
        } catch (error) {
          console.log(error);
          // Handle the error, e.g., display an error message
        }
      };
  return (
    <Container>
        <h1>Registration form</h1>
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' name='name' value={formData.name} onChange={handleChange} required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>EmailId</Form.Label>
                <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} required></Form.Control>
            </Form.Group>
        </Form>
        <Button variant='primary' type='submit' onClick={handleSubmit}>Register</Button>
        <p>Already have an account</p>
        <Link to="/login">Login</Link>
    </Container>
  )
}

export default signUp;
