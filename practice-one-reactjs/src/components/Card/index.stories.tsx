// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Card from '.';

// Images
import { FireDragon } from '@assets/index';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  card: {
    code: '012',
    photo: FireDragon,
    name: 'Charmander',
    description: 'Smiling Pokemon Charmander',
  },
};
