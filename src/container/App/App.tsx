import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

import './App.scss'
import { Container } from '@mui/system'
type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Container className="wrapper-app">
                <Header />
                <Main />
                <Footer />
            </Container>
        </StyledEngineProvider>
    )
}
export default App
