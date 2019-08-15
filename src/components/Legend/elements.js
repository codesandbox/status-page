import styled from 'styled-components';

export const Legend = styled.div`
  display: flex;
  padding-top: 1rem;
  margin-top: 56px;
  border-top: 1px solid ${({ theme }) => theme.transparentWhite};

  li:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const LegendLi = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  background: ${({ theme, down }) => (down ? theme.yellow : theme.green)};
  border-radius: 50%;
  margin-right: 0.5rem;
`;
