import { useCarritoCotext } from "../../context/CartContext"
import { Link } from "react-router-dom"
export const CartWidget = () => {
    const {getItemQuantity} = useCarritoCotext()
    return (
        <>
       
      <button  className="btn btn-dark cartWidget">
        <Link to={"/cart"} className="nav-link">
        <i className="fas fa-shopping-cart fa-lg"></i>
          {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
        </Link>
      </button>

    </>
    )
}


<img src={'https://thumbs.dreamstime.com/b/icono-de-carro-compras-en-fondo-negro-ilustraci%C3%B3n-vectores-estilo-plano-170442802.jpg'} alt="carrito" className='w-25' />