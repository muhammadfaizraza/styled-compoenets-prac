import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'

import Button from '../Button'
import { dark } from '../../styles/Themes'


const Section = styled.div`
min-height : 100vh;
width : 100%;
background-color : ${props=>props.theme.text};
display: flex;
justify-content  : center;
align-items: center;
position :relative;
// color : ${props=> props.theme.body}  

`
const Container = styled.div`


width : 75%;

margin: 0 auto ;
display : flex;
justify-content:center;
align-items: center;

`
const Box = styled.div`
width : 50%;
height : 100%;

flex-direction : coloumn;
justify-content  : center;
align-items: center;

`
const Title = styled.h2`

font-size: ${props => props.theme.fontxxl};
text-transform: Capitilize;
width : 80%;
color : ${props => props.theme.body};
align-self : flex-start;
margin : 0 auto;


`

const SubText = styled.p`

font-size: ${(props) => props.theme.fontlg};
width : 80%;
color : ${(props) => props.theme.body};
align-self : flex-start;
margin : 1rem auto;
font-weight : 400;

`

const SubTextLight = styled.p`

font-size: ${props => props.theme.fontmd};
text-transform: Capitilize;
width : 80%;
color : ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
align-self : flex-start;
margin :1rem auto;
font-weight : 400;

`

const ButtonContainer = styled.div`

width : 80%;
margin : 0 auto;
align-items: flex-start;


`




const About = () => {
  return (
    <Section id='About'>
      
<Container>

<Box><Carousel/>  </Box>
<Box>
<Title>

Welcome To The Weirdos Club.

</Title>
<SubText>


The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.

</SubText>
<SubTextLight>


With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.

</SubTextLight>
<ButtonContainer>
<ThemeProvider theme={dark}>
<Button style ={{margin: '1rem 4rem'}} text = 'Join Our Discord' link = "#"/>
</ThemeProvider>
</ButtonContainer>

</Box>

</Container>

    </Section>
  )
}

export default About