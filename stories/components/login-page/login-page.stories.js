import { html } from 'lit-html';
import '../../../src/pages/pokemonSearch/pokemonSearch.js'; // Asegúrate de ajustar la ruta al componente

export default {
  title: 'PokemonSearch/PokemonSearch',
  component: 'pokemon-search',
};

const Template = () => html`<pokemon-search></pokemon-search>`;

export const Default = Template.bind({});
