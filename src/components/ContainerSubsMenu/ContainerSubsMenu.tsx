import SecondSubMenu from 'components/SecondSubMenu/SecondSubMenu'
import SubMenu from 'components/SubMenu/SubMenu'
import ArrayOfNames from 'utils/ArrayOfNames'

import '../Menu/Menu.scss'
import './ContainerSubsMenu.scss'
type ContainerSubsMenuProps = {}
const ContainerSubsMenu = (props: ContainerSubsMenuProps) => {
    return (
        <div className="wrapper-subs-menu">
            <div className="container-subs-menu">
                <SubMenu arrayOfNamesList={ArrayOfNames[0].arrayOfNamesList} />
                <SecondSubMenu />
            </div>
        </div>
    )
}
export default ContainerSubsMenu
