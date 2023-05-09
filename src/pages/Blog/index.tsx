import { useCallback, useEffect, useState } from 'react'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { Container } from './styles'
import { api } from '../../lib/axios'
import { Spinner } from '../../components/Spinner'

const username = 'GBDev13'
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface Ipost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}
export function Blog() {
  const [posts, setPosts] = useState<Ipost[]>([])
  const [loading, setLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`,
        )

        setPosts(response.data.items)
      } finally {
        setLoading(false)
      }
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchInput postsLenght={posts.length} getPosts={getPosts} />
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </Container>
      )}
    </>
  )
}
