import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem 2.5rem;
  border-radius: 10px;
  display: flex;
  gap: 2rem;
  margin-top: -5rem;
`
export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`

export const ProfileContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: 'Nunito';
  > header {
    display: flex;
    justify-content: space-between;
    > h1 {
      margin-bottom: 0.5rem;
      font-weight: 700;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors['base-title']};
      line-height: 130%;
    }
  }

  > ul {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: auto;

    > li {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }
`
