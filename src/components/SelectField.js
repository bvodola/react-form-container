import React from 'react';
import { _ } from './StateHandler';
import { default as MuiSelect } from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

const SelectField = (props) => {
  let { name, options, stateHandler } = props;
  let state = stateHandler.get();
  let value = _.get(state,name);
  let childProps = Object.assign({}, props);
  delete childProps.stateHandler;
  delete childProps.options;
  delete childProps.onChange;

  return(
    <MuiSelect
      {...childProps}
      value={value}
      onChange={(ev) =>  {
        stateHandler.set(name, ev.target.value);
        if(typeof props.onChange === 'function')
          props.onChange(ev);
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
  );
};

export default SelectField;
