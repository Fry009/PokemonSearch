import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

class PokemonDetail extends LitElement {
  static styles = css`
    .pokemon-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin: 16px;
    }

    .pokemon-imagen {
      width: 200px;
      height: 200px;
      object-fit: contain;
    }
  `;

  @property({ type: Object }) pokemon;

  render() {
    return html`
      <div class="pokemon-container">
        <h2>${this.pokemon?.name}</h2>
        <img class="pokemon-imagen" src=${this.pokemon?.sprites?.front_default} alt=${this.pokemon?.name}>
        <p>Tipo: ${this.pokemon?.types?.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        <p>Altura: ${this.pokemon?.height}</p>
        <p>Peso: ${this.pokemon?.weight}</p>
      </div>
    `;
  }
}

customElements.define('pokemon-detail', PokemonDetail);
