import { LitElement, html, css } from 'lit';
import '../../components/input-con-imagen/input-imagen.js'; // Asegúrate de ajustar la ruta al componente

class PaginaLogin extends LitElement {
  static styles = css`
    .login-container {
      display: flex;
      flex-direction: column;
      width: 300px;
      margin: auto;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,.2);
    }
    input-imagen + input-imagen {
      margin-top: 15px;
    }
    button {
      margin-top: 20px;
      padding: 10px;
      border: none;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `;

  render() {
    return html`
      <div class="login-container">
        <input-imagen type="text" placeholder="Nombre de usuario" src="../../../src/components/images/usuario.png" alt="Usuario"></input-imagen>
        <input-imagen type="password" placeholder="Contraseña" src="../../../src/components/images/asterisco.png" alt="Contraseña"></input-imagen>
        <button @click="${this._onLogin}">Iniciar sesión</button>
      </div>
    `;
  }

  _onLogin() {
    console.log('Intento de inicio de sesión');
    // Aquí iría la lógica de autenticación
  }
}

customElements.define('pagina-login', PaginaLogin);
