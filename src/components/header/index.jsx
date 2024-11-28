import React, { useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Avatar from '../avatar';
import SearchBox from '../search';
import './header.scss';
import Notifications from '../../containers/notifications';

const Header = ({ title, search }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="headerContainer">
        <div>
          {title && <h2 className="headerContainer__title">{title}</h2>}
          {search && (
            <SearchBox
              style={{
                width: '414px',
              }}
            />
          )}
        </div>
        <div className="headerContainer__userProfile">
          <div className="headerContainer__userProfile__name">
            <Avatar
              name="Sherman Bowen"
              width={'36px'}
              height={'36px'}
              font={'12px'}
              fontWeight={500}
            />
            <p>Sherman Bowen</p>
          </div>
          <IoMdNotificationsOutline onClick={() => setIsOpen(true)} />
        </div>
      </div>
      {isOpen && <Notifications setIsOpen={setIsOpen} />}
    </>
  );
};

export default Header;
