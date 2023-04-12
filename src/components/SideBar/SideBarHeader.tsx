import React from 'react'
import './SideBar.scss'
type Props = {
    children: React.ReactNode
}
const SideBarHeader = ({ children }: Props) => {
    return (
        <>
            <div className="sideBar-header__wrapper">
                <h3 className="sidebar-header__title">{children}</h3>
            </div>
        </>
    )
}
export default SideBarHeader
