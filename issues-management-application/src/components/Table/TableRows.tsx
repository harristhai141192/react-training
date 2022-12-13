import React from 'react';
import { Td, Tr } from '@chakra-ui/react';
import { generateKey } from '@utils/mainFeaturesUtils';

interface IProps {
  children: React.ReactNode;
}

const TableRows: React.FC<IProps> = ({ children }) => {
  return (
    <Tr>
      <Td key={generateKey()} w='100%'>
        {children}
      </Td>
    </Tr>
  );
};

export default TableRows;
