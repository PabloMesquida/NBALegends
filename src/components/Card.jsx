import { useRef, useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/three'
import PropTypes from 'prop-types'
import CardBack from './CardBack'
import CardBackground from './CardBackground'
import CardImage from './CardImage'
import CardFrame from './CardFrame'
import CardName from './CardName'
import CardTitle from './CardTitle'
import CardNumber from './CardNumber'
import CardData from './CardData'
import CardCover from './CardCover'

function Card({ item, setChange }) {
  const cardRef = useRef()
  const previousItem = useRef(item)
  const [angle, setAngle] = useState(0)
  const [logExecuted, setLogExecuted] = useState(false)
  const [data, setData] = useState({
    attack: item.attack,
    defense: item.defense,
    games: item.games,
    points: item.points,
    height: item.height,
    champs: item.champs,
    allStar: item.allStar,
  })

  useEffect(() => {
    if (previousItem.current !== item) {
      setAngle((prev) => prev + Math.PI * 2)
    }
  }, [item])

  const { cardRotation } = useSpring({
    from: { cardRotation: 0 },
    to: { cardRotation: angle },
    config: { tension: 180, friction: 20, mass: 4 },
    loop: false,
    onStart: () => {
      setLogExecuted(false)
      setChange(false)
    },
    onChange: () => {
      let normalizedRotation = (cardRef.current.rotation.y % (2 * Math.PI)) / (2 * Math.PI)

      if (normalizedRotation < 0) {
        normalizedRotation += 1
      }

      if (!logExecuted && normalizedRotation > 0.5) {
        previousItem.current = item
        const { attack, defense, games, points, height, champs, allStar } = item

        const nuevosDatos = {
          attack,
          defense,
          games,
          points,
          height,
          champs,
          allStar,
        }
        setData(nuevosDatos)
        setLogExecuted(true)
      }
    },
    onRest: () => {
      setChange(true)
    },
  })

  return (
    <animated.group ref={cardRef} rotation={cardRotation.to((r) => [0, r, 0])}>
      <CardBack position={[0, 0, -0.01]} />
      <CardBackground position={[0, 0, 0]} />
      <CardImage position={[0, 0, 0.01]} image={previousItem.current.image ?? item.image} />
      <CardCover position={[0, 0, 0.015]} />
      <CardData position={[0, 0, 0.02]} data={data} />
      <CardFrame
        position={[0, 0, 0.05]}
        team={previousItem.current.team ?? item.team}
        legend={previousItem.current.legend ?? item.legend}
      />
      <CardName position={[0, 0, 0.08]} name={previousItem.current.name ?? item.name} />
      <CardTitle position={[0, 0, 0.09]} />
      <CardNumber position={[0, 0, 0.09]} number={previousItem.current.number ?? item.number} />
    </animated.group>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  setChange: PropTypes.func.isRequired,
}

export default Card
