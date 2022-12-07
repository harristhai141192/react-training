// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import LoadingSpinner from '.';

export default {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {},
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = () => <LoadingSpinner />;

export const Default = Template.bind({});
Default.args = {};
