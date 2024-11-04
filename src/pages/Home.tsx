import {
  Header,
  CardComponent,
  AvatarList,
  CustomTable,
  CustomChart,
} from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome1</span>,
        <span>nome1@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome2</span>,
        <span>nome2@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome3</span>,
        <span>nome3@email.com</span>,
        <button>ACTION</button>,
      ],
    ],
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>

        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>

        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
            data={[1000.12, 2456.86, 987.32, 649.84, 789.15]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
