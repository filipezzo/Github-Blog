import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const PostC = styled(Link)`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  padding: 2rem;
  height: 16.25rem;
  border: 2px solid ${({ theme }) => theme.colors['base-post']};
  transition: 0.4s;

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
  }

  > header {
    > h3 {
      color: ${({ theme }) => theme.colors['base-title']};
      flex: 1;
    }
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  > span {
    width: max-content;
  }
  > p {
    color: ${({ theme }) => theme.colors['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
