import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f4f4f4;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  color: #666;
`;

export const StyledLink = styled(Link)`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
