import { useForm } from 'react-hook-form'
import { Container } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchInputProps {
  postsLenght: number
  getPosts: (query?: string) => Promise<void>
}

export function SearchInput({ postsLenght, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query)
  }
  return (
    <Container onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publishes</h3>
        <span> {postsLenght} Publishes</span>
      </header>
      <input type="text" placeholder="Search content" {...register('query')} />
    </Container>
  )
}
