import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Ipost } from '../../../Blog'
import { Spinner } from '../../../../components/Spinner'
import { relativeDateFormatter } from '../../../../utils/formatter'

interface PostHeaderProps {
  postData: Ipost
  loading: boolean
}
export function PostHeader({ postData, loading }: PostHeaderProps) {
  const navigate = useNavigate()
  function goBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormatter(postData?.created_at)

  return (
    <PostHeaderContainer>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Back"
              onClick={goBack}
              variant="iconLeft"
            />
            <ExternalLink
              text="see on github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments}comments
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  )
}
