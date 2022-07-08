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
        <div class="container" >
            <div className="text-start post-preview">
                <a href="post.html" className='text-left'>
                    <h4 class="fs-4 text-start">{props.post.title}</h4>
                    <p class="fs-6 my-0 text-start">{subTitle}</p>
                </a>
                <div className='d-flex justify-content-between align-items-end mt-2' style={{ fontSize: "12px" }}>
                    <div className='text-start'>
                        {
                            props.post.keywords.map((key) => (
                                <BadgesUi>{key}</BadgesUi>
                            ))
                        }
                    </div>
                    <p class="post-meta text-end m-0">
                        Posted by
                        <a href="#!">{' ' + creatorsText + ' '}</a>
                        on {props.post.publication_date}

                    </p>
                </div>
            </div>
            <hr class="my-4" />
        </div>
    )
}

export default CardItem
