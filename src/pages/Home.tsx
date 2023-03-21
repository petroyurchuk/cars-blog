import HomeSlider from 'components/HomeSlider/HomeSlider'
import HomeTextSlider from 'components/HomeTextSlider/HomeTextSlider'

type Props = {}
const Home = (props: Props) => {
    return (
        <div>
            <HomeSlider />
            <HomeTextSlider />
        </div>
    )
}
export default Home
