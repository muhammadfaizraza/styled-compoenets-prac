import React from 'react'

import styled from 'styled-components'
import Banner from './Section/Banner'

import Logo from '../Components/Logo'

import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'
import Linkedin from '../Icons/LinkedIn'
import Twitter from '../Icons/Twitter'

const Section = styled.section`
min-height: 100vh;
width : 100vw;
background-color: ${props => props.theme.body};
position : relative;
display :flex;
justify-content: center;
align-items : center;
flex-direction  :column;
color : ${props => props.theme.text };



`


const Container = styled.div`
display :flex;
justify-content: space-between;
align-items : center;
margin :2rem auto;
width : 75%;
border-bottom : 3px solid ${props => props.theme.text };

`


const Left = styled.div`
display :flex;
justify-content: space-between;
align-items : center;
flex-direction : column;

`
const IconList = styled.div`

display :flex;
align-items : center;
margin : 0 auto;

&>*{
padding-right : 0.5rem;
transform : all 0.2s ease;

&:hover{

  transform : scale(1.2)  ;
}

}
`
const Menuitems = styled.ul`


list-style : none;
width : 50%;
display : grid;
grid-template-columns : repeat(2, 1fr);
grid-template-rows : repeat(3, 1fr);
grid-gap : 1rem ;

 
`
const Item= styled.li`
width : fit-content;
cursor: pointer;



&::after{
  content : ' ';
  display : block;
  width :0%;
  height :2px;
  background : ${props => props.theme.text};
  transition : width 0.3s ease;
  
  }
  &:hover::after{
  width :100%;
}
  `

  const Bottom =styled.div`

width : 75%;
margin : 0 auto;
display : flex;
justify-content : space-between;



`





const Footer = () => {
  return (
    <>
    <Section ><Banner/>
    <Container>
<Left><Logo/> 

<IconList>

<a href='http://facebook.com' target='blank' rel= 'noopener'>

<Facebook/>

</a>

<a href='http://facebook.com' target='blank' rel= 'noopener'>

<Instagram/>

</a>
<a href='http://facebook.com' target='blank' rel= 'noopener'>

<Linkedin/>

</a>
<a href='http://facebook.com' target='blank' rel= 'noopener'>

<Twitter/>

</a>



</IconList>
</Left>
<Menuitems>
<Item>
  Home
</Item >
<Item>
  About
</Item  >
<Item>
  RoadMap
</Item  >
<Item>
  ShowCase
</Item  >


<Item>
  FAQ
</Item  >
<Item>
Team</Item  >


</Menuitems>

    </Container>

    <Bottom>

<span>


  &copy; {new Date().getFullYear()}Weirdos Club.All Rights Reserved.


</span>

<span>

   &#10084;  <a href='#' target='blank' rel= 'noopener'>created By Faiz Raza</a>
</span>

    </Bottom>
    </Section>
    </>
  )

}

export default Footer