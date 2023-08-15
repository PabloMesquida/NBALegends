import { useRef } from 'react'
import { DoubleSide } from 'three'
import { extend, useFrame } from '@react-three/fiber'
import { shaderMaterial, Text } from '@react-three/drei'
import PropTypes from 'prop-types'
import frameVertexShader from '../shaders/frame/vertex.glsl'
import frameFragmentShader from '../shaders/frame/fragment.glsl'

const FrameMaterial = shaderMaterial(
  {
    transparent: true,
    side: DoubleSide,
    uTime: 0,
  },
  frameVertexShader,
  frameFragmentShader
)

extend({ FrameMaterial })

function CardFrame({ position }) {
  const frameMaterialRef = useRef()

  useFrame((state, delta) => {
    frameMaterialRef.current.uTime += delta
  })
  return (
    <group>
      <Text
        font="./fonts/Superscript.woff"
        fontSize={0.14}
        anchorX="left"
        color={'#1d2036'}
        position={[-0.855, -1.35, 0.06]}
        rotation={[0, 0, Math.PI / 2]}
      >
        Denver Nuggets Legend
      </Text>

      <mesh position={position}>
        <planeGeometry args={[2, 3, 2, 2]} />
        <frameMaterial ref={frameMaterialRef} />
      </mesh>
    </group>
  )
}

CardFrame.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default CardFrame
