// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Board from '.';
import Button from '@components/Button';

// Mock data
import tableData from '../../mocks/tableData';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/Board',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  addButton: <Button label={'+ Add New Pokemon'} />,
  cardItem: (
    <>
      <div className='card'>
        {tableData.map((item) => {
          return (
            <>
              <img src={item.photo} width='40' />
              <p>{item.code}</p>
              <p>{item.name}</p>
            </>
          );
        })}
      </div>
    </>
  ),
};
