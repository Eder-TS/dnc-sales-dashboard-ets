import { themesList } from '@/resources/themesList'
import { StyledButton } from '@/components'
import { render } from '@testing-library/react'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'

describe('StyledButton', () => {
  const renderComponent = (theme: Theme, className?: string, props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <StyledButton className={className} {...props} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should match snapshot with alert class', () => {
        const { asFragment } = renderComponent(theme, 'alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match snapshot with primary class', () => {
        const { asFragment } = renderComponent(theme, 'primary')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match snapshot with borderless-alert class', () => {
        const { asFragment } = renderComponent(theme, 'borderless-alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match snapshot with disabled status', () => {
        const { asFragment } = renderComponent(theme, 'primary', {
          disabled: true,
        })
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
