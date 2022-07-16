import React, { useState } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import PostService from "../API/PostService";
import { LoaderUi } from "../components/UI/loader/LoaderUi";
import { useFetching } from "../hooks/useFetching";
import config from "../config";
import { PaginationUi } from "../components/UI/pagination/PaginationUi";

function Projects() {
    const [posts, setPosts] = useState([]);
    const [isChecked, setIsChecked] = useState(true)
    const [page, setPage] = useState(1)
    const [taskId, setTaskId] = useState('')
    const [totalPages, setTotalPages] = useState(false)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async ({ textSearch, isChecked, page = 0, taskId }) => {

        if (page && taskId) {
            const response = await PostService.getTask(taskId, page);
            const result = response.data
            setPosts(result.task_result.records);
            setTotalPages(result.pages_number)
            setPage(result.current_page)
        }

        const response = await PostService.getSearchPost(textSearch, isChecked);
        const result = response.data
        setTaskId(result.task_id)
        // setPosts(result.task_result.records);
        // setTotalPages(result.pages_number)

        const timer = setTimeout(async () => {
            const response = await PostService.getTask(taskId);
            const result = response.data
            // если нет данных сбрасываем таймер и возвращаем ошибку (обрабатывается в hooks)
            console.log('test response ', response.data);
            console.log('test response.task_status ', response.data.task_status);
            console.log('test response (task_status === SUCCESS) = ', response.data.task_status === "SUCCESS");

            if (!result) {
                clearTimeout(timer);
                return response;
            }

            if (result.task_status === "SUCCESS") {
                clearTimeout(timer);
                setPosts(result.task_result.records);
                setTotalPages(result.pages_number)
                setPage(result.current_page)
            }
        }, 500);
    });

    // useEffect(() => {
    //     fetchPosts(textSearch, isChecked);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const search = (textSearch) => {
        fetchPosts({ textSearch, isChecked });
    }
    const changePage = (page) => {
        setPage(page)
        fetchPosts({ page, taskId })
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
            <PaginationUi page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    );
}

export default Projects;
