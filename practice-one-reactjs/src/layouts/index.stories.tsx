// Libraries
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Layout from '.';

// CSS
import '../index.css';

export default {
  title: 'Practice-One/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <></>,
};
