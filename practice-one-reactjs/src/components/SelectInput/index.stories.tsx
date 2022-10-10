// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import SelectInput from '.';

// Constants
import { POKEMON_ELEMENTS } from '@constants/variables';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/SelectInput',
  component: SelectInput,
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => <SelectInput {...args} />;
const generateKey = (e: string) => `${e}_${new Date().getTime()}`;

export const Default = Template.bind({});
Default.args = {
  labelName: 'Element',
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
