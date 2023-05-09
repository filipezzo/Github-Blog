import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4.5rem;
    margin-bottom: 0.75rem;
  }

  > input {
    background: ${({ theme }) => theme.colors['base-input']};
    padding: 0.75rem 1rem;
    width: 100%;
    border-radius: 6px;
    border: none;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors['base-text']};
    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
    &:focus {
      border-color: ${({ theme }) => theme.colors['brand-blue']};
      outline: none;
    }
  }
`
