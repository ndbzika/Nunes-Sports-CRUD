import { ProductTable } from "./components/ProductTable";

import './App.css'
import { useState } from "react";
import { CreateProduct } from "./components/CreateProduct";

function App() {
  const [isCardOpen, setIsCardOpen] = useState(false)
  const handleOpenCard = () => setIsCardOpen(true)
  const handleCloseCard = () => setIsCardOpen(false)


  return (
    <main>
      <header>
        <h1>Nunes Sports</h1>
      </header>

      <section>
        <div>
          <div>
            <h2>Produtos</h2>
            <button onClick={handleOpenCard}>Adicionar</button>
            <CreateProduct open={isCardOpen} handleClose={handleCloseCard}/>
          </div>

          <div>
            <ProductTable/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
