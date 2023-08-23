import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {MyInput} from './Input';

export default {
  title: 'components/MyInput',
  component: MyInput,
} as ComponentMeta<typeof MyInput>;

export const Basic1: ComponentStory<typeof MyInput> = args => (
  <MyInput {...args} />
);

Basic1.args = {
  text: 'Next',
  color: 'green',
width: 10,
};
