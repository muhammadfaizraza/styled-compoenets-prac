import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'


const Section =styled.section`
width :100vw;
background-color:   ${props => props.theme.body};
`


const Navbar = styled.nav`
display:flex;
justify-content : space-between;
align-items:center;
width  :85%;
height : ${props =>props.theme.navHeight};  
margin :0 auto;

`
const Menu =styled.ul`
display : flex;
justify-content : space-between;
align-items:center;
list-style : none;
cursor : pointer;


`

const MenuItem = styled.li`

margin : 1rem;
color : ${props =>props.theme.text};
cursor : pointer;


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



const Navigation = () => {
  const scrollTo =(id)=>{
 
 let element = document.getElementById()

 element.scrollIntoView({
  behavior:'smooth', 
block : 'start',  
inline : 'nearest',
 })}
 
  return (
    <>  <Section>

< Navbar>
<Logo/>
<Menu>

<MenuItem onClick={() => scrollTo('Home')} >Home</MenuItem>
<MenuItem  onClick={() => scrollTo('About') }>About</MenuItem>
<MenuItem onClick={() => scrollTo('RoadMap') }>Roadmap</MenuItem>
<MenuItem onClick={() => scrollTo('showCase') }>Showcase</MenuItem>
<MenuItem onClick={() => scrollTo('Team') }>Team</MenuItem>
<MenuItem onClick={() => scrollTo('Faq') }>Faq</MenuItem>



</Menu>

<Button  text='Connect Wallet' link = 'http://google.com'/>
</Navbar>






   </Section>
   </>
 
   )
}

export default Navigation