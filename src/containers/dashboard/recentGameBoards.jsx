import React from 'react';
import Table from '../../components/table';
import Indicator from '../../components/indicator';
import Dropdown from '../../components/dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { MenuItem } from '@headlessui/react';
import { gameBoardData, gameBoardHeader } from '../../mocks/gameBoards';

const RecentGameBoards = () => {
  return (
    <>
      <div className="recentGamesHeader">
        <h2>Recent Game Boards</h2>
        <div className="recentGamesHeader__more">
          <p>See All</p>
        </div>
      </div>
      <Table
        tableHeaders={gameBoardHeader?.slice(0, -1)}
        tableData={gameBoardData?.slice(0, 7)}
        noPagination
      >
        {(row) => {
          return (
            <>
              <td>{row?.admin_name}</td>
              <td>
                <div className='flexContainers'>
                <img src={row.team1Icon} />
                <p>{row.team1}</p>
                </div>
              </td>
              <td>
                <div className='flexContainers'>
                <img src={row.team2Icon} />
                <p>{row.team2}</p>
                </div>
              </td>
              <td>{row.date}</td>
              <td style={{ display: 'flex', justifyContent: 'center'}}>
                <Indicator statusIndicator={row.status} status={row.status} />
              </td>
              
            </>
          );
        }}
      </Table>
    </>
  );
};

export default RecentGameBoards;
