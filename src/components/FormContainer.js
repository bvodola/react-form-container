import React from 'react';
import StateHandler from './StateHandler';

function recursiveMap(children, cb) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) { 
      return child;
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursiveMap(child.props.children, cb)
      });
    }

    return cb(child);
  })
}

const FormContainer = (props) => {
  let stateHandler = new StateHandler(props.scope);

  let formFields = [
    'p', 'button', 'RaisedButton', 'h2'
  ];

  let children = recursiveMap(props.children, function(child) {

    const formFields = ['CheckboxGroup', 'MaskedTextField', 'RadioGroup', 'SelectField', 'TextField'];

    let field = typeof child.type.name !== 'undefined' ? child.type.name : child.type;
    let scopedField = child.props.scoped;

    return formFields.indexOf(field) !== -1 || scopedField ?
      React.cloneElement(child, {stateHandler, scope: props.scope}):
      React.cloneElement(child);

  });

  return (
    <div className="form-container">
      {children}
    </div>
  );
 }


export default FormContainer;
