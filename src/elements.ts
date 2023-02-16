import styled from 'styled-components';

export const Main = styled.main`
  width: 890px;
  max-width: 100%;
  min-height: 660px;
  padding: 2.5rem;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Footer = styled.span`
  margin:6rem 0;
  text-align: center;
  font-size: 13px;

  color: ${props => props.theme.fadedWhite};
`;
