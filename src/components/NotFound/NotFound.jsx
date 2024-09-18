import React from 'react';
import {
  Container,
  Title,
  Message,
  StyledLink,
} from './NotFound.styled'; 

const NotFound = () => {
  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <Message>Sorry, the page you are looking for does not exist.</Message>
      <StyledLink to="/">Go back to Home</StyledLink>
    </Container>
  );
};

export default NotFound;
