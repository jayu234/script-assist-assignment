import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { AuthProvider } from './contexts/AuthContext';
import { theme } from './theme';
import './App.scss';

export default function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </MantineProvider>
  );
}
