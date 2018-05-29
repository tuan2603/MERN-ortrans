import React from 'react';
import IntlTelInput from 'react-intl-tel-input';
import { Input, FormInline, Button, Container, Row, Col } from 'mdbreact';
import 'file-loader?name=libphonenumber.js!../../../../node_modules/react-intl-tel-input/dist/libphonenumber.js';
import '../../../../node_modules/react-intl-tel-input/dist/main.css';

class SimpleSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      value: '',
      ecountryData: '',
      phone: '0975227856',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }



  onChangeHandler(status, value, countryData, number, id){
    console.log(status, value, countryData, number, id);
  };

  render() {
    return (
      <div className="container">
        <IntlTelInput
          onPhoneNumberChange={ this.onChangeHandler }
          onPhoneNumberBlur={ this.onChangeHandler }
          preferredCountries={['vn']}
          onSelectFlag={null}
          css={['intl-tel-input', 'form-control']}
                      utilsScript={'libphonenumber.js'} />
      </div>

    );
  }
}


export default SimpleSelect;
