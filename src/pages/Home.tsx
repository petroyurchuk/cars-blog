import HomeSlider from 'components/HomeSlider/HomeSlider'
import HomeTextSlider from 'components/HomeTextSlider/HomeTextSlider'
import PopularPosts from 'components/PopularPosts/PopularPosts'

type Props = {}
const Home = (props: Props) => {
    return (
        <div>
            <HomeSlider />
            <HomeTextSlider />
            <PopularPosts />
        </div>
    )
}
export default Home
