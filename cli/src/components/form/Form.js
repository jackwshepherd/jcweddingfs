import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Redirect, useParams } from 'react-router-dom';
import { useScreenHeight } from '../../hooks';
import { Submit, Icon, Button } from '../common';
import { text, colors } from '../../styles';
import Field from './Field';
import Section from './Section';
import * as catimage from '../../images/catimage.jpg'
import sendForm from './sendForm';
const pageCount = 5 - 1;

const Form = () => {

  // HANDLE STATE
  // -- Form
  const [form, setForm] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(0);

  // -- Arrows
  const [displayArrows, setDisplayArrows] = useState({ up: false, down: true });
  const [scrollPosition, setScrollPosition] = useState(0);

  // HANDLE REFS
  const containerRef = useRef(null);

  // HANDLE VARIABLES
  // -- Initial id
  const { id } = useParams();
  // -- Get height of screen
  const contentHeight = useScreenHeight();
  // -- Handle validation RETURN TO THIS
  const canCome = form ? !!(Object.values(form).find(({ rsvp }) => rsvp === 1)) : false;
  const canSubmit = form ? !!(Object.values(form).every(({ rsvp }) => rsvp !== undefined)) : false;

  useEffect(() => {
    // Add event listener
    containerRef.current.addEventListener('scroll', () => {
      setScrollPosition(containerRef.current.scrollTop);
    });

    const getGuests = async () => {
      try {
        if(form) return false;
        const invite = await axios.get(`/api/get_invite/${id}`);
        setForm(invite.data);
      } catch(error) {
        console.log(error);
      }
    }

    getGuests();
    console.log(scrollPosition % contentHeight);

    // Handle boxes
    if((scrollPosition % contentHeight <= 100) || !(contentHeight % scrollPosition)) {
      setDisplayArrows({
        up: scrollPosition >= contentHeight,
        down: scrollPosition === 0 || (canSubmit && (scrollPosition < (contentHeight * pageCount)))
      });
    } else {
      setDisplayArrows({ up: false, down: false });
    }
    return () => false;
  }, [form, id, canSubmit, contentHeight, scrollPosition]);

  if(submitStatus === 1) {
    return <Redirect to='/Success' />
  }

  return (
    <div style={styles.container} className="webkitfix" ref={containerRef}>

      <Section>
        <div style={styles.cats} />
        <p style={text.date}>30 May 2020</p>
        <p style={text.small}>Ufton Court, Green Ln, Ufton Nervet, Reading RG7 4HD</p>
        <p style={{ marginTop: '5vh' }}><Icon type="down" size={40} /></p>
      </Section>

    {form ? (
      <Section>
        <Icon type="bells" size={50} />
        <p style={text.heading}>Can you come?</p>
        <div style={styles.fields}>
          {Object.values(form).map(({ _id, firstname }) => (
            <div key={firstname}>
              <Field
                label={firstname}
                options={[ { value: 1, label: 'Can come' }, { value: 0, label: "Can't come" }]}
                onChange={((value) => setForm({ ...form, [_id]: { ...form[_id], rsvp: value } }))}
                selected={form[_id].rsvp}
              />
            </div>
          ))}
        </div>
      </Section>
    ) : null}

    {form && canCome ? (
      <Section>
        <Icon type="utensils" size={50} />
        <p style={text.heading}>Any dietary requirements?</p>
        <div style={styles.fields}>
          {Object.values(form).map(({ _id, firstname }) => {
            if(form[_id].rsvp === 0) return false;
            return (
              <div key={firstname}>
                <Field
                  label={firstname}
                  options={[
                    { label: 'None', value: 'None'},
                    { label: 'Vegetarian', value: 'Vegetarian' },
                    { label: 'Vegan', value: 'Vegan' },
                    { label: 'Other', value: 'Other' }
                  ]}
                  textOption={'Other'}
                  onChange={(value) => setForm({ ...form, [_id]: { ...form[_id], dietary: value } })}
                  selected={form[_id].dietary}
                  placeholder={'Enter details'}
                />
              </div>
            )}
          )}
        </div>
      </Section>
    ) : null}

    {form && canCome ? (
      <Section>
        <Icon type="guitars" size={50} />
        <p style={text.heading}>Pick a song</p>
            <Field
              placeholder={'Your favourite song'}
              onChange={(value) => setForm({ ...form, [id]: { ...form[id], song: value }})}
            />
      </Section>
    ) : null}

      <Section>
        <Icon type="cheers" size={50} />
        <p style={text.heading}>{submitStatus !== -1 ? 'All done?' : 'Loading...' }</p>
          <p>
            <Submit onClick={() => sendForm(form, setSubmitStatus)}
              disabled={!canSubmit || submitStatus === 'Loading'}>
              {submitStatus !== 'Loading' ? 'Submit' : <Icon type='spinner' spin size={20} />}
            </Submit>
          </p>
          { submitStatus === 1 ?
            <p>The form didn't load - try again or email us at <a href='mailto: charlieandjack11@gmail.com'>charlieandjack11@gmail.com</a></p>
            : null }
      </Section>



    </div>
  );
}


const styles = {
  cats: {
    width: '30vh',
    height: '30vh',
    backgroundColor: 'red',
    borderRadius: '30vh',
    marginBottom: '5vh',
    marginTop: '5vh',
    background: `url(${catimage})`,
    backgroundPosition: 'center center',
    backgroundSize: '30vh 30vh',
    border: `5px solid ${colors.borderGrey}`
  },
  container: {
    flex: 1,
    width: '100vw',
    overflow: 'auto',
  },
  footer: {
    position: 'absolute',
    width: '100vw',
    bottom: 40,
    left: 0,
    display: '-ms-flexbox',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    display: '-ms-flexbox',
    display: 'flex',
    width: '100vw',
    justifyContent: 'center',
  },
  fields: {
  }
}

export { Form };
