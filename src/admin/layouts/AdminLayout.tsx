import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
  return (
    <div className="bg-indigo-500">
      <Outlet />
    </div>
  );
};
