import { useSearchParams, useNavigate } from 'react-router-dom';
import '../../styles/pagination.scss';
type TypeCustomPaginationProps = {
    totalPage:number;
    page:string|number
}

const CustomPagination = ({totalPage,page}:TypeCustomPaginationProps) => {
    let [searchParams] = useSearchParams();
    const naviate = useNavigate()
    

    const setCurrentPageNo = (pageNumber:number) => {

        if(searchParams.has('page')){
            searchParams.set('page', pageNumber.toString())
        }else{
            searchParams.append('page',pageNumber.toString())
        }
        const path = window.location.pathname + "?" + searchParams.toString()
        naviate(path)
    }    


    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
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