import { Text } from '@react-three/drei'
import PropTypes from 'prop-types'

function CardData({ position }) {
  return (
    <group position={position}>
      <group position={[0.25, 0.8, 0.04]}>
        <Text font="./fonts/Handy00.woff" fontSize={0.2} anchorX="center" color={'#ffffff'}>
          89
        </Text>
        <Text
          font="./fonts/HelloveticaReg.woff"
          fontSize={0.06}
          anchorX="center"
          color={'#ffffff'}
          position={[0, -0.17, 0]}
        >
          Attack
        </Text>
      </group>
      <group position={[0.65, 0.8, 0.04]}>
        <Text font="./fonts/Handy00.woff" fontSize={0.2} anchorX="center" color={'#ffffff'}>
          32
        </Text>
        <Text
          font="./fonts/HelloveticaReg.woff"
          fontSize={0.06}
          anchorX="center"
          color={'#ffffff'}
          position={[0, -0.17, 0]}
        >
          Defense
        </Text>
      </group>
      <group position={[0.1, 0.4, 0.04]}>
        <Text font="./fonts/Handy00.woff" fontSize={0.15} anchorX="left" color={'#ffffff'}>
          1.261
        </Text>
        <Text
          font="./fonts/HelloveticaReg.woff"
          fontSize={0.06}
          anchorX="left"
          color={'#ffffff'}
          position={[0, -0.17, 0]}
        >
          Games
        </Text>
      </group>
      <group position={[0.1, 0.0, 0.04]}>
        <Text font="./fonts/Handy00.woff" fontSize={0.15} anchorX="left" color={'#ffffff'}>
          27.274
        </Text>
        <Text
          font="./fonts/HelloveticaReg.woff"
          fontSize={0.06}
          anchorX="left"
          color={'#ffffff'}
          position={[0, -0.17, 0]}
        >
          Points
        </Text>
      </group>
      <group position={[0.1, -0.4, 0.04]}>
        <Text font="./fonts/Handy00.woff" fontSize={0.15} anchorX="left" color={'#ffffff'}>
          0
        </Text>
        <Text
          font="./fonts/HelloveticaReg.woff"
          fontSize={0.06}
          anchorX="left"
          color={'#ffffff'}
          position={[0, -0.17, 0]}
        >
          Champ
        </Text>
      </group>
      <group position={[0.5, -0.4, 0.04]}>
        <Text font="./fonts/Handy00.woff" fontSize={0.15} anchorX="left" color={'#ffffff'}>
          8
        </Text>
        <Text
          font="./fonts/HelloveticaReg.woff"
          fontSize={0.06}
          anchorX="left"
          color={'#ffffff'}
          position={[0, -0.17, 0]}
        >
          All Star
        </Text>
      </group>
      <group position={[0.1, -0.8, 0.04]}>
        <Text font="./fonts/Handy00.woff" fontSize={0.15} anchorX="left" color={'#ffffff'}>
          2.03
        </Text>
        <Text
          font="./fonts/HelloveticaReg.woff"
          fontSize={0.06}
          anchorX="left"
          color={'#ffffff'}
          position={[0, -0.17, 0]}
        >
          Height
        </Text>
      </group>
    </group>
  )
}

CardData.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default CardData
