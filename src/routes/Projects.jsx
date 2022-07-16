import React, { useState } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import PostService from "../API/PostService";
import { LoaderUi } from "../components/UI/loader/LoaderUi";
import { useFetching } from "../hooks/useFetching";
import config from "../config";

function Projects() {
    const [posts, setPosts] = useState([]);
    const [isChecked, setIsChecked] = useState(true)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (textSearch, isChecked) => {
        const response = await PostService.getSearchPost(textSearch, isChecked);
        setPosts(response.data.task_result.records);
    });

    // useEffect(() => {
    //     fetchPosts(textSearch, isChecked);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const search = (textSearch) => {
        fetchPosts(textSearch, isChecked);
    }
    return (
        <div>
            <Header isChecked={isChecked} setIsChecked={setIsChecked} search={search} title="База данных" />

            {postError && <h1>Произошла ошибка ${postError}</h1>}
            {isPostsLoading ? (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                    <LoaderUi animation={"border"} variant={"dark"} />
                </div>
            ) : (
                <CardList posts={posts} type={config.cardType.db} />
            )}
        </div>
    );
}

export default Projects;
