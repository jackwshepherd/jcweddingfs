import axios from 'axios';

const useGuests = async() => {
  const guests = await axios.get('/api/guests');
  return guests;
}

export { useGuests };
