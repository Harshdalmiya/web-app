import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {mobile} from '../Responsive'
const Title=styled.h1`
margin:20px;`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;`
const Filter=styled.span`
margin:20px;
font-weight:600;
${mobile({textAlign:'center'})}`
const Select=styled.select`
padding:20px;
margin:10px;
${mobile({width:'120px'})}`
const Option=styled.option``


const Productlist = () => {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <Title></Title>
        <FilterContainer>
            <Filter>
                Filter Products:
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                    <Option>XXXL</Option>
                </Select>
                <Select>
                <Option disabled selected>Color</Option>
                    <Option>Orange</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                    <Option>Red</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                </Select>
            </Filter>
            
            <Filter>
                Sort Products:
                <Select>
                    <Option disabled selected>Prices</Option>
                    <Option>High to Low</Option>
                    <Option>Low to High</Option>
                </Select>
            </Filter>

        </FilterContainer>
        
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
    
  )
}

export default Productlist
