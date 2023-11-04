import React from 'react';
import Card from './Card';

import { CardAreaInterface } from '@/interface/CardInterface';

const CardArea: React.FC<CardAreaInterface> = ({cards}) => {
  return (
    <div className="container" style={{ marginTop: 500 }}>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto p-2 flex justify-items-center items-center">
        
      {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            image={card.image}
          />
        ))}

      </div>
    </div>
  );
};

export default CardArea;
