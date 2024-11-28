import React from 'react';
import Dashboard from '../../assets/icons/dashboard.svg';
import Admin from '../../assets/icons/admin.svg';
import Boards from '../../assets/icons/block-game.svg';
import Teams from '../../assets/icons/teams.svg';
import Settings from '../../assets/icons/setting-2.svg';
import LogoutIcon from '../../assets/icons/logout.svg';
import './sidebar.scss';

export const navLinks = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: Dashboard,
    id: 1,
  },
  {
    name: 'Admin Management',
    link: '/admin',
    icon: Admin,
    id: 2,
  },
  {
    name: 'Game Boards',
    icon: Boards,
    link: '/game/boards',
    id: 3,
  },
  {
    name: 'Teams',
    link: '/teams',
    icon: Teams,
    id: 4,
  }
];

export const bottomNavLinks = [
  {
    name: 'Settings',
    link: '/settings',
    icon: Settings,
    id: 1,
  },
  {
    name: 'Logout',
    link: '#',
    icon: LogoutIcon,
    id: 2,
  },
];
