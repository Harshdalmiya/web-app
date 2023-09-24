import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import { styled } from 'styled-components'
import {mobile} from '../Responsive'
const Container=styled.div`
display:flex;
${mobile({flexDirection:'column'})}
`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Logo=styled.h1`
`
const Des=styled.p`
margin:20px 0px;`
const Socialcontainer=styled.div`
display:flex;`
const Socialicon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin:20px;
`
const Center=styled.div`
flex:1;
padding:20px;
${mobile({display:'none'})}
`
const Title=styled.h3`
margin-bottom:30px;`
const List=styled.ul`
margin:0px;
padding:0px;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const Listitems=styled.li`
width:50%;
margin-bottom:10px;`

const Right=styled.div`
flex:1;
padding:20px;
`
const Contactitem=styled.p`
display:flex;
align-items:center;
`
const Payment=styled.img`
`


const Footer = () => {
  return (
    <div>
        <Container>
            <Left>
                <Logo>SAIL.</Logo>
                <Des>At SAIL, we believe that shopping should be a delightful and convenient experience. Our goal is to provide you with a seamless and enjoyable online shopping journey, right from the comfort of your own home.</Des>
                <Socialcontainer>
                    <Socialicon color='385999'>
                        <Facebook/>
                    </Socialicon>
                    <Socialicon color='E4405F'>
                        <Instagram/>
                    </Socialicon>
                    <Socialicon color='55ACEE'>
                        <Pinterest/>
                    </Socialicon>
                    <Socialicon color='E60023'>
                        <Twitter/>
                    </Socialicon>
                </Socialcontainer>
            </Left>
            <Center>
                 <Title>Useful Links</Title>
                 <List>
                     <Listitems>Home</Listitems>
                     <Listitems>Cart</Listitems>
                     <Listitems>Mens Fashion</Listitems>
                     <Listitems>Asseccories</Listitems>
                     <Listitems>My Account</Listitems>
                     <Listitems>Order Tracking</Listitems>
                     <Listitems>Wishlist</Listitems>
                 </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <Contactitem><Room/> Knowledge park-04,Greater Noida,Gautum Buddh Nagar,U.P. </Contactitem>
                <Contactitem><Phone/>+12636765</Contactitem>
                <Contactitem><Mail/>contact@sal14.com</Contactitem>
                <Payment src='http://i.ibb.co/Qfvn4z6/payment.png'/>
            </Right>
        </Container>
      
    </div>
  )
}

export default Footer
