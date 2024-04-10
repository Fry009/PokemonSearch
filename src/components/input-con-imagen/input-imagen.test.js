import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import { fireEvent } from '@testing-library/dom';
// Asegúrate de importar tu componente
import './input-imagen.js';

describe('InputConImagen', () => {
  it('dispara el evento input-imagen-change con el valor correcto', async () => {
    const el = await fixture(html`<input-imagen></input-imagen>`);
    const input = el.shadowRoot.querySelector('input');

    // Dispara el evento de input y espera a que se dispare el evento custom
    setTimeout(() => fireEvent.input(input, { target: { value: 'nuevo valor' } }));
    const { detail } = await oneEvent(el, 'input-imagen-change');

    // Verifica que el valor del detalle del evento sea el esperado
    expect(detail.value).to.equal('nuevo valor');
  });
});
