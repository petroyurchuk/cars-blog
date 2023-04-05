import SocialListItem from './SocialListItem'
import { PropsSocialListArray } from 'utils/socialListArray'
type PropsSocialList = {
    socialListData: PropsSocialListArray[]
}
const SocialList = ({ socialListData }: PropsSocialList) => {
    return (
        <div className="social-list__wrapper">
            {socialListData.map(
                ({ icon, description, number, bgColorOnHover }, index) => (
                    <SocialListItem
                        key={index}
                        icon={icon}
                        description={description}
                        number={number}
                        bgColorOnHover={bgColorOnHover}
                    />
                )
            )}
        </div>
    )
}
export default SocialList
