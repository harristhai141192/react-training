// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Card from '.';

import '../../index.css';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageBg: "url('src/assets/images/Frankie.svg')",
  subText: 'Member since 2016',
  titleText: 'Frankie',
  width: '350px',
};
