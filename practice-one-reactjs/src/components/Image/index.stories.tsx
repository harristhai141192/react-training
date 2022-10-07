// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Image from '.';

// Images
import { FireDragon } from '@assets/index';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Logo = Template.bind({});

Logo.args = {
  source: FireDragon,
  alt: 'Pokemon Logo',
  width: '35px',
};
