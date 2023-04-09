import SideBarHeader from './SideBarHeader'
import Weather from 'components/Weather/Weather'
import SideBarRecentPosts from './SideBarRecentPosts'
import { useAppSelector } from 'redux/hooks'

type Props = {}
const Sidebar = (props: Props) => {
    const recentPostsData = useAppSelector((state) => state.posts.posts)
    const lengthData = recentPostsData.length
    return (
        <div className="sidebar__container">
            <div>
                <SideBarHeader>Weather</SideBarHeader>
                <Weather />
            </div>
            <div>
                <SideBarHeader>Recent Posts</SideBarHeader>
                {recentPostsData
                    .slice(lengthData - 6, lengthData - 1)
                    .map(({ title, date, id }) => (
                        <SideBarRecentPosts
                            key={id}
                            title={title}
                            date={date}
                        />
                    ))}
            </div>
        </div>
    )
}
export default Sidebar
