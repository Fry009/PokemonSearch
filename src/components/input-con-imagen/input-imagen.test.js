import { html, fixture, expect } from '@open-wc/testing';
import { screen, fireEvent } from '@testing-library/dom';
import '..src/components/input-con-imagen/input-imagen.js'; // Asegúrate de ajustar la ruta al componente

describe('InputConImagen', () => {
  it('se renderiza correctamente', async () => {
    const el = await fixture(html`<input-imagen src="test.png" alt="Test" placeholder="Escribe algo"></input-imagen>`);
    expect(el.shadowRoot.querySelector('input')).not.to.be.null;
    expect(el.shadowRoot.querySelector('img').src).to.include('test.png');
  });

  it('dispara el evento input-imagen-change con el valor correcto', async () => {
    const el = await fixture(html`<input-imagen></input-imagen>`);
    const input = el.shadowRoot.querySelector('input');
    setTimeout(() => fireEvent.input(input, { target: { value: 'nuevo valor' } }));
    // Asegúrate de escuchar el evento correctamente en tu componente.
    await oneEvent(el, 'input-imagen-change');
    // Aquí, necesitarás ajustar la prueba para verificar el comportamiento esperado después del evento.
  });
});
