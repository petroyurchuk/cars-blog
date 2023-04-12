import { Typography } from '@mui/material'

type Props = {
    children: React.ReactNode
}
const Title = ({ children }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    paddingBottom: '18px',
                }}
            >
                {children}
            </Typography>
        </>
    )
}
export default Title
