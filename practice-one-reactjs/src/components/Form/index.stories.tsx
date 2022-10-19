// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Form from '.';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  formTitle: 'Add New Pokemon',
  defaultPokemonData: {},
};
