import React, { useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import gsap from 'gsap'
import { useLayoutEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Section = styled.section`
min-height: 100vh;
width : 100vw;
backgroud-color: ${props => props.theme.body};
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
width : 70%;
height 200vh;
background-color  : ${props => props.theme.body};
margin : 0 auto;
display  :flex;
justify-content: center;
align-items: center;
position : relative;
overflow: hidden;

`
const SvgContainer = styled.div`
display : flex;
justify-content:center;
align-items: center;



`
const Items = styled.ul`
list-style: none;
width : 100%;
height : 100%;
display : flex;
flex-direction: column;
justify-content:center;
align-items:center;
  
&>*:nth-of-type(2n + 1){

justify-content: start;
  div{

  border-radius:0px 50px 0px 50px;  
  text-align:right;
    }
    p{
  
      border-radius:0 40px  0 40px;  
  
  
    }
}
&>*:nth-of-type(2n){

  justify-content: end;
  
  
  div{

border-radius:50px 0px 50px 0px;  
text-align:left;
    
  }
  p{

    border-radius:50px 0px 50px 0px;  


  }
  }
`
const Item = styled.li`

width : 100%;
height : 100%;
display : flex;


`






const ItemContainer = styled.div`

width : 40%;
height:fit-content;
padding : 1rem;
border : 3px solid ${props => props.theme.text}; 



`

const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
postion : relative;
border : 1px solid ${props=>props.theme.text}

`





const RoadMapItem = ({title ,subtext,addToRefs})=>{



return ( <Item ref={addToRefs}>

<ItemContainer>
<Box>

<SubTitle>

{title}

</SubTitle>
<Text>{subtext}</Text>
</Box>


</ItemContainer>

</Item>



)



}

const SubTitle = styled.span`
display : block;
font-size:${props => props.theme.fontxl};
text-tranform  : capitilize;
color : ${props => props.theme.text};



`
const Text = styled.span`

display : block;
font-size:${props => props.theme.fontsm};
text-tranform  : capitilize;
color : ${props => props.theme.text};
font-weight: 400;
margin : 0.5rem 0;

`



const Roadmap = () => {

const revealRefs = useRef([]);
revealRefs.current = [];
gsap.registerPlugin(ScrollTrigger);


const addToRefs = (el) =>{

if(el && !revealRefs.current.includes(el))
revealRefs.current.push(el);
}

useLayoutEffect(() => {
  
  let t1 = gsap.timeline();
  revealRefs.current.forEach((el , index)  =>{

t1.fromTo(

el.childNodes[0],
{

y: '0'

},{

  y: '-30%',
  
scrollTrigger:{

id: `section-${index + 1}`,
trigger : el,
start: 'top center+=200px',
end: 'bottom center',
scrub:true,
// markers: true,


}
}

)


  })

  return () => {
    
  };
}, [])

  return (
    <Section id='RoadMap'>
      
      <Title>      
Roadmap
      </Title>
      <Container>
<SvgContainer>

<DrawSvg/>
</SvgContainer>
<Items>
<Item>&nbsp;</Item>

<RoadMapItem addToRefs={addToRefs} title='This is Title' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat. ' />

<RoadMapItem addToRefs={addToRefs}  title='Grand Opening' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
<RoadMapItem addToRefs={addToRefs} title='Great Benefits' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
<RoadMapItem addToRefs={addToRefs} title='Early Access' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
<RoadMapItem addToRefs={addToRefs} title='New Merch' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
<RoadMapItem addToRefs={addToRefs} title='Holders Ranking' subtext='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />


</Items>
      </Container>
      </Section>
  )
}

export default Roadmap