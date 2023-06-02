import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '.';
import { AuthContext } from '../../context/auth.context';
import data from '../../i18n/pt-br.json';
import { User } from '../../utils/types';
import { AllTheProviders } from '../../__test__/utils/wrapper';

describe('Home Page', () => {

	it('should present signup and login links when user is unauthenticated', () => {
		
		render(<HomePage />, { wrapper: AllTheProviders});
		
		const links = screen.getAllByRole('link');
		const headings = screen.getAllByRole('heading');

		expect(links.length).toEqual(3);
		expect(headings.length).toEqual(1);

		screen.getByRole('main');
		screen.getByRole('heading');

		screen.getByText('Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!', { selector: 'p'});
		screen.getByText('Já tenho conta', { selector: 'a' });
		screen.getByText('Quero me cadastrar', { selector: 'a' });
		screen.getByLabelText('home', { selector: 'a' });
		screen.getByText('Boas-vindas!', { selector: 'h1' });

	});

	it('should present pets link when user is authenticated', () => {
		
		render(
			<MemoryRouter><AuthContext.Provider value={{user: {} as User, authenticated: true, error: '', loading: false, signIn: async () => false, signOut: () => console.debug('logout')}}>
				<HomePage />
			</AuthContext.Provider></MemoryRouter>
		);
		
		const links = screen.getAllByRole('link');
		const headings = screen.getAllByRole('heading');

		expect(links.length).toEqual(4);
		expect(headings.length).toEqual(1);

		screen.getByRole('main');
		screen.getByRole('heading');

		screen.getByText('Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!', { selector: 'p'});
		screen.getByText('Ver pets', { selector: 'a' });
		screen.getByLabelText('home', { selector: 'a' });
		screen.getByLabelText('message', { selector: 'a' });
		screen.getByLabelText('my profile', { selector: 'a' });

	});


	it('should redirect to Pets page when click on [Ver Pets]', async () => {
		const user = userEvent.setup();
		render(
			<MemoryRouter><AuthContext.Provider value={{user: {} as User, authenticated: true, error: '', loading: false, signIn: async () => false, signOut: () => console.debug('logout')}}>
				<HomePage />
			</AuthContext.Provider></MemoryRouter>
		);
		
		await user.click(screen.getByText('Ver pets', { selector: 'a' }));

		expect(await screen.findByText(data.pets_msg)).toBeInTheDocument();

	});

	it('should redirect to SignUp page when click on [Quero me cadastrar]', async () => {
		const user = userEvent.setup();

		render(<HomePage />, { wrapper: AllTheProviders});
		
		await user.click(screen.getByText('Quero me cadastrar', { selector: 'a' }));

		expect(await screen.findByText(data.pets_msg)).toBeInTheDocument();

	});

	it('should redirect to Login page when click on [Já tenho conta]', async () => {
		const user = userEvent.setup();

		render(<HomePage />, { wrapper: AllTheProviders});
				
		await user.click(screen.getByText('Já tenho conta', { selector: 'a' }));

		expect(await screen.findByText(data.pets_msg)).toBeInTheDocument();

	});
});