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



  onChangeHandler(data){
    console.log(data);
  };

  render() {
    return (
      <div>
        <IntlTelInput css={['intl-tel-input', 'form-control']}
                      utilsScript={'libphonenumber.js'} />
      </div>
    );
  }
}


export default SimpleSelect;
