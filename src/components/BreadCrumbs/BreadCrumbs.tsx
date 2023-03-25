import { Container } from '@mui/material'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useState } from 'react'
import './BreadCrumbs.scss'
import AllPosts from 'components/ProductPostsList/AllPosts'
import NewGenerations from 'components/ProductPostsList/NewGenerations'
import FirstContact from 'components/ProductPostsList/FirstContact'
import HiTech from 'components/ProductPostsList/HiTech'
import Box from '@mui/material/Box'

type PropsBreadCrumbs = {
    data: {
        title: string
        namesOfList?: string[]
        namesOfLinks?: string[]
    }
}
const BreadCrumbs = ({ data }: PropsBreadCrumbs) => {
    const [value, setValue] = useState<string>('1')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }
    const filterNamesOfList = data.namesOfLinks?.filter((item) => item)
    if (!filterNamesOfList) {
        return (
            <Container className="bread-crumbs__container">
                <div className="popular-posts__wrapper">
                    <h3 className="popular-posts-title">{data.title}</h3>
                </div>
            </Container>
        )
    }
    return (
        <>
            {data.namesOfList && (
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box
                            sx={{
                                borderBottom: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <div className="wrapper-board-of-breadcrumbs">
                                <h3 className="popular-posts-title">
                                    {data.title}
                                </h3>
                                <div className="wrapper-list-tabs">
                                    <TabList
                                        onChange={handleChange}
                                        aria-label="lab API tabs example"
                                    >
                                        {data.namesOfList.map((item, index) => (
                                            <Tab
                                                key={index}
                                                value={(index + 1).toString()}
                                                label={item}
                                                className="tab-popular-posts"
                                            ></Tab>
                                        ))}
                                    </TabList>
                                </div>
                            </div>
                        </Box>

                        <TabPanel value="1">
                            <AllPosts />
                        </TabPanel>
                        <TabPanel value="2">
                            <NewGenerations />
                        </TabPanel>
                        <TabPanel value="3">
                            <FirstContact />
                        </TabPanel>
                        <TabPanel value="4">
                            <HiTech />
                        </TabPanel>
                    </TabContext>
                </Box>
            )}
        </>
    )
}
export default BreadCrumbs
