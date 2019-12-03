import axios from 'axios';

const sendInvite = async (id, callback, onInvite) => {
  callback('Loading');
  try {
    if(!id) return 'No user to send the invite to';
    const query = await axios.post('/api/send_invite', { id });
    callback(1);
    onInvite(query.data);
    return query;
  } catch(error) {
    callback(0);
    console.log(error);
    return error;
  }
}

export default sendInvite;
