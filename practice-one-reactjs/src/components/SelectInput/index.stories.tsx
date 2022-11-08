// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Select from '.';

// Constants
import { getPokemonElements } from '@constants/variables';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelName: 'Element',
  listOption: getPokemonElements,
};
