import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import Landing from './pages/landing/Landing';
import Login from './pages/login/Login';
import Resources from './pages/resources/ResourceList/ResourceList';
import ResourceDetail from './pages/resources/ResourceDetails/ResourceDetails';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './layouts/Layout';

export const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Landing /> },
			{ path: 'login', element: <Login /> },
			{
				element: <Layout />,
				children: [
					{
						path: 'resources',
						element: <ProtectedRoute><Resources /></ProtectedRoute>
					},
					{
						path: ':resourceType/:id',
						element: <ProtectedRoute><ResourceDetail /></ProtectedRoute>
					}
				]
			}
		]
	}
];

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			cacheTime: 1000 * 60 * 15
		}
	}
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>
);
