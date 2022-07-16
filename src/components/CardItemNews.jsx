
const CardItemNews = (props) => {

    const publicDate = new Date(props.post.publication_date).toLocaleDateString('ru')
    return (

        <div className="post-preview">
            <a href="post.html"><h2 className="post-title"> {props.post.title}</h2></a>
            {props.post.author}
            <br />
            <p className="post-meta">
                Опубликовано &nbsp;{publicDate}
                <br />
            </p>
        </div>
    )
}

export default CardItemNews
