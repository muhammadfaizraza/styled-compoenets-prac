import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const ConfettiComponent = ()=>{
  const { width, height } = useWindowSize()
  return (

    <Confetti

    numberOfPieces={180}
    gravity={0.01}
      width={width}
      height={height*1.5}
    recycle={true}
    />
  )
}
export default ConfettiComponent;