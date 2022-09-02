import React from 'react'

import styled from 'styled-components'



import img1 from '../../assets/Nfts/bighead.svg'
import img2 from '../../assets/Nfts/bighead-1.svg'
import img3 from '../../assets/Nfts/bighead-2.svg'
import img6 from '../../assets/Nfts/bighead-5.svg'






const Section = styled.div`

display: flex;
width : 100vw;
height : 25rem;
position : relative;
border-top : 2px solid ${props=> props.theme.text};
border-top : 2px solid ${props=> props.theme.text};
align-items : center;
justify-content: center;
background-color: ${props=> `rgba(${props.theme.textRgba},0.9)`};
overflow: hidden;
`
const ImgContainer =styled.div`

width : 100%;
position : absolute: 
top: 50%;
left: 50%;
tranform:translate (-50%,-50%);
display: flex;
align-items : center;
 justify-content: center;
opacity: 0.4;
img{

width : 15rem;
height: auto;

}
`
const Title = styled.h1`
font-size : ${props => props.theme.fontxxl};
color : ${props => props.theme.body};
padding: 1rem 1rem ;
z-index :10;
width : 35%;
display : grid;

text-shadow : 3px 3px 2px 3px ${props => props.theme.text};;
`
const ButtonContainer = styled.div`

display : flex;
justify-content: flex-end;
margin-right: 3rem;
  
`
const JoinNow = styled.button`
display : inline-block;
background-color :${props =>props.theme.body};
color : ${props=>props.theme.text};
outline :none; 
border: none;
padding: 2rem;
align-item:center;
font-size : ${props=>props.theme.fontsm};
padding : 0.8rem 2.5rem;
border-radius : 50px;
cursor : pointer;
font-size:1rem;

position :relative;


&:hover{
transform :scale(0.9);


}
&::after{
content : ' ';
position : absolute;
top : 50%;
left : 50%;
transform : translate(-50%,-50%) scale(0);
border : 2px solid ${props => props.theme.body};
width : 100%;
height : 100%;
border-radius : 50px; 
transition : all 0.2s ease;
}

&:hover::after{
  transform : translate(-50%,-50%) scale(1);
padding : 0.3rem;
}
`






const Banner = () => {
  return (
    <Section>

        <ImgContainer>
        <img src={img6} alt='the Weirdos'/>
        <img src={img1} alt='the Weirdos'/>
        <img src={img2} alt='the Weirdos'/>
        <img src={img3} alt='the Weirdos'/>
        
        
      
        </ImgContainer>
        <Title>Join The <br/>Weidos Club </Title>
        <ButtonContainer>
<JoinNow>

    JoinNow
</JoinNow>
    </ButtonContainer>
    </Section>
  )
}

export default Banner