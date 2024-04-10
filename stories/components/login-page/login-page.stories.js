// PaginaLogin.stories.js
import { html } from 'lit-html';
import '../../../src/pages/login/login.js'; // Asegúrate de ajustar la ruta a tu componente

export default {
  title: 'PokemonSearch/PaginaLogin',
  component: 'pagina-login',
};

const Template = () => html`<pagina-login></pagina-login>`;

export const Login = Template.bind({});
