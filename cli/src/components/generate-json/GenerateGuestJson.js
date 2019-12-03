import * as Guests from '../../data/Guests.json';
import uuidv4 from 'uuid/v4';

const GenerateGuestJson = () => {

  const firstID = uuidv4().split('-').join('');
  const firstObject = {
    [firstID]: {
      id: firstID,
      ...Guests.default[0]
    }
  };

  const generated = Object.values(Guests.default).reduce((acc, curr, index) => {
    const id = uuidv4().split('-').join('');
    if(index === 0) return firstObject;
    return {...acc,[id]: { id, ...curr } };
  }, firstObject);
  return JSON.stringify(generated, null, 4);;
};

export { GenerateGuestJson };
