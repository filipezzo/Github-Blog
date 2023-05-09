import styled from 'styled-components'
import bg from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bg}) no-repeat center;
  background-size: cover;

  > img {
    margin-bottom: 2rem;
  }
`
