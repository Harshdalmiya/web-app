import React from 'react'
import { styled } from 'styled-components'
import {mobile} from '../Responsive'
const Container=styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height:'30vh'})}
`
const Info=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Title=styled.h1`
color:white;
margin:20px;
`
const Button=styled.button`
border:none;
padding:10px;
background-color:white;
color:grey;
cursor:pointer;
font-weight:600px;`

const Categorieitem = (props) => {
  return (
    <Container>
        <Image src={props.img}/>
        <Info>
            <Title>{props.tit}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>

  )
}

export default Categorieitem
