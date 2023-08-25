import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useSpring, animated, config } from '@react-spring/web'
import Card from './components/Card'
import data from './data/data.json'
import ListItem from './components/ListItem'

function App() {
  const [selectedItem, setSelectedItem] = useState(data[0])
  const [change, setChange] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const isScreenWidthLessThan800 = window.innerWidth < 800

  const handleItemClick = (item) => {
    change && (setSelectedItem(item), setIsOpen(true))
  }

  const listPosition = useSpring({
    from: { x: isOpen ? 0 : -window.innerWidth },
    to: { x: isOpen ? -window.innerWidth : 0 },
    config: config.gentle,
    loop: false,
  })

  const arrowPosition = useSpring({
    from: { x: isOpen ? -100 : 0 },
    to: { x: isOpen ? 0 : -100 },
    config: config.gentle,
    loop: false,
  })

  return (
    <div className="container">
      <main>
        <section className="sectionList">
          <header>
            <h1>
              <span className="titleA">NBA</span> <span className="titleB">Legends</span>
            </h1>
          </header>
          <animated.div
            className="list"
            style={isScreenWidthLessThan800 ? { ...listPosition } : null}
          >
            <ul>
              {data.map((item, index) => (
                <li key={index}>
                  <a href="#" onClick={() => handleItemClick(item)}>
                    <ListItem item={item} />
                  </a>
                </li>
              ))}
            </ul>
          </animated.div>
          <animated.div
            className="itemNumberLegend"
            style={
              isScreenWidthLessThan800 ? { display: 'flex', ...arrowPosition } : { display: 'none' }
            }
            onClick={() => {
              setIsOpen(false)
            }}
          >
            »
          </animated.div>
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
