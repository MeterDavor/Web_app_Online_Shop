import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Paginate.css'
//import { listOfSPIwithTempate } from '../StorePage/StorePage';

function Items({currentItems})
{//TREBALO JE UBACIT <div key={index}>// *?!% 
    return(
        <>
        {
            currentItems.map((item,index)=>(
                <div key={index}>
                {item}
                </div>
            ))
        }
        </>
    );
}

export default function PaginatedItems({List}) {
    const itemsPerPage = 5;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentpage] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(List.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(List.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, List]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % List.length;
        setItemOffset(newOffset);
        setCurrentpage(event.selected);
    };

    return (
        <>
        <ReactPaginate
            key="paginate1"
            breakLabel="..."
            nextLabel=""
            previousLabel=""
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName='container_pagination'
            pageLinkClassName='page-num'
            activeLinkClassName='page_num_active'
            forcePage = {currentPage}
        />
        <Items currentItems={currentItems}/>
        <ReactPaginate
            key="paginate2"
            breakLabel="..."
            nextLabel=""
            previousLabel=""
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName='container_pagination'
            pageLinkClassName='page-num'
            activeLinkClassName='page_num_active'
            forcePage = {currentPage}
        />
        </>
        
    );
}