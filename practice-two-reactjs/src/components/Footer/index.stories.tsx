// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Footer from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
