import { Text } from '@react-three/drei'
import PropTypes from 'prop-types'

function CardTitle({ position }) {
  return (
    <group position={position}>
      <Text
        font="./fonts/Tecmo-Bowl.woff"
        fontSize={0.14}
        anchorX="left"
        color={'#ffffff'}
        position={[-0.62, 1.3, 0]}
      >
        NBA
      </Text>
      <Text
        font="./fonts/Superscript.woff"
        fontSize={0.14}
        anchorX="left"
        color={'#ffff00'}
        position={[-0.18, 1.28, 0]}
      >
        Legends
      </Text>
    </group>
  )
}

CardTitle.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default CardTitle
