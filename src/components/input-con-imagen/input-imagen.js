import { LitElement, html, css } from "lit";

class InputConImagen extends LitElement {
  static styles = css`
    .input-container {
      display: flex;
      align-items: center;
      border: 1px solid #ccc; /* Bordes ligeros para el contenedor */
      border-radius: 4px; /* Bordes redondeados para el contenedor */
      padding: 8px; /* Espaciado interno */
    }
    input {
      border: none; /* Remueve el borde del input */
      outline: none; /* Remueve el outline para evitar estilos por defecto al enfocar */
      flex-grow: 1; /* Permite que el input ocupe el espacio disponible */
    }
    img {
      width: 24px; /* Tamaño de la imagen */
      height: 24px; /* Tamaño de la imagen */
      margin-left: 8px; /* Espaciado entre el input y la imagen */
    }
  `;

  static properties = {
    src: { type: String }, // URL de la imagen
    alt: { type: String }, // Texto alternativo para la imagen
    placeholder: { type: String }, // Texto para el placeholder
    type: { type: String },
  };

  constructor() {
    super();
    this.src = ""; // Inicializa src como un string vacío
    this.alt = ""; // Inicializa alt como un string vacío
    this.placeholder = ""; // Inicializa placeholder como un string vacio
    this.type = "hidden" | "text" | "search" | "tel" | "url" | "email" | "password" | "datetime" | "date" | "month" | "week" | "time" | "datetime-local" | "number" | "range" | "color" | "checkbox" | "radio" | "file" | "submit" | "image" | "reset" | "button" ; // el tipo de input por defecto es 'text'
  }

  render() {
    return html`
      <div class="input-container">
        <input type=${this.type} placeholder=${this.placeholder} />
        <img src=${this.src} alt=${this.alt} />
      </div>
    `;
  }
}

customElements.define("input-imagen", InputConImagen);
