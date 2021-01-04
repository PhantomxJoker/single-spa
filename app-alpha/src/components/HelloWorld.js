import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './HelloWorld.css';

const HelloWorld = props => {
  const { pathname } = useLocation();
  const isRoot = pathname === '/app-alpha/';

  return <React.Fragment>
    <h3>Congrats! Your app {props.name} was loaded</h3>
    <div className="description">
      <span>The current path is {pathname}</span>
    </div>
    <div className="link">
      <a href="/app-beta/">Go to Beta App</a>
      <Link to={isRoot ? '/app-alpha/sub-url' : '/app-alpha/'} exact={props.exact}>
        {isRoot ? 'Visit sub url' : 'Go Back'}
      </Link>
    </div>
  </React.Fragment>
}

export default HelloWorld;
