import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home Video.mp4'




const VideoConatainer = styled.div`
width : 100%;


video{

width :100%;
height : auto;

}


`








const CoverVideo = () => {
  return (
  <VideoConatainer>
<video src = {GIF}  type = 'video/mp4' autoPlay muted loop/>

  </VideoConatainer>
  )
}

export default CoverVideo