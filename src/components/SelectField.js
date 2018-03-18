import React from 'react';
import { _ } from './StateHandler';
import { default as MuiSelect } from 'material-ui/Select';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';

const SelectField = (props) => {
  let { name, options, stateHandler, label, fullWidth } = props;
  let state = stateHandler.get();
  let value = _.get(state,name);
  
  let childProps = Object.assign({}, props);
  delete childProps.stateHandler;
  delete childProps.options;
  delete childProps.onChange;

  return(
    <FormControl style={{width: fullWidth ? '100%' : 'auto'}}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <MuiSelect
        {...childProps}
        value={value}
        onChange={(ev) =>  {
          stateHandler.set(name, ev.target.value);
          if(typeof props.onChange === 'function')
            props.onChange(ev);
        }}
        inputProps={{
          name,
          id: name,
        }}
      >
        {options.map((option, i) => (
          <MenuItem
            key={i}
            value={ option.value || option._id || option.id || option.name || option.title || option}
          >
            {option.label || option.name || option.title || option.value || option}
          </MenuItem>
        ))}
      </MuiSelect>
      </FormControl>
  );
};

export default SelectField;
