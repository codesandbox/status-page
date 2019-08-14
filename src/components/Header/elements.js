import styled from 'styled-components'

export const HeaderStyled = styled.header`
  margin: 3rem 0 2.5rem 0;
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  margin-left: 1rem;
  color: ${props => props.theme.white};
`
