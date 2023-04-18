import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import './Preview.scss'

type Props = {
    id: number
    image: string
    category: string
    title: string
    author: string
    date: string
    description?: string
}
type PropsPreview = {
    dataPosts: Props[]
    categoryForSort: string
}
const Preview = ({ dataPosts, categoryForSort }: PropsPreview) => {
    return (
        <div className="preview-wrapper">
            <Grid container columnSpacing={1}>
                {dataPosts
                    .filter(
                        (item) =>
                            item.category.toLowerCase() === categoryForSort
                    )
                    .slice(0, 2)
                    .map(({ id, image, title, author, date, category }) => (
                        <Grid
                            className="wrapper-post-preview"
                            item
                            key={id}
                            xs={6}
                        >
                            <Link to={`/posts/${id}`} className="link-preview">
                                <img src={image} alt={title} />
                            </Link>
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
                                        - {date}
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
