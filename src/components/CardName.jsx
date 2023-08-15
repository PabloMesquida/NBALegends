import { Text } from '@react-three/drei'
import PropTypes from 'prop-types'

function CardName({ position }) {
  return (
    <Text
      font="./fonts/HelloveticaReg.woff"
      fontSize={0.09}
      anchorX="left"
      color={'#ffff00'}
      position={[-0.62, -1.31, position[2]]}
    >
      Alex English
    </Text>
  )
}

CardName.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default CardName
