import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import {mobile}from '../Responsive'
const Container=styled.div``
const Wrapper=styled.div``
const Title=styled.h1`
text-align:center;`
const Top=styled.div`
padding:20px;
display:flex;
align-items:center;
justify-content:space-between;`
const Topbutton=styled.button`
margin:0px 20px;
padding:10px;
cursor:pointer;
font-weight:600;
border:${props=>props.type==='filled'?'none':'2px solid black'};
background-color:${props=>props.type==='filled'?'black':'transparent'};
color:${props=>props.type==='filled'?'white':'black'};
`
const Toptexts=styled.div`
display:flex;
${mobile({display:'none'})}`
const Toptext=styled.div`
cursor:pointer;
margin:0px 10px;
text-decoration:underline;
`
const Bottom=styled.div`
display:flex;
margin:20px;
${mobile({flexDirection:'column'})}
`
const Product=styled.div`
width:100%;
flex:2;
display:flex;
`
const Image=styled.img`
width:200px;

`
const Info=styled.div`
width:80%;

display:flex;
${mobile({flexDirection:'column'})}
`
const Productdetail=styled.div`
flex:1;
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const Productcolor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
`

const Productdetails=styled.span`
`
const Pricedetail=styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Productamount=styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const Productquantity=styled.div`
font-size:24px;
margin:5px;
`
const Productprice=styled.div`
font-size:30px;
fount-weight:200;
`
const Hr=styled.hr`
background-color:#eee;
border:none;
height:1px;
`
const Summary=styled.div`
flex:1;
width:40%;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
${mobile({width:'90%'})}
`
const Productcontainer=styled.div`
width:70%;`
const Summarytitle=styled.h1`
font-weight:200;
`
const Summarycontainer=styled.div`
display:flex;
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type==='total'&& '500'};
font-size:${props=>props.type==='total'&& '24px'};
`
const Summarytext=styled.div`

`
const Summaryprice=styled.div``
const SButton=styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
cursor:pointer;
`





const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <Topbutton >CONTINUE SHOPPING</Topbutton>
                <Toptexts>
                    <Toptext>SHOPPING BAG (2)</Toptext>
                    <Toptext>YOUR WISHLIST (0)</Toptext>
                </Toptexts>
                <Topbutton type='filled'>CHECKOUT NOW</Topbutton>

            </Top>
           <Bottom>
            <Productcontainer>
            <Product>
                    <Image src='https://th.bing.com/th/id/R.2f5a76e7de5cdccb6bedc622b85b9503?rik=pVxH%2b0uGsvivew&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fshoes-transparent-background%2fshoes-transparent-background-8.png&ehk=7FafOm%2fGGrflLKBAcQfNuot%2bUx6dnjhMaMI7t1GYJ2I%3d&risl=&pid=ImgRaw&r=0'/>
                    <Info>
                        <Productdetail>
                        <Productdetails><b>Product:</b>Jessie thunder shoes</Productdetails>
                        <Productdetails><b>Id:</b>239601789</Productdetails>
                        <Productcolor color='orange'/>
                        <Productdetails><b>Size:</b>37.5</Productdetails>
                        
                        </Productdetail>
                        <Pricedetail>
                            <Productamount>
                                <Remove/>
                                <Productquantity>2</Productquantity>
                                <Add/>
                            </Productamount>
                            <Productprice>Rs 4000</Productprice>
                        </Pricedetail>
                        
                    </Info>
                </Product>
                
            
            <Hr/>
            <Product>
                    <Image src='https://th.bing.com/th/id/OIP.8bdYs-g3yEerJhWnMFnAfQHaH4?pid=ImgDet&rs=1'/>
                    <Info>
                        <Productdetail>
                        <Productdetails><b>Product:</b>White collar shirt</Productdetails>
                        <Productdetails><b>Id:</b>239601764</Productdetails>
                        <Productcolor color='white'/>
                        <Productdetails><b>Size:</b>XL</Productdetails>
                        
                        </Productdetail>
                        <Pricedetail>
                            <Productamount>
                                <Remove/>
                                <Productquantity>1</Productquantity>
                                <Add/>
                            </Productamount>
                            <Productprice>Rs 1000</Productprice>
                        </Pricedetail>
                        
                    </Info>
                </Product>
            </Productcontainer>
            <Summary>
                <Summarytitle>ORDER SUMMARY</Summarytitle>
                <Summarycontainer>
                    <Summarytext>Subtotal</Summarytext>
                    <Summaryprice>Rs 9000</Summaryprice>
                </Summarycontainer>
                <Summarycontainer>
                    <Summarytext>Shipping amount</Summarytext>
                    <Summaryprice>Rs 500</Summaryprice>
                </Summarycontainer>
                <Summarycontainer>
                    <Summarytext>Discount</Summarytext>
                    <Summaryprice>Rs -1000</Summaryprice>
                </Summarycontainer>
                <Summarycontainer type='total'>
                    <Summarytext >Total</Summarytext>
                    <Summaryprice>Rs 8500</Summaryprice>
                </Summarycontainer>
                <SButton>CHECKOUT NOW</SButton>
            </Summary>

                
                </Bottom>
            

        </Wrapper>
        <Footer/>
      
    </Container>
  )
}

export default Cart
