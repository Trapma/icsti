import React from 'react'
import CardItem from './CardItem'

const CardList = ({ posts, title }) => {
    if (!posts.length) {
        return <h1 style={{ textAlign: "center" }}>Ничего не найдено...</h1>
    }

    return (
        <div>
            {posts.map((post) => (
                <CardItem post={post} key={post.id} />
            ))
            }
        </div>
    )
}
export default CardList
