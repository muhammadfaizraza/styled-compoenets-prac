import React from 'react'
import styled from 'styled-components'



import img1 from '../../assets/Nfts/bighead.svg'
import img2 from '../../assets/Nfts/bighead-1.svg'
import img3 from '../../assets/Nfts/bighead-2.svg'
import img4 from '../../assets/Nfts/bighead-3.svg'
import img5 from '../../assets/Nfts/bighead-4.svg'
import img6 from '../../assets/Nfts/bighead-5.svg'
import img7 from '../../assets/Nfts/bighead-6.svg'
import img8 from '../../assets/Nfts/bighead-7.svg'
import img9 from '../../assets/Nfts/bighead-8.svg'
import img10 from '../../assets/Nfts/bighead-9.svg'
import img11 from '../../assets/Nfts/bighead-10.svg'

import ConfettiComponent from '../Conffeti'


const Section = styled.section`
min-height: 100vh;
width : 100vw;
background-color: ${props => props.theme.body};
position : relative;



`
const Title = styled.h1`

font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
width : 80%;
color : ${props => props.theme.text};
display : flex;
justify-content: center;
align-items: center;
margin : 1rem auto ;
border-bottom : 2px solid ${props => props.theme.text};
width : fit-content;
`

const Container = styled.div`
width : 75%;
margin : 2rem auto;
justify-content : space-between;
align-items : center;
flex-wrap : wrap ;
display : flex;
`
const ImgContainer = styled.div`
width : 80%;
margin : 0 auto;
background-color:${props => props.theme.carouselColor};
border-radius: 20px;
cursor: pointer;
justify-content: space-between;
transition : all 0.3s ease;
border: 1px solid ${props => props.theme.text};;
&:hover{
  img{

  transform : translateY(-2rem) scale(1.2) ;
}

  
}
@media (max-width : 70em){

align-items: center;

}
`
const Item = styled.div`

width : calc(20rem - 3vw);
padding : 1rem 0;
color : ${props =>props.theme.carouselColor};
margin: 2rem 6rem;
position :relative; 
border  :2px solid ${props =>props.theme.text};
z-index : 4;

backdrop-filter :blur(4px);
@media (max-width : 78em){
align-items:center ;

}
`
const Name =styled.h2`
font-size : ${props => props.theme.fontlg} ;
display : flex;
align-items: center;
justify-content:center;
text-transform : uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Position =styled.h2`
font-size : ${props => props.theme.fontmd} ;
display : flex;
align-items: center;
justify-content:center;
text-transform : uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`



const MemberComponent =({img,name='dsada ' ,position=' asdsa'})=>{

return(

<Item>

<ImgContainer>

<img src={img} alt={name}></img>


</ImgContainer>
<Name>{name}</Name>
<Position>{position} </Position>

</Item>

)

}



















const Team = () => {
  return (
 <Section id='Team'>
<ConfettiComponent/>
<Title>

  Team
</Title>  

    <Container>
<MemberComponent  img={img1} name ="Skyblaze" position='CEO'/>
<MemberComponent  img={img2} name ="  Megnum" position='Co-Founder'/>
<MemberComponent  img={img3} name ="Joe" position='Director'/>
<MemberComponent  img={img4} name ="Tony" position='Employe'/>
<MemberComponent  img={img5} name ="Doe" position='Co-Founder'/>
<MemberComponent  img={img6} name ="Sara" position='Manager'/>
<MemberComponent  img={img7} name ="Dany" position='Floor Manager '/>
<MemberComponent  img={img8} name ="Chris" position='Employe'/>
<MemberComponent  img={img9} name ="Dale" position='Floor Manager'/>
<MemberComponent  img={img10} name ="Tony" position='Sales Manager'/>
<MemberComponent  img={img11} name ="Teal" position='Executive'/>
<MemberComponent  img={img9} name ="Esra" position='Project Manager'/>

    </Container>

 </Section>
 
 
    )
}

export default Team;