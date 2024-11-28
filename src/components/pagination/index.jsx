import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.scss';
import PropTypes from 'prop-types';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pagination = ({
  currentPage,
  totalPage,
  changeCurrentPage,
  handlePageInput,
  forcePage,
  style,
}) => {
  const [inputValue, setInputValue] = useState(currentPage);

  useEffect(() => {
    setInputValue(currentPage);
  }, [currentPage]);

  return (
    <div className="pagination" style={style}>
      <div className="pagination__container">
        <ReactPaginate
          previousLabel={
            totalPage > 1 ? (
              <div className="pagination__arrow">
                <IoIosArrowBack />
              </div>
            ) : null
          }
          nextLabel={
            totalPage > currentPage ? (
              <div className="pagination__arrow">
                <IoIosArrowForward />
              </div>
            ) : null
          }
          breakLabel="..."
          pageCount={totalPage}
          pageRangeDisplayed={1}
          onPageChange={changeCurrentPage}
          marginPagesDisplayed={1}
          activeClassName="activePaginate"
          forcePage={forcePage}
        />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  changeCurrentPage: PropTypes.func,
  handlePageInput: PropTypes.func,
  forcePage: PropTypes.number,
};

export default Pagination;
