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
    const [textSearch, setTextSearch] = useState('')
    const [page, setPage] = useState(1)
    const [taskId, setTaskId] = useState('')
    const [totalRecords, setTotalRecords] = useState(false)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async ({ textSearch, isChecked, page }) => {
        console.log('useFetching start', page, taskId)
        // if (page && taskId) {
        //     console.log('useFetching start change request', page, taskId)
        //     const response = await PostService.getTask(taskId, page);
        //     const result = response.data
        //     setPosts(result.task_result.records);
        //     setTotalRecords(result.current_page)
        //     setPage(result.current_page)
        //     return
        // }

        const response = await PostService.getSearchPost(textSearch, isChecked, page);
        const getTaskId = response.data.task_id
        // setTaskId(getTaskId)
        // setPosts(result.task_result.records);
        // setTotalPages(result.pages_number)
        const getPosts = async () => {
            return await new Promise(resolve => {

                const timer = setInterval(async () => {
                    const response = await PostService.getTask(getTaskId);
                    const result = response.data;
                    // если нет данных сбрасываем таймер и возвращаем ошибку (обрабатывается в hooks)

                    if (!result) {
                        clearInterval(timer);
                        resolve(response)
                        return;
                    }

                    if (result.task_status === "SUCCESS") {
                        clearInterval(timer);
                        resolve(result)
                        return;
                    }
                }, 500);
            })
        }

        const result = await getPosts()
        console.log('rest result task', result);
        setPosts(result.task_result.records);
        setTotalRecords(result.task_result.total_records);
        setPage(result.task_result.current_page);

    });

    // useEffect(() => {
    //     fetchPosts(textSearch, isChecked);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const search = (text) => {
        setTextSearch(text)
        fetchPosts({ textSearch: text, isChecked, page });
    }
    const changePage = (page) => {
        console.log('start change page', page, textSearch)
        setPage(page)
        fetchPosts({ textSearch, isChecked, page })
    }

    return (
        <div>
            <Header isChecked={isChecked} setIsChecked={setIsChecked} search={search} title="База данных" />

            {postError && <h1>Произошла ошибка ${postError}</h1>}

            {isPostsLoading ? (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                    <LoaderUi animation={"border"} variant={"dark"} />
                </div>

            )
                : (!posts.length ? (
                    <h1 style={{ textAlign: "center" }}>Введите в поисковую строку название статьи</h1>

                )
                    : (
                        <CardList posts={posts} type={config.cardType.db} />
                    )
                )
            }
            {
                posts.length > 0 &&
                <PaginationUi page={page} changePage={changePage} totalRecords={totalRecords} />
            }

        </div>
    );
}

export default Projects;
