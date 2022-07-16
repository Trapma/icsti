
const CardItemNews = (props) => {

    // "id": 1,
    //     "title": "Сердечно поздравляем Полномочного Представителя Молдовы в МЦНТИ А. Стратана с избранием и назначением на высокую должность ректора Академии экономического образования Молдовы",
    //         "description": "",
    //             "body": "Сердечно поздравляем Полномочного Представителя Молдовы в МЦНТИ А. Стратана с избранием и назначением на высокую должность ректора Академии экономического образования Молдовы!\r\n\r\nЖелаем больших успехов на новой руководящей должности, преданной команды единомышленников, талантливых студентов и надежных стейкхолдеров.",
    //                 "author": "Штаб-квартира",
    //                     "publication_date": "2022-05-05T12:14:48Z"
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
