import { Categorias } from "./Categorias/Categorias";
import { CartWidget } from "../CartWidget/CartWidget"
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand">D-SHIRT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <Categorias />
    </div>
  </div>
  
  <CartWidget cantCarrito={0} />
</nav>
    )
}