import axios from 'axios';

const sendForm = async (form, callback) => {
  callback('Loading');
  try {
    if(!form) return 'Form was not correctly structured';
    const query = await axios.post('/api/save_user', {form});
    callback(1);
    return query;
  } catch(error) {
    callback(0);
    return error;
  }
}

export default sendForm;
