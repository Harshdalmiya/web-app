import React from 'react'
import { styled } from 'styled-components'
import Product from './Product'
const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;`

const Products = () => {
  return (
    <Container>
        <Product img='https://www.pngarts.com/files/5/Plain-White-T-Shirt-Transparent-Images.png'/>
        <Product img='https://www.pngall.com/wp-content/uploads/5/Shirt-PNG-Download-Image.png'/>
        <Product img='https://th.bing.com/th/id/R.031121d0b713528c66f43806af9ea4b7?rik=qZwDjk%2fNZOlFvg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fJacket-PNG.png&ehk=HFpWLFenRhSyLJGAklD4Q8oQ%2bzGjzNGRS9ya5u1%2biCM%3d&risl=&pid=ImgRaw&r=0'/>
        <Product img='https://th.bing.com/th/id/R.6ab97ab88fba75338fa437c73dd3ba9a?rik=rEfngyZ2Dm9%2frQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fwatch-png-hd-watch-free-download-png-png-image-2000.png&ehk=9FF3n2YVJkFY%2fJSUX%2bASmZ6SxkPSNlGwIb3raPp1OjU%3d&risl=&pid=ImgRaw&r=0'/>
        <Product img='https://pngimg.com/uploads/cap/cap_PNG5684.png'/>
        <Product img='https://th.bing.com/th/id/R.c055b625e80ab26741286adcc24bac03?rik=daE3sRJsTQkbiQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftrousers-png-hd-cargo-pant-png-image-966.png&ehk=egMaSYu23z4wCxP4zuCTx0PeXbenHsXvOWzN9kiQpZg%3d&risl=&pid=ImgRaw&r=0'/>
        <Product img='https://www.pngarts.com/files/8/Mens-Business-Backpack-Transparent-Images.png'/>
        <Product img='https://th.bing.com/th/id/R.c9c23abea7771109608a7fab69ff29d5?rik=0W5ZXFFRS4TsyQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fperfume%2fperfume_PNG10250.png&ehk=PFxyr6swDBCeWjcOYnUIQ4xd5HFPqI0S3XtmawcdzDw%3d&risl=&pid=ImgRaw&r=0'/>
        
      
    </Container>
  )
}

export default Products
