import React from 'react'
import { Form ,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../index.css"
import {useNavigate} from "react-router-dom"
export default function Register() {
  const navigate= useNavigate()

  return (
    <div className='centerMe bggrading'>
    <Form className='w-40 glassbg  p-4 '>
        <h1 className='text-center heading '>Sign up</h1>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" className='inputfields' required />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" className='inputfields'  required/>
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicRPassword">
     <Form.Label>R-Password</Form.Label>
     <Form.Control type="password" className='inputfields'  required/>
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
     <Form.Label>Mobile Number</Form.Label>
     <Form.Control type="tel" className='inputfields'  required/>
   </Form.Group>
   <Button  className='w-100 inputfields' type="submit">
     Sign Up
   </Button>
   <p className='text-center mt-2 '><button type='button' className="forgetPassword" onClick={()=>{navigate("/login")}}>Log In</button></p>
 </Form>
     </div>
  )
}
