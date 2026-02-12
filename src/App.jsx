import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <div className="container">
      <h1>Proyecto Basico React </h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  )
}

export default App

