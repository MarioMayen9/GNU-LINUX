import React, { useState } from 'react';
import './App.css';
import card2 from './assets/card2y.jpg'
import card3 from './assets/card3y.jpg'
import card4 from './assets/card4y.jpg'
import card5 from './assets/card5y.jpg'
import card1 from './assets/card1yj.jpg'


function App() {
  const [cards, setCards] = useState([
    { id: 1, image: card2, description: 'Descripción. Una de las tres cartas de Dios Egipcio, este dragón celestial es un símbolo de devastación. Su poder de ataque y defensa se determina por el número de cartas en tu mano (1000 puntos por cada una). Además, su efecto único reduce en 2000 puntos el ataque de cualquier monstruo invocado por tu oponente y destruye instantáneamente aquellos con 0 puntos de ataque. Es una carta intimidante que exige respeto en el campo.' },
    { id: 2, image: card3, description: 'Descripción. Una versión fusionada y mejorada del Dragón de Ojos Rojos, este monstruo tiene un diseño imponente y un poder inigualable. Con 4500 puntos de ataque, es capaz de dominar cualquier duelo. Aunque su invocación requiere cartas específicas y sacrificios, su presencia en el campo asegura un control absoluto y ataques devastadores.' },
    { id: 3, image: card4, description: 'Descripción. Este guerrero ardiente tiene 1800 puntos de ataque y utiliza su agilidad y técnica para ganar ventaja. Aunque no es una carta de efecto, es un clásico entre los duelistas que buscan un monstruo nivel 4 fuerte y confiable. Su diseño resalta la esencia de un combatiente imparable en llamas.' },
    { id: 4, image: card5, description: 'Descripción. Exodia, el ser prohibido, es una carta envuelta en misterio y poder absoluto. Este monstruo se compone de cinco partes, y reunirlas en tu mano garantiza la victoria automática del duelo. Es un ícono del juego, representando la estrategia definitiva para aquellos que valoran el control y la paciencia en sus jugadas.' },
    { id: 5, image: card1, description: 'Descripción. Una versión oscura y resucitada de Exodia, este monstruo tiene 1800 puntos de ataque y efectos únicos. Es invocado usando la carta mágica Contrato con Exodia, y mientras las piezas de Exodia permanezcan en tu cementerio, Exodia Necross no puede ser destruido en batalla ni por efectos de cartas. Además, su ataque aumenta 500 puntos en cada una de tus Standby Phases. Una carta que combina misterio y resiliencia.' },
  ]);

  const [activeCard, setActiveCard] = useState(null);

  // Función para intercambiar cartas
  const swapCards = (index) => {
    setActiveCard(index); // Marca la carta como activa
    const newCards = [...cards];

    if (index < cards.length - 1) {
      // Intercambia con la carta a la derecha
      [newCards[index], newCards[index + 1]] = [newCards[index + 1], newCards[index]];
    } else if (index > 0) {
      // Intercambia con la carta a la izquierda
      [newCards[index], newCards[index - 1]] = [newCards[index - 1], newCards[index]];
    }

    setTimeout(() => {
      setCards(newCards); // Actualiza el estado con las cartas intercambiadas
      setActiveCard(null); // Desactiva la carta después del intercambio
    }, 300); // Tiempo de la animación
  };

  return (
    <div className="App">
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            className={`card ${activeCard === index ? 'active' : ''}`}
            key={card.id}
            onClick={() => swapCards(index)}
          >
            <img src={card.image} alt={`Carta ${card.id}`} />
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;