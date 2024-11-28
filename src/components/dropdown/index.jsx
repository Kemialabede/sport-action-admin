import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import React from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';

const Dropdown = ({ icon, children }) => {
  return (
    <Menu>
      <MenuButton className="drop-button">{icon}</MenuButton>
      <MenuItems anchor="bottom" className="dropdown-menu">
        {children}
      </MenuItems>
    </Menu>
  );
};

Dropdown.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node,
};

export default Dropdown;
