import React from 'react'
import { styled } from 'styled-components'
import Categorieitem from './Categorieitem'
import {mobile} from '../Responsive'
const Container=styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobile({flexDirection:'column',padding:'0px'})}
`

const Categories = () => {
  return (
    <Container>
       <Categorieitem img='https://ae01.alicdn.com/kf/HTB1d9pfLpXXXXX7aXXXq6xXFXXXz/2016-New-Design-Fashion-Full-Flowers-Printing-Mens-Long-Sleeve-Shirt-Business-Men-Casual-Floral-Dress.jpg' tit='SHIRT STYLES'/>
       <Categorieitem img='https://i.pinimg.com/originals/2b/17/14/2b1714efa52d146bd98fa54e1f2a0ec3.jpg' tit='SUNGLASSES'/>
       <Categorieitem img='https://th.bing.com/th/id/OIP.bolS9PbHZvFg40nSTt27XQHaLJ?pid=ImgDet&rs=1' tit='LIGHT JACKETS'/>
        

    </Container>
      
  )
}

export default Categories
