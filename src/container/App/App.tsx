import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Home from 'pages/Home'
import Cars from 'pages/Cars'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom'

import './App.scss'
import { Container } from '@mui/system'
type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Container className="wrapper-app">
                <Header />
                <div className="main__container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cars" element={<Cars />} />
                    </Routes>
                </div>
                <Footer />
            </Container>
        </StyledEngineProvider>
    )
}
export default App
