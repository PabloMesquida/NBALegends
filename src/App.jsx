import { OrbitControls, Float } from '@react-three/drei'

import Card from './components/Card'

function App() {
  return (
    <>
      <OrbitControls />
      <directionalLight position={[0, 1, 2]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <Float rotationIntensity={1.5}>
        <Card />
      </Float>
    </>
  )
}

export default App
