import './App.css'
import { Saludo } from './Saludo/Saludo.jsx'
import { ItemCount } from './ItemCount/ItemCount.jsx'
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
export const App = () => {
  //Aqui irian los hooks
  return (
    <div>
      <Navbar />
      <ItemCount />
      <Saludo mensaje1={"Hola, buenos dias"} mensaje2={"Hola, buenas noches"} />
      <ItemListContainer greeting={"Productos"} />
    </div>
  )
}


