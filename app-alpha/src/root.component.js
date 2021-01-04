import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path='/'>
        <HelloWorld name={props.name} />
      </Route>
      <Route path='/sub-url'>
        <HelloWorld name={props.name} />
      </Route>
    </BrowserRouter>
  );
}
