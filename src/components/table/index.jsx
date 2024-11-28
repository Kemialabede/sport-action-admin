import React from 'react';
import './table.scss';
import Pagination from '../../components/pagination';
import PropTypes from 'prop-types';
import TableLoader from './tableLoader';


const Table = ({
  tableHeaders,
  tableData,
  children,
  mapKey = 'id',
  noPagination = false,
  currentPage,
  isLoading = false,
  totalPage,
  changeCurrentPage,
  handlePageInput,
  forcePage,
  useChecks = false,
  checkedItems,
  setCheckedItems,
}) => {
  return (
    <div className='table-container'>
      {isLoading ? (
        <TableLoader headers={tableHeaders} />
      ) : (
        <>
          <table className="table">
            <thead className="table__header">
              <tr>
                {useChecks && (
                  <th style={{ width: 'auto' }}>
                    {/* Placeholder for checkbox logic */}
                  </th>
                )}
                {tableHeaders?.map((header) => (
                  <th key={header?.key}>{header.text}</th>
                ))}
              </tr>
            </thead>
            <tbody className="table__body">
              {tableData?.length > 0 ? (
                tableData.map((row, index) => (
                  <tr key={row?.[mapKey] ?? index}>
                    {children(row, index)}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="100%" className="table__empty">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {!noPagination && (
            <Pagination
              currentPage={currentPage}
              totalPage={totalPage}
              changeCurrentPage={changeCurrentPage}
              handlePageInput={handlePageInput}
              forcePage={forcePage}
            />
          )}
        </>
      )}
    </div>
  );
};

Table.propTypes = {
  tableHeaders: PropTypes.array,
  tableData: PropTypes.array,
  children: PropTypes.func,  // Render prop for table rows
  mapKey: PropTypes.string,
  noPagination: PropTypes.bool,
  currentPage: PropTypes.number,
  isLoading: PropTypes.bool,
  totalPage: PropTypes.number,
  changeCurrentPage: PropTypes.func,
  handlePageInput: PropTypes.func,
  forcePage: PropTypes.number,
  useChecks: PropTypes.bool,
  checkedItems: PropTypes.array,
  setCheckedItems: PropTypes.func,
};

Table.defaultProps = {
  mapKey: 'id',
  noPagination: false,
  isLoading: false,
  useChecks: false,
};

export default Table;