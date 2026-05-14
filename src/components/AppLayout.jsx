import { Outlet } from 'react-router-dom';
import TopBar from './TopBar.jsx';
import SideBar from './SideBar.jsx';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar/>
      <SideBar/>
      <Outlet/> 
    </div>
  );
};

export default AppLayout