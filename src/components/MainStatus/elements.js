import styled from 'styled-components';

export const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  color: ${props => props.theme.white};
  margin: 0;
`;

export const LastCheck = styled.span`
  line-height: 1.5rem;

  color: ${({ theme }) => theme.darkWhite};
`;

export const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  transition: all 1s ease;

  background: ${props => {
    if (props.loading) {
      return props.theme.fadedWhite;
    }

    return props.down ? props.theme.yellow : props.theme.green;
  }};
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Percent = styled.h2`
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: right;
  color: ${props => props.theme.white};
  margin-right: 0.5rem;
`;

export const Visual = styled.div`
  display: flex;
  align-items: center;
`;
