"use strict"

import React from 'react';
import { render as reactDomRender } from './react-dom';

import Title from './app';

reactDomRender(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)