import React from 'react'
import CardItem from './CardItem'

const CardList = ({ posts, title }) => {
    if (!posts.length) {
        return <h1 style={{ textAlign: "center" }}>Ничего не найдено...</h1>
    }

    return (
        <div>
            {posts.map((post, index) => (
                <CardItem post={post} key={index} />
            ))
            }
        </div>
    )
}
export default CardList
