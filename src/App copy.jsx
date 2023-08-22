//import { useMemo } from 'react'
import { OrbitControls } from '@react-three/drei'
//import PropTypes from 'prop-types'

import Card from './components/Card'

// const CircleOfObjects = ({ numObjects }) => {
//   const generateCirclePositions = () => {
//     const positions = []
//     const radius = numObjects / 2.8
//     const centerX = 0
//     const centerY = 0
//     const angleIncrement = (Math.PI * 2) / numObjects

//     for (let i = 0; i < numObjects; i++) {
//       const angle = i * angleIncrement
//       const x = centerX + radius * Math.cos(angle)
//       const z = centerY + radius * Math.sin(angle)

//       positions.push([x, 0, z])
//     }

//     return positions
//   }

//   const circlePositions = useMemo(() => generateCirclePositions(), [numObjects])

//   return (
//     <group>
//       {circlePositions.map((position, index) => (
//         <Card key={index} position={position} />
//       ))}
//     </group>
//   )
// }

// const SphereOfObjects = ({ numObjects }) => {
//   const generateSpherePositions = () => {
//     const positions = []
//     const radius = 5

//     for (let i = 0; i < numObjects; i++) {
//       const phi = Math.acos(-1 + (2 * i) / numObjects)
//       const theta = Math.sqrt(numObjects * Math.PI) * phi

//       const x = radius * Math.cos(theta) * Math.sin(phi)
//       const y = radius * Math.sin(theta) * Math.sin(phi)
//       const z = radius * Math.cos(phi)

//       positions.push([x, y, z])
//     }

//     return positions
//   }
//   const spherePositions = useMemo(() => generateSpherePositions(), [numObjects])

//   return (
//     <group>
//       {spherePositions.map((position, index) => (
//         <Card key={index} position={position} />
//       ))}
//     </group>
//   )
// }

// CircleOfObjects.propTypes = {
//   numObjects: PropTypes.number.isRequired,
// }

function App() {
  // const numObjects = 1

  // const velocityAngular = 1 * Math.PI
  // const circleRadius = numObjects / 2.8

  // const velocityLinear = velocityAngular / circleRadius

  return (
    <>
      <OrbitControls />
      <directionalLight position={[1, 1, 2]} intensity={1.5} />
      {/* <directionalLight position={[-1, 1, 2]} intensity={1.5} />
      <directionalLight position={[-1, 1, -2]} intensity={1.5} />
      <directionalLight position={[1, 1, -2]} intensity={1.5} /> */}
      <ambientLight intensity={0.5} />
      {/* <CircleOfObjects numObjects={numObjects} /> */}
      <Card />
    </>
  )
}

export default App
