import './SideBar.scss'

type PropsSideBarRecentPosts = {
    title: string
    date: string
}

const SideBarRecentPosts = ({ title, date }: PropsSideBarRecentPosts) => {
    return (
        <div className="sidebar-recent-posts__item-wrapper">
            <a href="/" className="sidebar-recent-posts__link">
                {title}
            </a>
            <span className="sidebar-recent-posts__date">{date}</span>
        </div>
    )
}
export default SideBarRecentPosts
