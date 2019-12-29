import React, { useState, useEffect } from 'react';
import { Icon, Submit } from '../common';
import { colors, text } from '../../styles';
import sendInvite from './sendInvite';
import { Stats } from './';

const pageColors = {
  "Can come": colors.green,
  "No reply": colors.orange,
  "Can't come": colors.red,
  "Not sent": colors.blue
}

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}

const GuestCards = ({ page, cards, menuItem }) => {

  const [invited, setInvited] = useState(false);

  useEffect(() => {
    setInvited(false);
  }, [page])

  if(!cards || cards === 'undefined') return (
    <div style={{ display: 'flex', flex: 1, marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
      <Icon type="spinner" color={colors.darkblue} size={40}/>
    </div>
  );

  if(cards.length === 0) return (
    <div style={{ display: 'flex', flex: 1, marginTop: 50, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Icon type="empty" color={colors.darkblue} size={40}/>
      <div style={text.heading}><p>Nothing found</p></div>
    </div>
  )

  const blacklist = cards.map(({ _id, firstname, lastname, email }) => {
    if(!firstname || !lastname) {
      if(email) return email;
    }
    return false;
  })

  return (
    <div>
      <Stats
        page={page}
        data={cards}
        total={cards && invited && page === 'Not sent' ? cards.length - Object.keys(invited).length : cards.length}
      />
      <div style={style.cardList}>
        {cards.map(({ firstname, lastname, _id, dietary, song, dateSent, email }) => {
          return (
              <Card
                key={`${firstname}${lastname}`}
                page={page}
                name={`${firstname} ${lastname}`}
                dietary={dietary}
                song={song}
                _id={_id}
                invited={invited}
                onInvite={setInvited}
                dateSent={dateSent}
                disabled={blacklist.find(element => element === email)}
                hasName={firstname && lastname}
                email={email}
              />
            );
          }
        )}
      </div>
    </div>
  )
};

const Card = ({ page, name, dietary, song, _id, onInvite, invited = {}, dateSent, disabled, email, hasName }) => {
  const [submitState, setSubmitState] = useState();
  const date = new Date(dateSent);
  console.log(date);
  return (
    <div style={style.card}>
      <div style={style.cardRow}>
        <div>
          <div style={{ display: 'flex' }}>
            <div style={{ ...style.circle, backgroundColor: pageColors[page] }} />
            <div style={style.name}>{name}</div>
          </div>
          { (song || dietary) && page === 'Can come' ? (
            <div style={style.cardRow}>
              {dietary ? (
                <div style={style.label}>
                  <Icon type="utensils" size={15} />
                  <div style={style.labelName}>
                    {dietary}
                  </div>
                </div>
              ) : null}
              {song ? (
                <div style={style.label}>
                  <Icon type="guitars" size={15} />
                  <div style={style.labelName}>
                    {song}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null }
          { page === 'No reply' ? (
            <div style={{ ...style.label, marginTop: 5 }}>
              <Icon type="clock" size={15} />
              <div style={style.labelName}>
                {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}
              </div>
            </div>
          ) : null }
          { !email ? (
            <div style={{ ...style.label, marginTop: 5 }}>
              <Icon type="clock" size={15} />
              <div style={style.labelName}>
                This guest is missing an email address
              </div>
            </div>
          ) : null }
          { !hasName ? (
            <div style={{ ...style.label, marginTop: 5 }}>
              <Icon type="clock" size={15} />
              <div style={style.labelName}>
                This guest is missing a surname
              </div>
            </div>
          ) : null }
          { disabled && hasName ? (
            <div style={{ ...style.label, marginTop: 5 }}>
              <Icon type="clock" size={15} />
              <div style={style.labelName}>
                This guest is associate with another guest, who is missing a surname
              </div>
            </div>
          ) : null }
        </div>
      </div>
        <InviteButton
          page={page}
          submitState={submitState}
          _id={_id}
          setSubmitState={setSubmitState}
          onInvite={(value) => onInvite({ ...invited, ...value })}
          name={name}
          invited={invited}
          disabled={disabled || !email}
        />


    </div>
  );
}

const InviteButton = ({ page, name, submitState, _id, setSubmitState, onInvite, invited, disabled }) => {
  if(page !== 'Not sent' && page !== 'No reply') return false;

  if(submitState === 1 || invited.hasOwnProperty(_id)) return (
    <Submit style={{ backgroundColor: 'green' }}>
      <Icon type="check" size={20} />
    </Submit>
  )

  if(submitState === 'Loading' && !invited.hasOwnProperty(_id)) return (
    <Submit disabled>
      <Icon type="spinner" spin size={20} />
    </Submit>
  );

  return (
      <Submit
        onClick={() => sendInvite(_id, setSubmitState, onInvite)}
        disabled={disabled}
        style={{ backgroundColor: disabled ? 'grey' : colors.darkblue }}
        >
        {page === 'Not sent' ? 'Invite' : 'Chase'}
      </Submit>
  )
}

const style = {
  cardList: {
    display: 'flex',
    flex: 1,
    overflowY: 'scroll',
    flexDirection: 'column',
    padding: 20,
    paddingBottom: 150
  },
  card: {
    backgroundColor: colors.boxLightGrey,
    minHeight: 80,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 15,
    marginRight: 10
  },
  name: {
    color: colors.darkblue,
    fontFamily: 'Bree Serif',
    fontSize: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    color: colors.boxGrey,
    fontFamily: 'Bree Serif',
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  labelName: {
    marginLeft: 5
  },
}

export { GuestCards };
