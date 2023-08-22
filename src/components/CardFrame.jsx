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
    uLegend: false,
  },
  frameVertexShader,
  frameFragmentShader
)

extend({ FrameMaterial })

function CardFrame({ position, team, legend }) {
  const frameMaterialRef = useRef()

  const frameTeam = legend ? team + ' Legend' : team

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
        {frameTeam}
      </Text>

      <mesh position={position}>
        <planeGeometry args={[2, 3, 10, 10]} />
        <frameMaterial ref={frameMaterialRef} uLegend={legend} />
      </mesh>
    </group>
  )
}

CardFrame.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  team: PropTypes.string.isRequired,
  legend: PropTypes.bool.isRequired,
}

export default CardFrame
