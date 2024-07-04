import { useSearchParams, useNavigate } from 'react-router-dom';
import '../../styles/pagination.scss';
import { useEffect, useState } from 'react';

const CustomPagination = ({page, pages}) => {
    let [searchParams] = useSearchParams();
    const naviate = useNavigate()
    

    const [currentPage, setCurrentPage] = useState();

    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber);

        if(searchParams.has('page')){
            searchParams.set('page', pageNumber)
        }else{
            searchParams.append('page',pageNumber)
        }
        const path = window.location.pathname + "?" + searchParams.toString()
        naviate(path)
    }    

    useEffect(() => {
        setCurrentPage(page)
    },[page])

    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(i);
    } 
  return (
    <div className="paginationContainer">
        <ul>
            {
                pageNumbers.map((number) => {
                    return <li 
                    key={number} 
                    className={`pageNumber ${number == page ? "active" : ""}`}
                    onClick={() => setCurrentPageNo(number)} 
                    >{number}</li>
                })
            }
        </ul>
    </div>
  )
}

export default CustomPagination