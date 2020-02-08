import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

body {
    font-family: ${({theme}) => theme.typography.fontFamily};
}`

export default GlobalStyles;