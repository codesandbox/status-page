import styled, { css } from 'styled-components';

export const HeaderStyled = styled.header`
  margin: 6rem 0;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 2rem;
    margin-left: 1rem;
    letter-spacing: -0.05em;
    color: ${theme.white};
    span {
      font-weight: 300;
    }
    
  `};
`;
