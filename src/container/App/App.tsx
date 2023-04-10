import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Home from 'pages/Home/Home'
import Cars from 'pages/Cars/Cars'
import Reviews from 'pages/Reviews/Reviews'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom'

import './App.scss'
import { Container } from '@mui/system'
import Tests from 'pages/Tests/Tests'
import Deals from 'pages/Deals/Deals'
import Life from 'pages/Life/Life'
import Tuning from 'pages/Tuning/Tuning'

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
                        <Route path="/reviews" element={<Reviews />} />
                        <Route path="/tests" element={<Tests />} />
                        <Route path="/more/deals" element={<Deals />} />
                        <Route path="/more/life" element={<Life />} />
                        <Route path="/more/tuning" element={<Tuning />} />
                    </Routes>
                </div>
                <Footer />
            </Container>
        </StyledEngineProvider>
    )
}
export default App
