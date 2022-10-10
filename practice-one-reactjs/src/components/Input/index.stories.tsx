// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Input from '.';

// Constants
import { POKEMON_ELEMENTS } from '@constants/variables';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelName: 'Pokemon name',
  type: 'text',
  placeholder: 'text',
  selectInput: false,
};

export const Upload = Template.bind({});
Upload.args = {
  labelName: 'Pokemon Photo',
  type: 'file',
  selectInput: false,
};

export const Select = Template.bind({});
const generateKey = (e: string) => `${e}_${new Date().getTime()}`;

Select.args = {
  labelName: 'Element Select',
  placeholder: 'text',
  selectInput: true,
  required: false,
  children: (
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
