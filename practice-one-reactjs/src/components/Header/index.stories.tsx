// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Header from '.';

// Images
import { FireDragon } from '@assets/index';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  headerLogo: FireDragon,
  headerLogoDescription: 'Logo Pokedex Ball',
  children: <p>Welcome to Pokedex</p>,
};
