import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Menu, Background, CardList, CardCover, CardContent } from '../common';
import * as Data from '../../data/Data.json';

const Page = () => {
  const { page } = useParams();
  const coverCardRef = useRef(null);

  useEffect(() => {
    coverCardRef.current.scrollIntoView({
     behavior: 'smooth',
     block: 'center',
     inline: 'center',
   });
 }, [page])

  return (
    <div>
      <Menu />
      <Background image={Data.default[page].image}>
        <CardList>
          <div ref={coverCardRef}>
              <CardCover
                type={page}
                color={Data.default[page].coverCard.color}
                textColor={Data.default[page].coverCard.textColor}
              >
                  {Data.default[page].coverCard.text}
                </CardCover>
          </div>
          {Data.default[page].cards.map((card, index) => (
            <CardContent
              icon={card.icon}
              title={card.title}
              type={page}
              key={index}
              color={Data.default[page].coverCard.color}
              textColor={Data.default[page].coverCard.textColor}
            >
              {card.text}
            </CardContent>
          ))}
        </CardList>
      </Background>
    </div>
  );
}

export { Page };
