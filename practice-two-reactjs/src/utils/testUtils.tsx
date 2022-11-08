import { ThemeProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import themes from '@themes/index';
import { ReactNode } from 'react';

const customRender = (component: ReactNode) => {
  return render(<ThemeProvider theme={themes}>{component}</ThemeProvider>);
};

export * from '@testing-library/react';
export { customRender as render };
