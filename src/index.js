
import React from 'react';
import ReactDom from 'react-dom';

import Title from './app';

ReactDom.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)