import React from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'file?name=libphonenumber.js!../../../../node_modules/react-intl-tel-input/dist/libphonenumber.js';
import '../../../../node_modules/react-intl-tel-input/dist/main.css';

import { Input, FormInline, Button, Container, Row, Col } from 'mdbreact';


class SignIN extends React.Component {
  constructor(props) {
    super(props);
  }




  render() {
    return (
      <Container fluid style={{textAlign: 'initial'}}>
        <IntlTelInput
          preferredCountries={['vn']}
          css={ ['intl-tel-input', 'form-control'] }
          utilsScript={ 'libphonenumber.js' }
        />
      </Container>
    );
  }
};

export default SignIN;
