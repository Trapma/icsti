import { getPagesArray } from "../../../utils/page"
import Pagination from 'react-bootstrap/Pagination';

export const PaginationUi = ({ totalPages, page, changePage }) => {

  const pagesArray = getPagesArray(totalPages)

  // const start = 
  return (
    //  <div className="page__wrapper">
    //         {pagesArray.map(p =>
    //             <span
    //                 onClick={() => changePage(p)}
    //                 key={p}
    //                 className={page === p ? 'page page__current' : 'page'}>
    //                 {p}
    //             </span>
    //         )}
    //     </div>
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      {/* <Pagination.Ellipsis /> */}
      {
        pagesArray.map(p =>
          <Pagination.Item
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'active' : ''}
          >{p}</Pagination.Item>
        )}
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>
      {/* <Pagination.Ellipsis /> */}
      <Pagination.Item>{totalPages}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>

  )
}
