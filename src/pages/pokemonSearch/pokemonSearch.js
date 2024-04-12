import { LitElement, html, css } from 'lit';
import './pokemon-detail.js'; // Asegúrate de ajustar la ruta al componente

class PokemonSearch extends LitElement {
  static styles = css`
    .search-container {
      padding: 16px;
      text-align: center;
    }
    input {
      margin-right: 8px;
    }
  `;

  static properties = {
    pokemon: { type: Object },
    searchQuery: { type: String },
    errorMessage: { type: String }

  };

  constructor() {
    super();
    this.pokemon = null;
    this.searchQuery = '';
    this.errorMessage = '';

  }

  render() {
    return html`
      <div class="search-container">
        <input type="text" .value="${this.searchQuery}" @input="${this._onInput}">
        <button @click="${this._searchPokemon}">Buscar</button>
        ${this.errorMessage ? html`<div class="error">${this.errorMessage}</div>` : ''}
        ${this.pokemon ? html`<pokemon-detail .pokemon="${this.pokemon}"></pokemon-detail>` : ''}
      </div>
    `;
  }
  

  _onInput(event) {
    this.searchQuery = event.target.value;
  }

  async _searchPokemon() {
    this.errorMessage = ''; // Restablece el mensaje de error para cada nueva búsqueda
    if (this.searchQuery) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.searchQuery.toLowerCase()}`);
        if (!response.ok) {
          throw new Error('No encontrado');
        }
        const data = await response.json();
        this.pokemon = data;
      } catch (error) {
        console.error('Error al buscar el Pokémon:', error);
        this.errorMessage = 'No encontrado';
        this.pokemon = null;
      }
    }
  }
  
}

customElements.define('pokemon-search', PokemonSearch);
