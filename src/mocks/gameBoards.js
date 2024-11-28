import NFL13 from '../assets/icons/NFL Smoke Helmet (13) 1.svg';
import NFL29 from '../assets/icons/NFL Smoke Helmet (29) 1.svg';
import NFL31 from '../assets/icons/NFL Smoke Helmet (31) 1.svg';
import NFL20 from '../assets/icons/NFL Smoke Helmet (20) 2.svg';
import NFL14 from '../assets/icons/NFL Smoke Helmet (14) 1.svg';
import NFL10 from '../assets/icons/NFL Smoke Helmet (10) 1.svg';
import NFL25 from '../assets/icons/NFL Smoke Helmet (25) 1.svg';

export const gameBoardHeader = [
  {
    text: 'Admin Name',
    key: 'admin_name',
  },
  {
    text: 'Team 1',
    key: 'team1',
  },
  {
    text: 'Team 2',
    key: 'team2',
  },
  {
    text: 'Date & Time',
    key: 'created_at',
  },
  {
    text: 'Status',
    key: 'status',
  },
  {
    text: 'Actions',
    key: 'actions',
  },
];

export const gameBoardData = [
  {
    admin_name: 'Marcel Kingston',
    team1: 'Atlanta Falcons',
    team1Icon: NFL13,
    team2: 'Carolina Panthers',
    team2Icon: NFL29,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'ongoing',
  },
   {
    admin_name: 'Devon Lane',
    team1: 'Chicago Bears',
    team1Icon: NFL31,
    team2: 'Buffalo Bills',
    team2Icon: NFL20,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'pending',
  },
   {
    admin_name: 'Floyd Miles',
    team1: 'Seattle Seahawks',
    team1Icon: NFL14,
    team2: 'Denver Broncos',
    team2Icon: NFL10,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'completed',
  },
   {
    admin_name: 'Dianne Russell',
    team1: 'Detroit Lions',
    team1Icon: NFL25,
    team2: 'Atlanta Falcons',
    team2Icon: NFL13,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'ongoing',
  },
   {
    admin_name: 'Darrell Steward',
    team1: 'Atlanta Falcons',
    team1Icon: NFL13,
    team2: 'Buffalo Bills',
    team2Icon: NFL20,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'completed',
  },
   {
    admin_name: 'Ralph Edwards',
    team1: 'Buffalo Bills',
    team1Icon: NFL20,
    team2: 'Atlanta Falcons',
    team2Icon: NFL13,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'pending',
  },
   {
    admin_name: 'Ronald Richards',
    team1: 'Seattle Seahawks',
    team1Icon: NFL14,
    team2: 'Detroit Lions',
    team2Icon: NFL25,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'pending',
  },
{
    admin_name: 'Dianne Russell',
    team1: 'Detroit Lions',
    team1Icon: NFL25,
    team2: 'Atlanta Falcons',
    team2Icon: NFL13,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'ongoing',
  },
   {
    admin_name: 'Darrell Steward',
    team1: 'Atlanta Falcons',
    team1Icon: NFL13,
    team2: 'Buffalo Bills',
    team2Icon: NFL20,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'unapproved',
  },
   {
    admin_name: 'Ralph Edwards',
    team1: 'Buffalo Bills',
    team1Icon: NFL20,
    team2: 'Atlanta Falcons',
    team2Icon: NFL13,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'pending',
  },
   {
    admin_name: 'Ronald Richards',
    team1: 'Seattle Seahawks',
    team1Icon: NFL14,
    team2: 'Detroit Lions',
    team2Icon: NFL25,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'pending',
  },
{
    admin_name: 'Dianne Russell',
    team1: 'Detroit Lions',
    team1Icon: NFL25,
    team2: 'Atlanta Falcons',
    team2Icon: NFL13,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'unapproved',
  },
   {
    admin_name: 'Darrell Steward',
    team1: 'Atlanta Falcons',
    team1Icon: NFL13,
    team2: 'Buffalo Bills',
    team2Icon: NFL20,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'completed',
  },
   {
    admin_name: 'Ralph Edwards',
    team1: 'Buffalo Bills',
    team1Icon: NFL20,
    team2: 'Atlanta Falcons',
    team2Icon: NFL13,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'pending',
  },
   {
    admin_name: 'Ronald Richards',
    team1: 'Seattle Seahawks',
    team1Icon: NFL14,
    team2: 'Detroit Lions',
    team2Icon: NFL25,
    date: 'Nov 12, 2024 | 9;34AM',
    status: 'unapproved',
  }]

export const gameBoardTabs = [
   {
    label: 'All boards',
    id: 'all_boards',
  },
  {
    label: 'Unapproved',
    id: 'unapproved',
  },
  {
    label: 'Pending',
    id: 'pending',
  },
  {
    label: 'Ongoing',
    id: 'ongoing',
  },
  {
    label: 'Completed',
    id: 'completed',
  },
]
