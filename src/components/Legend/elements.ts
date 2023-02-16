import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-top: 1rem;
    margin-top: 56px;

    li:not(:last-child) {
      margin-right: 2rem;
    }
  `};
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 13px;
`;

export const Dot = styled.div<{ down?: boolean }>`
  ${({ down, theme }) => css`
    width: 1rem;
    height: 1rem;
    background: ${down ? theme.yellow : theme.green};
    border-radius: 50%;
    margin-right: 0.5rem;
  `};
`;
