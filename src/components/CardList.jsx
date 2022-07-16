import React from 'react'
import CardItemDb from './CardItemDb'
import CardItemNews from './CardItemNews'
import config from '../config'

const CardList = ({ posts, title, type }) => {
    if (!posts.length) {
        return <h1 style={{ textAlign: "center" }}>Ничего не найдено...</h1>
    }

    return (
        <div>
            {posts.map((post, index) => (
                // добавляем тип карточек
                type === config.cardType.db ? <CardItemDb post={post} key={index} />
                    : type === config.cardType.news ? <CardItemNews post={post} key={index} /> : ''
            ))
            }
        </div>
    )
}
export default CardList
