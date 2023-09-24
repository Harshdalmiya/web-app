import React from 'react'
import { styled } from 'styled-components'
const Container=styled.div`
  height:30px;
  color:white;
  background-color:teal;
  display:flex;
  justify-content:center;
  font-size:15px;`

const Announcement = () => {
  return (
    <div>
        <Container>
           Super Deal! Free shipping on order above Rs500
        </Container>
      
    </div>
  )
}

export default Announcement
