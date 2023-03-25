import HomeSlider from 'components/HomeSlider/HomeSlider'
import HomeTextSlider from 'components/HomeTextSlider/HomeTextSlider'
import LatestArticles from 'components/LatestArticles/LatestArticles'
import PopularPosts from 'components/PopularPosts/PopularPosts'

type Props = {}
const Home = (props: Props) => {
    return (
        <div>
            <HomeSlider />
            <HomeTextSlider />
            <PopularPosts />
            <LatestArticles />
        </div>
    )
}
export default Home
