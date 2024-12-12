import '@testing-library/jest-dom'
import 'jest-styled-components'
import { themesList } from '@/resources/themesList'
import { Logo } from '@/components'
import { pxToRem } from '@/utils'
import { render } from '@testing-library/react'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'

describe('logo', () => {
    const renderComponent = (theme: Theme, width?: number, height?: number) => render(
        <ThemeProvider theme={theme}>
            <Logo height={height || 32} width={width || 32} />
        </ThemeProvider>
    )

    themesList.forEach(({name, theme}) => {
        describe(`${name}`, () => {
            it ('should apply the correct background image', () => {
                const { container } = renderComponent(theme)
                expect(container.firstChild).toHaveStyleRule(
                    'background-image',
                    `url(/${theme.appLogo})`
                )
            })

            it ('should apply the correct width and height', () => {
                const { container } = renderComponent(theme, 40, 40)
                expect(container.firstChild).toHaveStyleRule(
                    'width',
                    pxToRem(40)
                )
                expect(container.firstChild).toHaveStyleRule(
                    'height',
                    pxToRem(40)
                )
            })
        })
    })
})