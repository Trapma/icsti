import "../App.css";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useFetching } from "../hooks/useFetching";
import { LoaderUi } from "../components/UI/loader/LoaderUi";
import PostService from "../API/PostService";
import CardList from "../components/CardList";
import config from "../config";


function News() {
    const [postNews, setPostsNews] = useState([]);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (textSearch, isChecked) => {
        const postNews = await PostService.getNews();
        console.log('postNews', postNews)
        setPostsNews(postNews);
    });

    useEffect(() => {
        fetchPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Header title="Новости" />
            <div className="container">
                {postError && <h1>Произошла ошибка ${postError}</h1>}
                {
                    isPostsLoading ? (
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                            <LoaderUi animation={"border"} variant={"dark"} />
                        </div>
                    ) : (
                        <CardList posts={postNews} type={config.cardType.news} />
                    )
                }

            </div>

        </div>
    );
}

export default News;
