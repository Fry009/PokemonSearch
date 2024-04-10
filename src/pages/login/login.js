import { LitElement, html, css } from "lit";
import "../../components/input-con-imagen/input-imagen.js"; // Asegúrate de ajustar la ruta al componente

class PaginaLogin extends LitElement {
  static styles = css`
    .login-container {
      display: flex;
      flex-direction: column;
      width: 300px;
      margin: auto;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
    .error {
      margin-top: 20px;
      color: red;
    }
  `;

  static properties = {
    username: { type: String },
    password: { type: String },
    errorMsg: { type: String },
  };

  constructor() {
    super();
    this.username = "";
    this.password = "";
    this.errorMsg = "";
  }

  render() {
    return html`
      <form @submit="${this._onLogin}" class="login-container">
        <input-imagen
          type="text"
          placeholder="Nombre de usuario"
          src="ruta/a/icono/usuario.png"
          alt="Usuario"
          @input-imagen-change="${(e) => (this.username = e.detail.value)}"
        >
        </input-imagen>
        <input-imagen
          type="password"
          placeholder="Contraseña"
          src="ruta/a/icono/password.png"
          alt="Contraseña"
          @input-imagen-change="${(e) => (this.password = e.detail.value)}"
        >
        </input-imagen>
        <button type="submit">Iniciar sesión</button>
        ${this.errorMsg ? html`<div class="error">${this.errorMsg}</div>` : ""}
      </form>
    `;
  }

  _onLogin(e) {
    debugger;
    e.preventDefault(); // Previene el envío por defecto del formulario
    if (this.username === 'guest' && this.password === 'guest') {
      console.log('Credenciales correctas, navegando a Pokémon Search...');
      this.dispatchEvent(new CustomEvent('login-success', { bubbles: true, composed: true }));
      this.errorMsg = '';
    } else {
      this.errorMsg = 'Usuario/contraseña son incorrectos.';
    }
  }
}

customElements.define("pagina-login", PaginaLogin);
