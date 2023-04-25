import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = ({  }) => {
    const [productos, setProductos]= useState([])
    
    useEffect(() => {
        fetch('./json/productos.json')
          .then(response => response.json())
          .then(productos => {
            const productosFiltrados = productos.filter(prod => prod.stock > 0)
            setProductos(productosFiltrados)
    
          })
    
      }, [])
    
      return (
        <div className="row">
          {<ItemList productos={productos} />}
        </div>
      )
    }