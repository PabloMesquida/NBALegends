import CardBack from './CardBack'
import CardBackground from './CardBackground'
import CardImage from './CardImage'
import CardFrame from './CardFrame'
import CardName from './CardName'
import CardTitle from './CardTitle'
import CardNumber from './CardNumber'
import CardData from './CardData'
import CardCover from './CardCover'

function Card() {
  return (
    <group>
      <CardBack position={[0, 0, -0.01]} />
      <CardBackground position={[0, 0, 0]} />
      <CardImage position={[0, 0, 0.01]} />
      <CardCover position={[0, 0, 0.015]} />
      <CardData position={[0, 0, 0.02]} />
      <CardFrame position={[0, 0, 0.05]} />
      <CardName position={[0, 0, 0.08]} />
      <CardTitle position={[0, 0, 0.09]} />
      <CardNumber position={[0, 0, 0.09]} />
    </group>
  )
}

export default Card
