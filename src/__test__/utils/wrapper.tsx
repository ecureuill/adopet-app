import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import { queryClient } from '../../services/query-client';
import { User } from '../../utils/types';

export const AllTheProviders = ({children}: {children: React.ReactNode}) => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<AuthContext.Provider value={{user: null, authenticated: false, error: '', loading: false, signIn: async () => false, signOut: () => console.debug('logout')}}>
					{children}
				</AuthContext.Provider>
			</QueryClientProvider>
		</BrowserRouter>
	);
};

export const AllTheProvidersAutheticated = ({children}: {children: React.ReactNode}) => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<AuthContext.Provider value={{user: {} as User, authenticated: true, error: '', loading: false, signIn: async () => false, signOut: () => console.debug('logout')}}>
					{children}
				</AuthContext.Provider>
			</QueryClientProvider>
		</BrowserRouter>
	);
};