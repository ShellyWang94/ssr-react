import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import App from './demo/component';

ReactDOM.hydrate(<App/>,
  document.getElementById('root')
);