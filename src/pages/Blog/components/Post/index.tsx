import { Ipost } from '../..'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { PostC } from './styles'

interface PostProps {
  post: Ipost
}

export function Post({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at)

  return (
    <PostC to={`/post/${post.number}`}>
      <header>
        <h3>{post.title}</h3>
        <span>{formattedDate}</span>
      </header>

      <p>{post.body}</p>
    </PostC>
  )
}
