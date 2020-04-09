import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Card from 'components/molecules/Card/Card';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
      <Paragraph>Welcome</Paragraph>
      <Heading>Food App</Heading>
      <Input/>
      <Card></Card>
        <Button>Add</Button>
        <Button secondary>Delete</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
