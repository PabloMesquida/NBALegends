import { Image } from '@react-three/drei'
import PropTypes from 'prop-types'

function CardImage({ position, image }) {
  return <Image url={`./img/${image}`} position={position} transparent scale={2.5} />
}

CardImage.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  image: PropTypes.string.isRequired,
}

export default CardImage
