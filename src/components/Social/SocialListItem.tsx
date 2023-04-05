import { useState } from 'react'
import './Social.scss'

type PropsSocialListItem = {
    icon: string
    number: string
    description: string
    bgColorOnHover: string
}
const SocialListItem = ({
    icon,
    number,
    description,
    bgColorOnHover,
}: PropsSocialListItem) => {
    const [bgColor, setBgColor] = useState<string>('#222')
    const style = {
        backgroundColor: bgColor,
    }
    const handleMouseEnter = () => {
        setBgColor(bgColorOnHover)
    }
    const handleMouseLeave = () => {
        setBgColor('#222')
    }
    return (
        <a
            href="/"
            className="social-block"
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="social-block__icon-wrapper">
                <img
                    src={icon}
                    alt={description}
                    className="social-block__icon"
                />
            </div>
            <div className="social-block__number">{number}</div>
            <div className="social-block__description">{description}</div>
        </a>
    )
}
export default SocialListItem
