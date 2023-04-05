import React, { useState } from 'react'
import { Pagination } from '@mui/material'

import './PostListWithPagination.scss'
import ProductPostsList from 'components/ProductPostsList/ProductPostsList'
import PostsList from 'components/Posts/PostsList'
interface Post {
    id: number
    image: string
    category: string
    title: string
    author: string
    date: string
    description: string
}

interface Props {
    posts: Post[]
    postsPerPage: number
    onChangePage?: (page: number) => void
    numberForPlus?: number
    numberForMinus?: number
}

const PostListWithPagination = ({
    posts,
    postsPerPage,
    onChangePage,
    numberForPlus = 1,
    numberForMinus = 2,
}: Props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(posts.length / postsPerPage) + numberForPlus
    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        page: number
    ) => {
        setCurrentPage(page)
        onChangePage!(page)
    }

    let startIndex = (currentPage - numberForMinus) * postsPerPage

    const selectedPosts = posts.slice(startIndex, startIndex + postsPerPage)

    return (
        <div>
            {numberForPlus === 1 ? (
                <ProductPostsList posts={selectedPosts} />
            ) : (
                <PostsList posts={selectedPosts} />
            )}
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
                    Page {currentPage} of{' '}
                    {Math.ceil(posts.length / postsPerPage + numberForPlus)}
                </div>
            </div>
        </div>
    )
}

export default PostListWithPagination
