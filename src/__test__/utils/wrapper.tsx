import React, {ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

export const AllTheProviders = ({children}: {children: React.ReactNode}) => {
	return (
		<BrowserRouter>
			<AuthContext.Provider value={{user: null, authenticated: false, error: '', loading: false, signIn: async () => false, signOut: () => console.debug('logout')}}>
				{children}
			</AuthContext.Provider>
		</BrowserRouter>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react';
export {customRender as render};