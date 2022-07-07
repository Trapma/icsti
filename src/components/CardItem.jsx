import React from 'react'
import { BadgesUi } from './UI/badges/BadgesUi'

const CardItem = (props) => {

    console.log('lk', props)
    const creators = []
    props.post.creators.forEach(creator => {
        creators.push(creator.name)
    })

    const creatorsText = creators.join(', ')
    const subTitle = props.post.description.length > 200 ? props.post.description.slice(0, 200) + '...' : props.post.description


    return (
        <div>
            <div class="post-preview">
                <a href="post.html">
                    <h2 class="post-title">{props.post.title}</h2>
                    <h3 class="post-subtitle">{subTitle}</h3>
                </a>
                <p class="post-meta">
                    Posted by
                    <a href="#!">{' ' + creatorsText}</a>
                    <br />
                    on {props.post.publication_date}
                    <br />
                    {
                        props.post.keywords.map((key) => (
                            <BadgesUi>{key}</BadgesUi>
                        ))
                    }

                </p>
            </div>
            <hr class="my-4" />
        </div>
    )
}

export default CardItem
