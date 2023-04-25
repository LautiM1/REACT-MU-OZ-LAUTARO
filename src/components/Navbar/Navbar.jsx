import { CartWidget } from "../CartWidget/CartWidget"
export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand">D-SHIRT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" >Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
  
  <CartWidget cantCarrito={0} />
</nav>
    )
}