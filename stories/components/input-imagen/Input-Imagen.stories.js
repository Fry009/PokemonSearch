// stories/MyInputWithImage.stories.js
import { html } from 'lit-html';
import '../../../src/components/input-con-imagen/input-imagen.js';

export default {
  title: 'PokemonSearch/InputConImagen',
  component: 'input-imagen',
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    placeholder: { control: 'text' }
  },
};

const Template = ({ src, alt, placeholder}) => html`<input-imagen .src=${src} .alt=${alt} .placeholder=${placeholder}></input-imagen>`;

export const Default = Template.bind({});
Default.args = {
  src: '../../../src/components/images/usuario.png',
  alt: 'Usuario',
  placeholder: 'Introduce el nombre de usuario'
};
