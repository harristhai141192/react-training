// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Form from '.';

// Constants
import { POKEMON_ELEMENTS } from '@constants/variables';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
const generateKey = (e: string) => `${e}_${new Date().getTime()}`;

Primary.args = {
  formTitle: 'Add New Pokemon',
  type1Children: (
    <>
      {POKEMON_ELEMENTS.map((item) => {
        return (
          <option value={item.name} key={generateKey(item.name)}>
            {item.name}
          </option>
        );
      })}
    </>
  ),
  type2Children: (
    <>
      {POKEMON_ELEMENTS.map((item) => {
        return (
          <option value={item.name} key={generateKey(item.name)}>
            {item.name}
          </option>
        );
      })}
    </>
  ),
};
