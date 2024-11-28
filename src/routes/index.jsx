import { Route, Routes } from 'react-router-dom';
import Dashboard from '../containers/dashboard';
import Admin from '../containers/admin';
import GameBoards from '../containers/gameBoards';
import Login from '../containers/auth/login';
import Teams from '../containers/teams';
import Settings from '../containers/settings';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/game/boards" element={<GameBoards />} />
<Route path="/teams" element={<Teams />} />
<Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRouter;
