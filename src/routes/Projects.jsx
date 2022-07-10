import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import PostService from "../API/PostService";
import { LoaderUi } from "../components/UI/loader/LoaderUi";
import { useFetching } from "../hooks/useFetching";

function Projects() {
    const [posts, setPosts] = useState([]);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts.task_result.records);
    });

    useEffect(() => {
        fetchPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Header search={true} title="Проекты" />

            {postError && <h1>Произошла ошибка ${postError}</h1>}
            {isPostsLoading ? (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                    <LoaderUi animation={"border"} variant={"dark"} />
                </div>
            ) : (
                <CardList posts={posts} />
            )}
        </div>
    );
}

export default Projects;
