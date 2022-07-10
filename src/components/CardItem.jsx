import React from 'react'
import { BadgesUi } from './UI/badges/BadgesUi'
import { Row, Col } from 'react-bootstrap'

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
                <div className='align-items-end mt-2' style={{ fontSize: "12px" }}>
                    <Row>
                        <Col xs={6}>
                            {
                                props.post.keywords.map((key) => (
                                    <BadgesUi>{key}</BadgesUi>
                                ))
                            }

                        </Col>
                        <Col xs={6} >
                            <Row className=' justify-content-between'>
                                <Col xs={12} sm={7} md={8} lg={9} className='text-end'>

                                    Опубликовано:
                                    <a href="#!">{' ' + creatorsText}</a>


                                </Col>
                                <Col xs={12} sm={5} md={4} lg={3} className='text-end'>

                                    {' ' + props.post.publication_date}

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div >
            <hr class="my-4" />
        </div >
    )
}

export default CardItem
