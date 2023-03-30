import { Grid } from '@mui/material'
import './Preview.scss'

type Props = {
    id: number
    image: string
    category: string
    title: string
    author: string
    data: string
    description?: string
}
type PropsPreview = {
    dataPosts: Props[]
}
const Preview = ({ dataPosts }: PropsPreview) => {
    return (
        <div className="preview-wrapper">
            <Grid container columnSpacing={1}>
                {dataPosts
                    .filter(
                        (item) => item.category.toLowerCase() === 'motorsports'
                    )
                    .slice(0, 2)
                    .map(({ id, image, title, author, data, category }) => (
                        <Grid
                            className="wrapper-post-preview"
                            item
                            key={id}
                            xs={6}
                        >
                            <a href="/" className="link-preview">
                                <img src={image} alt={title} />
                            </a>
                            <div className="preview-info-block">
                                <a href="/" className="preview-category">
                                    {category}
                                </a>
                                <h2 className="preview-title">{title}</h2>
                                <div className="preview-info-about-post">
                                    <span className="preview-author">
                                        {author}
                                    </span>
                                    <span className="preview-date">
                                        - {data}
                                    </span>
                                </div>
                            </div>
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
}
export default Preview
