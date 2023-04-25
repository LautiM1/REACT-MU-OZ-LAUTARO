import './App.css'
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
export const App = () => {
  return (
    <div>
      <Navbar />

      <ItemListContainer />
      <ItemDetailContainer/>
    </div>
  )
}





