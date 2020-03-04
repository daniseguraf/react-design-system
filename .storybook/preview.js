import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';

addDecorator(story => (
  <Fragment>
    <GlobalStyle />
    {story()}
  </Fragment>
));
