import React from 'react'
import { styled } from 'styled-components'
import {mobile} from '../Responsive'
const Container=styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('https://wallpapercave.com/wp/wp8064773.jpg')center;
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper=styled.div`
padding:20px;
width:40%;
background-color:white;
${mobile({width:'75%'})}
`
const Form=styled.form`
display:flex;
flex-wrap:wrap;
`
const Title=styled.h1`
font-size:24px;
font-weight:400;`
const Input=styled.input`
margin:20px 10px 10px 0px;
padding:10px;
flex:1;
min-width:40%;`
const Des=styled.span`
font-size:15px;
margin:20px 0px;`
const Button=styled.button`
width:40%;
height:40px;
border:none;
background-color:black;
color:white;
cursor:pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
            <Input placeholder='Name'/>
            <Input placeholder='Lastname'/>
            <Input placeholder='Username'/>
            <Input placeholder='Email'/>
            <Input placeholder='Password'/>
            <Input placeholder='Confirm Password'/>
            <Des>By creating an account,I consent to processing my personal data in accordance with the <b>PRIVACY POLICY</b></Des>
            <Button>CREATE</Button>
            </Form>
            
            
        </Wrapper>
      
    </Container>
  )
}

export default Register
