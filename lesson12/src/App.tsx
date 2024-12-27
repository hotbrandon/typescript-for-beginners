
import Counter from "./components/Counter"
import Counter2 from "./components/Counter2"
import Heading from "./components/Heading"
import { Section } from "./components/Section"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(1)
  return (
    <>
    <Heading title="Hello TypeScript" />
    <Section>
      This is a dummy section
    </Section>
    <Counter />
    <Counter2 setCount={setCount}>count is {count}</Counter2>
    </>
  )
}

export default App
