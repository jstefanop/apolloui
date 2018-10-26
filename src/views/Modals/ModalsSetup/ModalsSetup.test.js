import React from 'react';
import ReactDOM from 'react-dom';
import ModalsSetup from './ModalsSetup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalsSetup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
