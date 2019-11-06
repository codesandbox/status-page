import styled from 'styled-components';

export const Main = styled.main`
  background: #151515;
  box-shadow: 0 2px 0.25rem rgba(0, 0, 0, 0.25),
    0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  width: 890px;
  max-width: 100%;
  min-height: 660px;
  padding: 2.5rem;
  box-sizing: border-box;
  border-top: 1px solid #242424;
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
  margin: 1.5rem 0;
  text-align: center;
  font-size: 1rem;

  color: ${props => props.theme.fadedWhite};
`;
