import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
// import Footer from './Footer/Footer';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
        {/* <Footer /> */}
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
