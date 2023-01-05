// Libraries
import React from 'react';
import { ThemeProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

// Themes
import themes from '@themes/index';

const customRender = (component: React.ReactNode) => {
  return render(
    <ThemeProvider theme={themes}>
      <Router>{component}</Router>
    </ThemeProvider>,
  );
};

export * from '@testing-library/react';
export { customRender as render };
