import { Text } from '@react-three/drei'
import PropTypes from 'prop-types'

function CardNumber({ position, number }) {
  return (
    <Text
      font="./fonts/TecmoBowl.woff"
      fontSize={0.1}
      anchorX="center"
      color={'#ffffff'}
      position={[0.7, 1.28, position[2]]}
    >
      {number}
    </Text>
  )
}

CardNumber.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  number: PropTypes.number.isRequired,
}

export default CardNumber
