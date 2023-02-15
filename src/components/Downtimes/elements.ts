import styled, { css, keyframes } from 'styled-components';

import { Container as Tooltip } from '../Tooltip/elements';

export const Alias = styled.h3`
  ${({ theme }) => css`
    margin: 0;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: ${theme.white};
  `};
`;

export const Data = styled.span`
  ${({ theme }) => css`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    text-align: right;
    font-size: 13px;

    color: ${theme.fadedWhite};
  `};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  width: 100%;
`;

export const Services = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 60px;
    padding: 60px 0 0;
    margin: 20px 0 0;

    @media (max-width: 920px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `};
`;

export const Service = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

type ColorChangeProps = { down?: boolean; theme: any };
const colorChange = ({ down, theme }: ColorChangeProps) => keyframes`
  from {
    background: ${theme.fadedWhite};
  }

  to {
    background: ${down ? theme.yellow : theme.green};
  }
`;

export const Status = styled.div<{ down?: boolean; loading?: boolean }>`
  ${({ loading, theme }) => css`
    transition: all 0.3s ease;
    background-color: ${loading && '#757575'};
    ${!loading &&
      css`
        animation: ${colorChange} 1s forwards;
      `};

    width: 100%;
    height: 2.5rem;

    &:hover {
      transform: scaleY(1.2);

      + ${Tooltip} {
        opacity: 1;
      }
    }
  `};
`;

export const AllStatus = styled.div`
  display: grid;
  grid-template-columns: repeat(30, 0.5rem);
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  @media (max-width: 920px) {
    grid-template-columns: repeat(30, 1rem);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(30, 0.5rem);
  }
`;
