import { Header, CardComponent } from '@/components'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent className='success'>CARD</CardComponent>
      </Container>
    </>
  )
}

export default Home
