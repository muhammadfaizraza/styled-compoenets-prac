import React from 'react'
import styled, { keyframes } from 'styled-components'


import { useRef } from 'react'


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
import Eth from '../../assets/icons8-ethereum-48.png'

 





const Section = styled.section`
  min-height: 100vh;
  width : 100vw;
  background-color: ${props => props.theme.text};
  position : relative;
  display : flex;
  align-items: center;
  justify-content:center;
  flex-direction :  column;

&>*:first-child{
animation-duration: 20s;

&>*:last-child{
  animation-duration: 15s;
  
}

`

const move = keyframes`
0%{transform: translateX(100%)  };
100%{transform: translateX(-100%)  };
`


const Row = styled.div`
// background-color:lightblue;
white-space :nowrap;
box-sizing : content-box;
margin :2rem 0;
display:flex;

animation:${move} 20s linear infinite ${props => props.direction};
div{

  
justify-content:flex-start;
 
  background-color : ${props => props.theme.body};  
}
`


const ImgContainer = styled.div`
width : 15rem;
margin : 0 1rem;
background-color:${props => props.theme.body};
border-radius: 20px;
cursor: pointer;
justify-content: space-between;
img{

width :100%;
height: auto; 

}
`
const Details = styled.div`
  display: flex;
  justify-content: space-between;
    padding : 0.8rem 0rem;
background-color : ${props => props.theme.text};
border : 1px solid ${props => `rgba$({props.theme.bodyRgba},0.5)`} ;
flex-direction: row;

border-bottom-left-radius:20px;
border-bottom-right-radius:20px;

span{
font-size:${props => props.theme.fontsm};
color :${props=> `rgba(${props.theme.bodyRgba},o.6)`}
font-weight : 600;

line-height: 1.5rem;

}h1{
  font-size:${props => props.theme.fontsm};
  color :${props=> `rgba(${props.theme.bodyRgba},o.6)`}
  font-weight : 600;
  line-height: 1.5rem;
  
}


`
const Price = styled.div`
display : flex;
justify-content: space-between;
align-items:center;

img{

  width :1rem;
  height : auto;
}
`



const NftItem =({img, number=0,price=0 ,passRef})=>{



let play = (e)=>{ 

passRef.current.style.animationPlayState = 'running';

}


let pause = (e)=>{
  passRef.current.style.animationPlayState = 'paused';
  
  }



return (
<ImgContainer  onMouseOver={e => pause(e)} onMouseOut ={e => play(e)}>

<img src= {img} alt = 'the weirdos'></img>
<Details>
{/* <div>
<span>weirdos</span><br/> 
<h1> #{number}</h1>


</div> */}
<div>
  <Price>
    <img src={Eth} alt = 'eth'></img>
<span>Price</span>
<h1> {Number(price).toFixed(1)}</h1>
</Price>

</div>


</Details>
</ImgContainer>

)

}





const Showcase = () => {
const Row1ref = useRef(null);
const Row2ref = useRef(null);

  return (
    <Section id='showCase'>
<Row direction ='none' ref={Row1ref}>
<NftItem img={img1} number = {222} price = {1.4}   passRef={Row1ref} />

<NftItem img={img2} number = {222} price = {1.4}  passRef={Row1ref} />
<NftItem img={img3}  number = {222} price = {1.4}  passRef={Row1ref} />
<NftItem img={img4}  number = {222} price = {1.4}  passRef={Row1ref} />
<NftItem img={img5}  number = {222} price = {1.4}  passRef={Row1ref} />
<NftItem img={img6}  number = {222} price = {1.4}  passRef={Row1ref} />









</Row>
<Row direction = 'reverse' ref={Row2ref}>
<NftItem img={img7} number = {222} price = {1.4}   passRef={Row2ref} />

<NftItem img={img8} number = {222} price = {1.4}  passRef={Row2ref} />
<NftItem img={img9} number = {222} price = {1.4}  passRef={Row2ref} />
<NftItem img={img10} number = {222} price = {1.4}  passRef={Row2ref} />
<NftItem img={img11} number = {222} price = {1.4}  passRef={Row2ref} />











</Row>



    </Section>
  )
}

export default Showcase