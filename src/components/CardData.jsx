import { Text } from '@react-three/drei'
import PropTypes from 'prop-types'

function formatDecimalWithTwoDecimals(number) {
  const formattedNumber = Number(number).toFixed(2)
  return formattedNumber
}

function CardData({ position, data }) {
  return (
    <group position={position}>
      <group position={[0.25, 0.8, 0.04]}>
        <Text font="./fonts/Handy00.woff" fontSize={0.2} anchorX="center" color={'#ffff00'}>
          {data.attack}
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
        <Text font="./fonts/Handy00.woff" fontSize={0.2} anchorX="center" color={'#ffff00'}>
          {data.defense}
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
        <Text font="./fonts/Handy00.woff" fontSize={0.15} anchorX="left" color={'#ffff00'}>
          {data.games}
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
        <Text font="./fonts/Handy00.woff" fontSize={0.15} anchorX="left" color={'#ffff00'}>
          {data.points}
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
        <Text font="./fonts/Handy00.woff" fontSize={0.15} anchorX="left" color={'#ffff00'}>
          {data.champs}
        </Text>
        <Text
          font="./fonts/HelloveticaReg.woff"
          fontSize={0.06}
          anchorX="left"
          color={'#ffffff'}
          position={[0, -0.17, 0]}
        >
          Rings
        </Text>
      </group>
      <group position={[0.5, -0.4, 0.04]}>
        <Text font="./fonts/Handy00.woff" fontSize={0.15} anchorX="left" color={'#ffff00'}>
          {data.allStar}
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
        <Text font="./fonts/Handy00.woff" fontSize={0.15} anchorX="left" color={'#ffff00'}>
          {formatDecimalWithTwoDecimals(data.height)}
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
  data: PropTypes.object.isRequired,
}

export default CardData
