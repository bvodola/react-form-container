import React from 'react';
import FormContainer from '../FormContainer';

const withScope = (Component) => {

  return class ScopedComponent extends React.Component {
    render() {

      return(
        <FormContainer scope={this.props.scope}>
          <Component />
        </FormContainer>
      );s
    }
  }
}

export default withScope;