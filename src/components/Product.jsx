import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { styled } from 'styled-components'
const Info=styled.div`
width:100%;
height:100%;
display:flex;
background-color:rgba(0,0,0,0.2);
position:absolute;
top:0;
left:0;
align-items:center;
justify-content:center;
z-index:3;
opacity:0;
transition:all 0.5s ease;
cursor:pointer;
`
const Container=styled.div`
flex:1;
margin:5px;
padding:20px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;
position:relative;
&:hover ${Info}{
    opacity:1;
}
`
const Circle=styled.div`

width:300px;
height:300px;
border-radius:50%;
background-color:white;
position:absolute;
display:flex;
justify-content:center;
align-items:center;
position:relative;


`
const Image=styled.img`
height:75%;
z-index:2;
`

const Icons=styled.div`
width:40px;
height:40px;
border-radius:50%;
margin:10px;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.5s ease;
&:hover{
    background-color:white;
    transform:scale(1.1);
}
`

const Product = (props) => {
  return (
    <Container>
        <Circle>
            <Image src={props.img}/>
            </Circle>    
            <Info>
                <Icons><ShoppingCartOutlined/></Icons>
                <Icons><SearchOutlined/></Icons>
                <Icons><FavoriteBorderOutlined/></Icons>

            </Info>
        
      
    </Container>
  )
}

export default Product
