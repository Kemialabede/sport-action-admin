import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Logo from '../../assets/icons/Logo 2.svg';
import { bottomNavLinks, navLinks } from './navLinks';
import LogOutModal from '../../containers/auth/logout';

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleLogout = (e) => {
    e.preventDefault();
    setOpenModal('logout');
  };

  const isLinkActive = (itemPath, itemName) => {
    if (itemName === 'Logout') {
      return openModal === 'logout';
    }
    return location.pathname === itemPath;
  };

  return (
    <>
      <div className="sidebarContainer">
        <div className="sidebarContainer__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div
          className="sidebar__menu-wrapper"
          id="sidebar__menuWrapper"
          style={{
            overflowY: 'auto',
            width: 'auto',
            height: 'calc(100vh - 86.75px)',
          }}
        >
          <div>
            <h2 className="sidebarContainer__role">Super Admin</h2>
            {navLinks?.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  classNames('nav-link', {
                    menu__active: isActive,
                  })
                }
              >
                <li className="menu__list">
                  <img src={item.icon} alt={item.name} />
                  <span className="menu__label">{item.name}</span>
                </li>
              </NavLink>
            ))}
            <div className="sidebarContainer__bottomlinks">
              {bottomNavLinks?.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  onClick={item.name === 'Logout' ? handleLogout : undefined}
                  className={({ isActive }) =>
                    classNames('nav-link', {
                      menu__active: isLinkActive(item.link, item.name),
                    })
                  }
                >
                  <li className="menu__list">
                    <img src={item.icon} alt={item.name} />
                    <span className="menu__label">{item.name}</span>
                  </li>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <LogOutModal
        isShown={openModal === 'logout'}
        onCloseComplete={() => setOpenModal(false)}
      />
    </>
  );
};
export default Sidebar;
