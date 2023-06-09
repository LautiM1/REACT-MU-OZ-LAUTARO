import { Link } from "react-router-dom";
import { memo } from "react";

export const Categorias = () => {
  return (
    <ul className="navbar-nav">
     <li className="nav-item">
        <Link className="nav-link" to={"/"}>
          <button className='btn btn-secondary'>
            <a className="nav-link" >Inicio</a>
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/category/1"}>
          <button className='btn btn-secondary'>
            <a className="nav-link" >Remeras</a>
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/category/2"}>
          <button className='btn btn-secondary'>
            <a className="nav-link" >Buzos</a>
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/category/3"}>
          <button className='btn btn-secondary'>
            <a className="nav-link" >Joggins</a>
          </button>
        </Link>
      </li>
    </ul>
  );
}