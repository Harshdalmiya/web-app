import { Badge } from '@material-ui/core'
import { AddShoppingCartOutlined, Search} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'
import { Link } from 'react-router-dom'
const Container=styled.div`
    height: 60px;
    margin-bottom:5px;
    padding-bottom:10px;
    ${mobile({height:'50px',backgroundColor:'#efefe2'})}
    
`
const Wrapper=styled.div`
    padding: .5px 20px;
    display: flex;
    justify-content:space-between;
    ${mobile({padding:'0px'})};
    
`
const Language=styled.span`
    font-size: 14px;
    cursor:pointer;
    ${mobile({display:'none'},{width:'0vh'})}
    `
const Input=styled.input`
   border:none;
   ${mobile({width:'50px'})}

`    
const Searchcontainer=styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    padding:5px;
    margin-left:25px;
    

     `    
const Left=styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    
    
    `
const Center=styled.div`
    flex: 1;
    text-align:center;
    
    `
const Logo=styled.h1`
    font-weight:bold;
    ${mobile({fontSize:'24px'})}
    `    
const Right=styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({justifyContent:'center',flex:'2'})}
    
    `
const Menuitem=styled.div`
    font-size=14px;
    margin-left:25px;
    ${mobile({fontSize:'12px',marginLeft:'10px'})}
    `    

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                    </Language>
                <Searchcontainer>
                   <Input placeholder='Search'/> 
                   <Search style={{color:'grey',fontsize:'16px'}}/>
                </Searchcontainer>

            </Left>
            <Center><Logo>SAIL.</Logo></Center>
            <Right>
                <Menuitem><Link to='/Register'>REGISTER</Link></Menuitem>
                <Menuitem><Link to='/Login'>LOGIN</Link></Menuitem>
                <Menuitem>
                <Badge badgeContent={2} color="primary">
                <Link to='/Cart'><AddShoppingCartOutlined/></Link>
                </Badge>
                </Menuitem>

                
            </Right>
            
        </Wrapper>
        
      
    </Container>
  )
}

export default Navbar
