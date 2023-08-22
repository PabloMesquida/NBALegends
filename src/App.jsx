import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import Card from './components/Card'
import data from './data/data.json'
import ListItem from './components/ListItem'

function App() {
  const [selectedItem, setSelectedItem] = useState(data[0])
  const [change, setChange] = useState(true)

  const handleItemClick = (item) => {
    change && setSelectedItem(item)
  }

  return (
    <div className="container">
      <main>
        <section className="sectionList">
          <header>
            <h1>
              <span className="titleA">NBA</span> <span className="titleB">Legends</span>
            </h1>
          </header>
          <div className="list">
            <ul>
              {data.map((item, index) => (
                <li key={index}>
                  <a href="#" onClick={() => handleItemClick(item)}>
                    <ListItem item={item} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="sectionDisplay">
          <Canvas camera={{ fov: 20, position: [0, 0, 12] }}>
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            <directionalLight position={[1, 1, 2]} intensity={1.5} />
            <ambientLight intensity={0.8} />
            <Float floatingRange={[0.1, 0.1]}>
              <Card item={selectedItem} setChange={setChange} />
            </Float>
          </Canvas>
        </section>
      </main>
    </div>
  )
}

export default App
