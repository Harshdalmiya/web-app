import { ArrowBackIosOutlined, ArrowForwardIos } from '@material-ui/icons'
import React,{useState} from 'react'
import { styled } from 'styled-components'
import {mobile} from '../Responsive'
const Container=styled.div`
     width:100%;
     height:100vh;
     display:flex;
     background-color:#e7e0e0;
     position:relative;
     ${mobile({display:'none'})}
     `
const Arrow=styled.div`
    width:50px;
    height:50px;
    background-color:white;
    color:black;
    display:flex;
    border-radius:50%;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin:auto;
    opacity:.5;
    z-index:2;
    `
const Wrapper=styled.div`
      height:100%;
      display:flex;
      transition:all 1.5s ease;
      transform:translateX(${props=>props.SliderIndex*-100}vw);
      `      
    
const Slide=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color:${props=>props.color}
    `    
const Imgcontainer=styled.div`
    flex:1;
    height:100%;
    margin-left:50px;
` 
const Img=styled.img`
    height:80%;
    `   
const Infocontainer=styled.div`
    flex:1;
    align-items:center;
     `  
const Title=styled.h1`
   font-size:70px;
   color:black;
   font-weight:bold;
  `       
const Des=styled.p`
   margin: 50px 0px;
   font-size:30px;
   font-weight:500;
   color:black;
   letter-spacing:3px;
`
const Button=styled.button`
  background-color:transparent;
  padding:10px;
  font-size:20px;
  cursor:pointer;
`


const Slider = () => {
   const[SliderIndex,setSliderIndex]=useState(0)
   const handleonclick=(direction)=>{
     if(direction==='left'){
        setSliderIndex(SliderIndex>0?SliderIndex-1:3);
      }
     else{
        setSliderIndex(SliderIndex<3?SliderIndex+1:0);

      }

   }
  return (
    <Container>
        <Arrow direction='left' onClick={()=>handleonclick("left")}>
             <ArrowBackIosOutlined/>
        </Arrow>
        <Wrapper SliderIndex={SliderIndex}>
           <Slide color="#ebdcd9">
              <Imgcontainer>
                 <Img src='https://pngimg.com/uploads/tshirt/tshirt_PNG5433.png'/>
              </Imgcontainer>
              <Infocontainer>
                <Title>SUMMER SALE</Title>
                <Des>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF ON ALL PRODUCTS</Des>
                <Button>SHOP NOW</Button>


              </Infocontainer>
           </Slide>
           <Slide color='#9fde9f'>
              <Imgcontainer>
                 <Img src='https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png'/>
              </Imgcontainer>
              <Infocontainer>
                <Title> SALE ON SHOES</Title>
                <Des>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF ON ALL PRODUCTS</Des>
                <Button>SHOP NOW</Button>


              </Infocontainer>
           </Slide>
           <Slide color='#e1e3c5'>
              <Imgcontainer>
                 <Img src='https://www.pngarts.com/files/4/Watch-Download-Transparent-PNG-Image.png'/>
              </Imgcontainer>
              <Infocontainer>
                <Title> WATCHES </Title>
                <Des>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF ON ALL PRODUCTS</Des>
                <Button>SHOP NOW</Button>


              </Infocontainer>
           </Slide>
           <Slide color='#eff0e2'>
              <Imgcontainer>
                 <Img src='https://purepng.com/public/uploads/large/purepng.com-mens-jeansgarmentlower-bodydenimjeansbluewash-1421526363350ek44q.png'/>
              </Imgcontainer>
              <Infocontainer>
                <Title>SUPER TRENDY JEANS</Title>
                <Des>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF ON ALL PRODUCTS</Des>
                <Button>SHOP NOW</Button>


              </Infocontainer>
           </Slide>
        </Wrapper>
        
        <Arrow direction='right' onClick={()=>handleonclick("right")}>
             <ArrowForwardIos/>
        </Arrow>


      
      </Container>
  )
}

export default Slider
