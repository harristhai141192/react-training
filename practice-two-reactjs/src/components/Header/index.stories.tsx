// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Header from '.';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
