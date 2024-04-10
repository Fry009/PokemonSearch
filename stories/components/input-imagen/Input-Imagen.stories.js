// stories/MyInputWithImage.stories.js
import { html } from 'lit-html';
import '../../../src/components/input-con-imagen/input-imagen.js';

export default {
  title: 'PokemonSearch/InputConImagen',
  component: 'input-imagen',
  argTypes: {
    type: { control: 'text' },
    src: { control: 'text' },
    alt: { control: 'text' },
    placeholder: { control: 'text' }
  },
};

const Template = ({ type ,src, alt, placeholder}) => html`<input-imagen .type=${type} .src=${src} .alt=${alt} .placeholder=${placeholder}></input-imagen>`;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  src: '../../../src/components/images/usuario.png',
  alt: 'Usuario',
  placeholder: 'Introduce el nombre de usuario'
};
