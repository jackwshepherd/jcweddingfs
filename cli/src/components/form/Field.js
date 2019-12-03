import React from 'react';
import { Button, Option, Textbox, Icon } from '../common';
import { colors } from '../../styles';

const Field = ({ label, options, selected, onChange, textOption, placeholder }) => (
  <div style={styles.box}>
    <div>
      <p>{label}</p>
      {options ? (
        <OptionField
          textOption={textOption}
          selected={selected}
          options={options}
          onChange={onChange}
          placeholder={placeholder}
        />) : (
          <div style={styles.options}>
            <Textbox
              placeholder={placeholder}
              onChange={(text) => onChange(text)}
            />
          </div>
        )
      }
    </div>
  </div>
);

const OptionField = ({ textOption, selected, options, onChange, placeholder }) => (
  <div style={styles.options}>
    {(textOption && (textOption === selected)) || (selected && !options.find(({ value }) => value === selected)) ? (
      <div>
        <Button onClick={() => onChange(null)} style={styles.close}>
          <Icon type='close' size={10} />
        </Button>
        <Textbox
          placeholder={placeholder}
          onChange={(text) => onChange(text)}
          changeWidth
        />
      </div>
    ) : options.map(({ label, value }) => (
        <Option
          key={value}
          selected={selected === value}
          onClick={() => onChange(value)}
        >
          {label}
        </Option>
    ))}
  </div>
);

const styles = {
  box: {
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    width: '80vw',
    maxWidth: 300,
    marginTop: 20,
    padding: 5,
  },
  options: {
    height: 50,
    overflowX: 'scroll',
    whiteSpace: 'nowrap'
  },
  close: {
    backgroundColor: colors.white,
    borderRadius: 30,
    height: 30,
    width: 30,
    marginRight: 10
  }
};

export default Field;
