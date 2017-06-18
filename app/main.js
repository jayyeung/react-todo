// compile scss
require('styles/main.scss');

// React
import React from 'react';
import ReactDOM from 'react-dom';

import Todo from 'components/todo';

ReactDOM.render( <Todo/>, document.getElementById('app'));