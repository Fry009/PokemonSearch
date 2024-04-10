// PaginaLogin.stories.js
import { html } from 'lit-html';
import '../../../src/pages/app-principal/app-principal.js'; // Asegúrate de ajustar la ruta a tu componente

export default {
  title: 'PokemonSearch/AppPrincipal',
  component: 'app-principal',
};

const Template = () => html`<app-principal></app-principal>`;

export const Login = Template.bind({});
