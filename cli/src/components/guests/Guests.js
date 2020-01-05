import React, { useState, useEffect } from 'react';
import { Button } from '../common';
import { Header, Menu, GuestCards } from './';
import { useGuests } from '../../hooks';
import axios from 'axios';

const Guests = () => {
  const [guests, setGuests] = useState();
  const [menuItem, setMenuItem] = useState('Not sent');
  const [refresh, setRefresh] = useState(0);

  const filteredGuests = () => {
    if(!guests) return false;

    return guests.filter(guest => {
      switch(menuItem) {
        case 'Can come':
          return guest.rsvp;
        case "Can't come":
          return guest.dateSent && guest.rsvp === false;
        case 'No reply':
          return guest.dateSent && !guest.rsvp;
        case 'Not sent':
          return !guest.dateSent && !guest.rsvp;
        default:
          return false;
      }
    });
  };

  useEffect(() => {
    const getGuests = async () => {
      try {
        const theseGuests = await axios.get('/api/guests/');
        const data  = await theseGuests.data;
        setGuests(Object.values(data).sort((a, b) => {
          if(a.lastname > b.lastname) return 1;
          if(a.lastname < b.lastname) return -1;
          return 0;
        }));
      } catch(error) {
        console.log(error);
      }
    }
    getGuests();
  }, [menuItem, refresh]);

  const actualGuests = filteredGuests();

  return (
    <div style={styles.container}>
      <div style={styles.content}>
          <GuestCards page={menuItem} cards={actualGuests} onInvite={() => setRefresh(1)}/>
      </div>
      <div style={{ position: 'fixed', top: 0 }}>
        <Header text={guests} />
        <Menu selected={menuItem} onClick={(value) => setMenuItem(value)}/>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    marginTop: 160
  }
}

export { Guests };
