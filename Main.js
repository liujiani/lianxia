require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';//node_modules
//import New from './new';
import List from 'components/List';



class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      
      <List />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
