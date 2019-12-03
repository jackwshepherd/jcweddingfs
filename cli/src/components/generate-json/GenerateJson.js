import * as Guests from '../../data/Guests.json';
import uuidv4 from 'uuid/v4';


const GenerateJson = () => {
  const first = Guests.default[0];
  const firstIdDashed = uuidv4();
  const firstID = firstIdDashed.split('-').join('');
  const firstObject = {
    [firstID]: { id: firstID, ...first, dateSent: false }
  };

  const dataArr = Guests.default
    .reduce((acc, curr) => {

      const { email, firstname, lastname } = curr;
      const fullNameObj = { firstname, lastname };

      // If doesn't exist, put them in an unknown object
      if(!email) {
        return {
          ...acc,
          unknown: acc.unknown ? [...acc.unknown, curr] : [curr]
        }
      }

      // If email used before, get previous id, otherwise create a new one
      const duplicateEmail = Object.values(acc).find(value => value.email === email);
      const idDashed = uuidv4();
      const id = duplicateEmail ? duplicateEmail.id : idDashed.split('-').join('');

      return {
        ...acc,
        [id]: {
          id,
          email,
          people: duplicateEmail && (acc !== firstObject) ? [...acc[id].people, fullNameObj] : [fullNameObj],
          dateSent: false
        }
      }
    }, firstObject);

  const json = { invites: dataArr };
   return JSON.stringify(dataArr, null, 4);;
}

export { GenerateJson };
