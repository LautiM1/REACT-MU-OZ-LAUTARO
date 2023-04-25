export const Item = ({item}) => {

    return(
        <div className="card" style={{width: '18rem'}}>
  <img src={item.img} height={300} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
  <div className="card-body">
    <h5 className="card-title">{item.nombre} </h5>
    <p className="card-text">Precio:{item.precio} </p>
    <p className="card-text">Stock:{item.stock} </p>
    <a href="#" class="btn btn-primary">Ver producto</a>
  </div>
</div>
    )
}