import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/styles.scss';
import './styles/index.css';
import './css/mdb.css';

render((
  <App />
), document.getElementById('app'));
