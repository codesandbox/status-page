import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    color: ${theme.white};
    margin: 0;
  `};
`;

export const LastCheck = styled.span`
  ${({ theme }) => css`
    line-height: 1.5rem;
    font-size: 13px;
    color: ${theme.fadedWhite};
  `};
`;

export const Circle = styled.div<{ down?: boolean; loading?: boolean }>`
  ${({ down, loading, theme }) => css`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    transition: all 1s ease;

    background-color: ${loading
      ? theme.fadedWhite
      : down
      ? theme.yellow
      : theme.green};
  `};
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Percent = styled.h2`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    text-align: right;
    color: ${theme.white};
    margin: 0 0.5rem 0 0;
  `};
`;

export const Visual = styled.div`
  display: flex;
  align-items: center;
`;
