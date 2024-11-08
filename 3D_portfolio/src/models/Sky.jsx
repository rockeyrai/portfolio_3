import { useGLTF } from '@react-three/drei'
import { use } from 'framer-motion/client'
import React from 'react'
import skyScenes from '../assets/3d/sky.glb'
const Sky = () => {
  const sky = useGLTF(skyScenes)
  return (
      <mesh>
        <primitive object={sky.scene}/>
      </mesh>
  )
}

export default Sky
