import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { Ipost } from '../Blog'
import { PostHeader } from './components/PostHeader'
import { useCallback, useState, useEffect } from 'react'
import { PostContent } from './components/PostContent'

const username = 'GBDev13'
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [postData, setPostData] = useState<Ipost>({} as Ipost)
  const [loading, setLoading] = useState(true)

  const { id } = useParams()
  const getPostDetails = useCallback(async () => {
    try {
      setLoading(true)

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )

      setPostData(response.data)
    } finally {
      setLoading(false)
    }
  }, [postData])

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <>
      <PostHeader loading={loading} postData={postData} />
      {!loading && <PostContent content={postData.body} />}
    </>
  )
}
