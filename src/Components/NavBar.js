import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a ><img src="/Img/Logo.png" alt="Logo" /> </a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            
            <li tabindex="0">
              <a>
              Planes de Gestión de Redes
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"></svg>
              </a>
              <a>
              Plan Restyling
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"></svg>
                </a>
              
            </li>
            <li><a><img src="/Img/Cart.png" alt="Cart"/> </a></li>
          </ul>
        </div>
      </div>
   )
}
export default NavBar