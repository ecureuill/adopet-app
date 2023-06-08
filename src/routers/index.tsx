import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PetsPage from '../pages/PetsPage';
import ErrorPage from '../pages/ErrorPage';
import ProfileEditPage from '../pages/ProfileEditPage';
import SentMessagePage from '../pages/SentMessagePage';
import SignUpPage from '../pages/SignUpPage';
import { RequireAuth } from './require.auth';
import Root from './root';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root/>,
		children:[
			{
				errorElement: <ErrorPage />,
				children:[
					{
						path: '*',
						element: <ErrorPage />
					},
					{
						path: '',
						element: <HomePage />
					},
					{
						path: '/signUp',
						element: <SignUpPage />
					},
					{
						path: '/signup',
						element: <LoginPage />
					},
					{
						path: '/login',
						element:<LoginPage />
					},
					{
						path: '/pets',
						children:[
							{
								path: '',
								element: <PetsPage />
							},
							{
								path: 'contact',
								element: <RequireAuth><SentMessagePage /></RequireAuth>
							},
						]
					},
					{
						path: '/myprofile',
						element: <RequireAuth><ProfileEditPage /></RequireAuth>
					},
				]
			}
		]
	},

]);