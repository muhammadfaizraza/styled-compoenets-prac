import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'
import { useState } from 'react'


const Section = styled.section`
width :100vw;
background-color:   ${props => props.theme.body};
`


const Navbar = styled.nav`
display:flex;
justify-content : space-between;
align-items:center;
width  :85%;
height : ${props => props.theme.navHeight};  
margin :0 auto;
.mobile{

display: none;

}
@media (max-width : 64em){
.mobile{
display:inline-block ;
}
.desktop{

  display:none ;
}
}

`
const Menu = styled.ul`
display : flex;
justify-content : space-between;
align-items:center;
list-style : none;
cursor : pointer;



@media (max-width : 64em){

position: fixed;
top : ${props => props.theme.navHeight};
left:0 ;
right : 0;
bottom : 0;
width : 100vw;
height: ${props => `calc(100vh  - ${props.theme.navHeight})`} ;
z-index : 50;
background-color:${props => `rgba(${props.theme.bodyRgba},0.85)`} ;
flex-direction:column ;
justify-content:center ;
backdrop-filter: blur(2px);
transform: ${props => props.click ? 'translateY(0)' : 'translateY(100%)' };
}


`
const Hamburger = styled.span`
width: 1.3rem;
height : 2px;
background-color : ${props => props.theme.text};
position   : absolute;
transform : $(props => props.click ? 'translateX(-50%)rotate(90deg)' : 'translateX(-50%) rotate(0)')
top : 2rem;
left : 50%;
display:flex;
justify-content : center;
display : none;
transition : all 0.3 ease ;
cursor : pointer;
align-items:center;
font-weight : 600;

@media (max-width : 64em){

display:flex ;
}

&::after, &::before{

content : '';
width : 1.5rem;
height : 2px;
background-color : ${props => props.theme.text};
position  : absolute;
}
&::after {

  top : 0.5rem;

}
&::before {

bottom : 0.5rem;  
}
`


const MenuItem = styled.li`

margin : 1rem;
color : ${props => props.theme.text};
cursor : pointer;


&::after{
content : ' ';
display : block;
width :0%;
height :2px;
background : ${props => props.theme.text};
transition : all 0.3s ease;

}
&:hover::after{
width :100%;


}

`



const Navigation = () => {

  const [click, setclick] = useState(false)
  const scrollTo = (id) => {

    let element = document.getElementById();

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
    setclick(!click)
  }

  return (
    <>  <Section>

      < Navbar>
        <Logo />
        <Hamburger click={click} onClick={() => setclick(!click)}>
          &nbsp;
        </Hamburger>
        <Menu click={click} >

          <MenuItem onClick={() => scrollTo('Home')} >Home</MenuItem>
          <MenuItem onClick={() => scrollTo('About')}>About</MenuItem>
          <MenuItem onClick={() => scrollTo('RoadMap')}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo('showCase')}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo('Team')}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo('Faq')}>Faq</MenuItem>
<MenuItem>          <div className='mobile'>
        <Button text='Connect Wallet' link='http://google.com' />
        </div>
          </MenuItem>

        </Menu>
<div className='desktop'>
        <Button text='Connect Wallet' link='http://google.com' />
        </div>
      </Navbar>






    </Section>
    </>

  )
}

export default Navigation