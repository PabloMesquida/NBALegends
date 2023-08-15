import { Image } from '@react-three/drei'
import PropTypes from 'prop-types'

function CardImage({ position }) {
  return <Image url="./img/001.png" position={position} transparent scale={2.5} />
}

CardImage.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default CardImage
