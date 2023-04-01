export const CartWidget = ({ cantCarrito }) => {
    return (
        <div>
            <div className='w-25'>
        <img src={'https://thumbs.dreamstime.com/b/icono-de-carro-compras-en-fondo-negro-ilustraci%C3%B3n-vectores-estilo-plano-170442802.jpg'} alt="carrito" className='w-25' />
    </div>
            <p>Carrito</p>
            <p>{cantCarrito}</p>
        </div>
    )
}