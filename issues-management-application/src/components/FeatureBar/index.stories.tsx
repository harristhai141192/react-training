// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import FeatureBar from '.';

export default {
  title: 'Components/FeatureBar',
  component: FeatureBar,
  argTypes: {},
} as ComponentMeta<typeof FeatureBar>;

const Template: ComponentStory<typeof FeatureBar> = (args) => <FeatureBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
