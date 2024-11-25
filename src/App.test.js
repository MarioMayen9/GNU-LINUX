import { render, screen } from '@testing-library/react';
import App from './App';


test('renders all cards', () => {
  // Renderiza la aplicación
  render(<App />);
  
  // Verifica que las imágenes de las cartas se rendericen
  const images = screen.getAllByRole('img');
  expect(images.length).toBeGreaterThanOrEqual(1); // Ajusta el valor según la cantidad de cartas que esperas
});
