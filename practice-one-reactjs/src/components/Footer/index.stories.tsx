// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Footer from '.';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});

Primary.args = {};
