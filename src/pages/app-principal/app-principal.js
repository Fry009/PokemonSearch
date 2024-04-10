import { LitElement, html } from 'lit';
import '../login/login.js';
// Importa tu componente pokemon-search aquí
// import './pokemon-search.js';

class AppPrincipal extends LitElement {
  static properties = {
    estaAutenticado: { type: Boolean }
  };

  constructor() {
    super();
    this.estaAutenticado = false; // Por defecto, el usuario no está autenticado
  }

  render() {
    return html`
      ${this.estaAutenticado
        ? html`<pokemon-search></pokemon-search>` // Asegúrate de que este componente esté definido
        : html`<pagina-login @login-success="${this._manejadorLoginExitoso}"></pagina-login>`
      }
    `;
  }

  _manejadorLoginExitoso() {
    this.estaAutenticado = true;
  }
}

customElements.define('app-principal', AppPrincipal);
