import { Container } from '@mui/material'
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import AllPosts from 'components/ProductPostsList/AllPosts'
import NewGenerations from 'components/ProductPostsList/NewGenerations'
import FirstContact from 'components/ProductPostsList/FirstContact'
import HiTech from 'components/ProductPostsList/HiTech'
import { Route, Routes } from 'react-router-dom'

import { popularPostsData } from 'utils/BreadCrumbsData'
type Props = {}
const PopularPosts = (props: Props) => {
    return (
        <Container className="popular-posts__container">
            <BreadCrumbs data={popularPostsData} />
            <Routes>
                <Route path="/" element={<AllPosts />} />
                <Route path="/new-generations" element={<NewGenerations />} />
                <Route path="/first-contact" element={<FirstContact />} />
                <Route path="/hi-tech" element={<HiTech />} />
            </Routes>
        </Container>
    )
}
export default PopularPosts
