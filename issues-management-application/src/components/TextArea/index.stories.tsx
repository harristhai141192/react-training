// Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import TextArea from '.';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'This is title Comment',
  isMarkdown: true,
  valueInput: null,
};
