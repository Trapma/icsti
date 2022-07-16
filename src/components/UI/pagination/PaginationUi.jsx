import { getPagesArray } from "../../../utils/page"
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from "react";

export const PaginationUi = ({ totalRecords, page, changePage }) => {
  const totalPages = Math.ceil(totalRecords / 10)
  const pagesArray = getPagesArray(totalPages - 1)
  const [index, setIndex] = useState({ start: 1, end: 5 })
  const [filterArray, setFilterArray] = useState(pagesArray.slice(index.start, index.end - 1))

  // this.filteredTickers.slice(start, this.endIndex);
  const nextPage = () => {
    if (page >= totalPages - 1) {
      return lastPagination()
    }
    console.log('next');
    console.log(filterArray);
    if (page === filterArray[filterArray.length - 1]) {
      return nextPagination(index)
    }
    changePage(page + 1)
  }
  const prevPage = () => {
    console.log(filterArray);
    console.log('prev');
    console.log('filterArray', filterArray)

    if (page === filterArray[0] && page !== 2) {
      return prevPagination(index)
    }

    return changePage(page - 1)
  }
  const nextPagination = (index) => {
    console.log(pagesArray.length)
    console.log(totalPages)
    console.log('next p');
    if (index >= totalPages - 1) {
      return lastPagination()
    }
    const start = index.start === 1 ? index.start + 3 : index.start + 5
    console.log(start)
    if (start === totalPages - 6) {
      console.log('test end')
    }
    // const end = index.end + 4
    setIndex({ start, end: start + 4 })

    setFilterArray(pagesArray.slice(start, start + 5))
    changePage(start + 1)
    console.log(filterArray);

  }
  const prevPagination = (index) => {
    console.log(filterArray);
    console.log('prev p');

    const start = index.start === 4 ? index.start - 3 : index.start - 5

    setIndex({ start, end: start + 4 })

    setFilterArray(pagesArray.slice(start, start === 1 ? start + 3 : start + 5))
    changePage(start === 1 ? start + 3 : start + 5)
  }
  const firstPagination = () => {
    console.log(filterArray);
    console.log('first p');
    const start = 1
    setIndex({ start, end: start + 3 })
    setFilterArray(pagesArray.slice(start, start + 3))
    changePage(start)
  }
  const lastPagination = () => {
    console.log(filterArray);
    console.log('last p');
    const start = totalPages - 5
    setIndex({ start, end: start + 4 })
    setFilterArray(pagesArray.slice(start, start + 5))
    changePage(start + 5)
  }

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
    <div className="d-flex justify-content-center">

      <Pagination>
        {
          index.start > 2 &&
          <Pagination.First
            onClick={() => firstPagination()}
          />

        }
        {
          page > 1 &&
          <Pagination.Prev
            onClick={() => prevPage()} />
        }

        <Pagination.Item
          onClick={() => firstPagination()}
          className={Number(page) === 1 ? 'active' : ''}
        >{1}</Pagination.Item>


        {
          index.start > 2 &&
          <Pagination.Ellipsis
            onClick={() => prevPagination(index)}
          />
        }

        {
          filterArray.map(p =>
            <Pagination.Item
              onClick={() => changePage(p)}
              key={p}
              className={Number(page) === p ? 'active' : ''}
            >{p}</Pagination.Item>
          )
        }
        {
          index.start <= totalPages - 7 &&
          <Pagination.Ellipsis
            // activeLabel="(current)"
            onClick={() => nextPagination(index)}
          />

        }

        <Pagination.Item
          onClick={() => lastPagination()}
          className={Number(page) === totalPages ? 'active' : ''}
        >{totalPages}</Pagination.Item>

        <Pagination.Next
          onClick={() => nextPage()}
        />
        <Pagination.Last
          onClick={() => lastPagination()}
        />
      </Pagination>
    </div>

  )
}
