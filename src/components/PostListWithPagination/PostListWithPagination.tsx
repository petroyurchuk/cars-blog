import { useState } from 'react'
import { Pagination } from '@mui/material'

import ProductPostsList from 'components/ProductPostsList/ProductPostsList'

import './PostListWithPagination.scss'
interface Post {
    id: number
    image: string
    category: string
    title: string
    author: string
    data: string
    description: string
}

interface Props {
    posts: Post[]
    postsPerPage: number
    onChangePage: (page: number) => void
}

const PostListWithPagination = ({
    posts,
    postsPerPage,
    onChangePage,
}: Props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(posts.length / postsPerPage) + 1
    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        page: number
    ) => {
        setCurrentPage(page)
        onChangePage(page)
    }

    let startIndex = (currentPage - 2) * postsPerPage

    const selectedPosts = posts.slice(startIndex, startIndex + postsPerPage)

    return (
        <div>
            <ProductPostsList posts={selectedPosts} />
            <div className="wrapper-pagination">
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    boundaryCount={2}
                    siblingCount={1}
                    onChange={handlePageChange}
                    showFirstButton
                    showLastButton
                    shape="rounded"
                    size="medium"
                />
                <div className="info-about-pages">
                    Page {currentPage} of {posts.length / 5 + 1}
                </div>
            </div>
        </div>
    )
}

export default PostListWithPagination