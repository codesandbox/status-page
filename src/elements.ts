import styled from 'styled-components';

export const Main = styled.main`
  background: #1d2022;
  box-shadow: 0 2px 0.25rem rgba(0, 0, 0, 0.25),
    0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
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
  margin: 1.5rem 0;
  text-align: center;
  font-size: 1rem;

  color: rgba(255, 255, 255, 0.6);
`;
