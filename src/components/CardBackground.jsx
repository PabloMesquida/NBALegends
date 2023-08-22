import { DoubleSide } from 'three'
import PropTypes from 'prop-types'
import { Edges } from '@react-three/drei'

function CardBackground({ position }) {
  return (
    <mesh position={position}>
      <planeGeometry args={[2, 3, 10, 10]} />
      <meshStandardMaterial color={'#4d548a'} transparent opacity={0.95} side={DoubleSide} />
      <Edges color={'#4d548a'} />
    </mesh>
  )
}

CardBackground.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default CardBackground
