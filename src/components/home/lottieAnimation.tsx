'use client'

import React from 'react'
import Lottie from 'react-lottie-player'

import lottieJson from '../../../public/computer.json'
// import lottieJson from '../../../public/developer.json'
// import lottieJson from '../../../public/rocket.json'


export default function LottieAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}