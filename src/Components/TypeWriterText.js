import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import Button from './Button'



const Title = styled.h2`


font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
width : 80%;
color : ${props => props.theme.text};
align-self : flex-start;
align-items: self-start;



span{

text-transform :uppercase;
font-family : 'Akaya Telivigala',cursive;
}

.text-1{
color :blue;


}
.text-2{
    color :orange;
    
    
    }
    .text-3{
        color :red;
        
        
        }
        
        
        `

const SubTitle = styled.h3`
font-size: ${(props) => props.theme.fontlg};
text-transform : capitilize;
width : 80%;
color : ${props => `rgba (${props.theme.textRgba} ,0.6)`};
align-self : flex-start;
margin-bottom: 1rem;
font-size: 1rem;
`

const ButtonContainer = styled.div`

width : 80%;
align-self :flex-start;

margin-bottom :1rem;





`





const TypeWriterText = () => {
  return (
    <> <Title>

      Discover a new era of cool
      <Typewriter   
        options={{
          autoStart: true,
          loop: true,


        }}
        onInit={(typewriter) => {
          typewriter.typeString('<span class ="text-1">NFTs .</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class ="text-2">Collectable Items</span>')
            .pauseFor(1000)
            .deleteAll()
            .typeString('<span class ="text-3">Ape killer</span>')
            .pauseFor(1000)
            .deleteAll()
            .start()
        }}
      />

<SubTitle>Bored frop Ape ? Try Something New</SubTitle>
   
   <ButtonContainer>
   <Button text='Explore' > </Button>
   </ButtonContainer>
    </Title>
   

    </>
  )
}

export default TypeWriterText