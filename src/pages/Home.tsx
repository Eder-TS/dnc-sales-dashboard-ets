import { Header, CardComponent, AvatarList } from '@/components'
import { currencyConverter } from '@/utils'
import { Container } from '@mui/material'

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(6546.16),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(3246.14),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(2169.87),
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
