import styled from 'styled-components'

export const PostHeaderContainer = styled.section`
  width: 100%;
  margin-top: -5rem;
  min-height: 10.5rem;

  background: ${({ theme }) => theme.colors['base-profile']};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  > h1 {
    margin-bottom: 0.5rem;
  }

  > ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;
    li {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      line-height: 0px;
    }
  }
`
