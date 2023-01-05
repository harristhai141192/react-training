// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Board from '.';
import Button from '@components/Button';

// Mock data
import tableData from '@mocks/tableData';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/Board',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;
const generateKey = (item: string) => `${item}_${new Date().getTime()}`;

export const Primary = Template.bind({});

Primary.args = {
  addButton: <Button label={'+ Add New Pokemon'} />,
  cardItem: (
    <>
      {tableData.map((item) => {
        return (
          <div className='card-item' key={generateKey(item.name)}>
            <img src={item.photo} width='40' />
            <p>{item.code}</p>
            <p>{item.name}</p>
          </div>
        );
      })}
    </>
  ),
};
