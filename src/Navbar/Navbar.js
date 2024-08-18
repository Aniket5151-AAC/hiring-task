import React from 'react'
import Register from './components/Pages/Register.js';
import Login from './compoenents/Pages/Login.js';


const Navbar = () => {
  return (
    <>
                      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-warning  fw-bold fs-3" href="/#">POSTMAN APP</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active fs-3 abc" aria-current="page" href="/login">LOGIN</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active fs-3 abc" aria-current="page" href="/register">REGISTER</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active fs-3 abc" aria-current="page" href="/product">PRODUCT</NavLink>
        </li>
        
    
       </ul>

     
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar