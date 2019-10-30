import React from 'react';

import { Link, Icon } from '@storybook/design-system';


const onLinkClick = () => console.log('clicked');

export default {
  title: 'Stories|No edit',
  component: Icon,
};

export const icons = () => (
  <div>
    <Link href="https://learnstorybook.com">Default</Link>
    <br />
    <Link secondary href="https://learnstorybook.com">
      Secondary
    </Link>
    <br />
    <Link tertiary href="https://learnstorybook.com">
      tertiary
    </Link>
    <br />
    <Link nochrome href="https://learnstorybook.com">
      nochrome
    </Link>
    <br />
    <Link href="https://learnstorybook.com">
      <Icon icon="discord" aria-hidden />
      With icon in front
    </Link>
    <br />
    <Link containsIcon href="https://learnstorybook.com" aria-label="Toggle side bar">
      <Icon icon="sidebar" aria-hidden />
    </Link>
    <br />
    <Link containsIcon withArrow href="https://learnstorybook.com">
      With arrow behind
    </Link>
    <br />
    <span style={{ background: '#333' }}>
      <Link inverse href="https://learnstorybook.com">
        Inverted colors
      </Link>
    </span>
    <br />
    {/* gatsby and styled-components don't work nicely together  */}
    {/* eslint-disable-next-line */}
    <Link isButton onClick={onLinkClick}>
      is actually a button
    </Link>
    <br />
  </div>
);