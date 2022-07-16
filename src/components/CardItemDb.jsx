import { BadgesUi } from './UI/badges/BadgesUi'
import { Row, Col } from 'react-bootstrap'

const CardItemDb = (props) => {

    console.log('lk', props)
    const creators = []
    props.post.creators.forEach(creator => {
        creators.push(creator.name)
    })

    const creatorsText = creators.join(', ')
    const subTitle = props.post.description.length > 200 ? props.post.description.slice(0, 200) + '...' : props.post.description


    return (
        <div className="container" >
            <div className="text-start post-preview">
                <a href={props.post.link} className='text-left'>
                    <h4 className="fs-4 text-start">{props.post.title}</h4>
                    <p className="fs-6 my-0 text-start">{subTitle}</p>
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
                                <Col className='text-end'>

                                    Опубликовано:
                                    <a href="#!">{' ' + creatorsText}</a>


                                </Col>
                            </Row>
                            <Row>
                                <Col className='text-end'>
                                    {' ' + props.post.publication_date}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div >
            <hr className="my-4" />
        </div >
    )
}

export default CardItemDb
