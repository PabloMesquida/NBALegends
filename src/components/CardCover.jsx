import PropTypes from 'prop-types'

function CardCover({ position }) {
  return (
    <mesh position={position}>
      <planeGeometry args={[2, 3, 10, 10]} />
      <meshStandardMaterial
        color={'#4d548a'}
        metalness={0.8}
        roughness={0.1}
        transparent
        opacity={0.2}
        //transmission={0.9} // Controla la transparencia del material
        envMapIntensity={1.5} // Ajusta la intensidad de los reflejos
        reflectivity={1} // Ajusta la cantidad de reflexión
      />
    </mesh>
  )
}

CardCover.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default CardCover
