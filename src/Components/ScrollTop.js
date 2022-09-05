import React, { useRef } from 'react'
import { useWindowScroll } from 'react-use';
import styled from 'styled-components'











const Up = styled.div`

width : 2rem ;
height : 2rem;
box-sizing: border-box;
color: white;
margin  :0;
padding : 0;
color : ${props=> props.theme.text};
background-color: ${props=> props.theme.body};
font-size :4rem;
position: fixed ;
top: 1rem;
bottom :1rem;

display :flex;
align-item: center;
justify-content: center;
align-items : center;
border-radius: 50%  ;
transition : all 0 ;
&:hover{
cursor : pointer;
    tranform : scale (1.2);
    &:active{

        tranform : scale (0.9);
    
}

` 

const ScrollTop = () => {
  const ref = useRef(null);
  const{y}= useWindowScroll();
      const scrollToTop =()=>{
 
        
        let element = document.getElementById('Home')
       
        element.scrollIntoView({
         behavior:'smooth', 
       block : 'start',  
       inline : 'nearest',
        })}
  return (
  <Up onClick={()=>scrollToTop()}>

    &#x2191;
  </Up>
  
    )
}

export default ScrollTop