import SideBarHeader from './SideBarHeader'
import Weather from 'components/Weather/Weather'

type Props = {}
const Sidebar = (props: Props) => {
    return (
        <div>
            <SideBarHeader>Weather</SideBarHeader>
            <Weather />
        </div>
    )
}
export default Sidebar
