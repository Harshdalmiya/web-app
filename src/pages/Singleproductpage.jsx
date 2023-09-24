import React, { useState } from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Add, Remove } from '@material-ui/icons'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {mobile} from '../Responsive'
const Container=styled.div``
const PContainer=styled.div`
display:flex;
justify-content:space-between;
margin:40px;
${mobile({flexDirection:'column',margin:'10px'})}
`
const Imagecontainer=styled.div`
flex:1;

`
const Image=styled.img`
height:90%;
width:70%;
${mobile({width:'100%'})}

`
const Infocontainer=styled.div`
flex:1;
`
const Title=styled.h1``
const Des=styled.div`
margin:20px 0px;
font-size:20px;`
const Price=styled.span`
font-weight:600;
font-size:40px;
`
const Filtercontainer=styled.div`
width:50%;
display:flex;
justify-content:space-between;
${mobile({width:'100%'})}
`
const Filter=styled.div`
display:flex;
align-items:center;
`
const Filtercolor=styled.button`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin: 0px 5px;
cursor:pointer;
border-color:black;
`
const Filtertitle=styled.h1`
font-size:20px;
font-weight:300;
`
const Filterselect=styled.select`
margin-left:10px;
width:80px;
height:40px;
padding:10px;
`
const Filteroption=styled.option``
const Amountcontainer=styled.div`
display:flex;
align-items:center;
font-weight:700;
`
const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border: 1px solid black;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
font-size:20px;
`

const Button=styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;
&:hover{
    background-color:#f8f4f4;
}
${mobile({width:'130px'})}
`
const Addcontainer=styled.div`
margin:30px 0px;
width:50%;
display:flex;
justify-content:space-between;
${mobile({width:'100%'})}
`


const Singleproductpage = () => {
    const[Amt,setAmt]=useState(1)
   const handleonclick=()=>{
    if(Amt<=0){
        setAmt(0);
    }
    else{
        setAmt(Amt-1);

      }}
      const handleupclick=()=>{
        setAmt(Amt+1);

      }

   
  return (
    
    <Container>
        <Navbar/>
        <Announcement/>
        <PContainer>
          <Imagecontainer>
            <Image src='https://wewhoroam.com/wp-content/uploads/2020/10/legendary-whitetails-mens-rugged-full-zip-dakota-utility-jacket2-scaled.jpg'/>
          </Imagecontainer>
        
          <Infocontainer>
            <Title>Dakota Jacket</Title>
            <Des>The Dakota jacket is a versatile and stylish piece of outerwear that exudes a rugged and timeless charm.Crafted from durable materials such as cotton canvas or waxed cotton, the Dakota jacket offers exceptional durability and protection against the elements.</Des>
            <Price>Rs 6000</Price>
            <Filtercontainer>
                <Filter>
                    <Filtertitle>Color</Filtertitle>
                    <Filtercolor color='black'/>
                    <Filtercolor color='blue'/>
                    <Filtercolor color='brown'/>

                </Filter>
                <Filter>
                    <Filtertitle>Size</Filtertitle>
                    <Filterselect>
                        <Filteroption>XS</Filteroption>
                        <Filteroption>S</Filteroption>
                        <Filteroption>M</Filteroption>
                        <Filteroption>L</Filteroption>
                        <Filteroption>XL</Filteroption>
                        <Filteroption>XXL</Filteroption>
                    </Filterselect>
                </Filter>
            </Filtercontainer>
            <Addcontainer>
              <Amountcontainer>
                <Remove onClick={handleonclick}/>
                <Amount>{Amt}</Amount>
                <Add onClick={handleupclick}/>
              </Amountcontainer>
              <Button>ADD TO CART</Button>
            </Addcontainer>
            
          </Infocontainer>
        </PContainer>
        <Newsletter/>
        <Footer/>
        
      
    </Container>
    
  )
}

export default Singleproductpage
