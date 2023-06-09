import { formEditarUsuario } from './formEditarUsuario'
import { User } from '../bd/user'
import { Perfil } from '../bd/perfil'
import { menuSuperior } from './menuSuperior'
import { menuUsuario } from './menuUsuario'

export const header = {
  template: `
  
<!-- Navbar  -->
<nav class="navbar navbar-expand-sm bg-white fixed-top text-black>
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" href="#/home">
      <img
        src="https://images.vexels.com/media/users/3/202614/isolated/preview/e36f1f4f1dbeebf5cb02c49ce01544d0-icono-de-dibujos-animados-de-avatar-de-frankenstein.png"
        alt=""
        width="40"
        height="40"
        class="d-inline-block align-text-top me-2 "
      />
      <span class=""></span>
      Vanilla Games
    </a>
    
    <button
      class="navbar-toggler ms-auto
      "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Menú superior -->
    ${menuSuperior.template}
    <!-- Menu usuario -->
    ${menuUsuario.template}
  </div>
</nav>

//Modals
${formEditarUsuario.template}
  `,
  script: async () => {
    
    try {
      // Capturamos los datos del usuario logueado
      const usuarioLogueado = await User.getUser()
   
      const perfilLogueado = await Perfil.getByUserId(usuarioLogueado.id)
      console.log("El perfil logueado es" + perfilLogueado);
      if (perfilLogueado.rol != "anonimo") {
        console.log("Dentro de la funcion" + perfilLogueado.rol);
        
        const rol = perfilLogueado.rol
      
        // cargamos el menú superior y usuario para su rol
        menuSuperior.script(perfilLogueado.rol)
        menuUsuario.script(usuarioLogueado, rol)
    
        rol = "anonimo"
       
        menuSuperior.script(perfilLogueado.rol)
        menuUsuario.script(usuarioLogueado , rol)
      }

      

    } catch (error) {
      alert('Recuerda que para crear proyectos y demas, debes iniciar sesion o registrarte')
      
    }
  }
}