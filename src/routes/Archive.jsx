import "../App.css";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import PostService from "../API/PostService";
import { LoaderUi } from "../components/UI/loader/LoaderUi";
import { useFetching } from "../hooks/useFetching";

function Archive() {
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
        <div className="App">
            <Header title="Архивы" />

        </div>
    );
}

export default Archive;
