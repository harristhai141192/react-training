// Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Link from '.';

export default {
  title: 'Practice-One/Link',
  component: Link,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: 'addLink',
  children: <p>This is Link</p>,
};
