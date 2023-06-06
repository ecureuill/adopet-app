import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '.';
import data from '../../i18n/pt-br.json';
import { AllTheProviders, AllTheProvidersAutheticated } from '../../__test__/utils/wrapper';

describe('Home Page', () => {

	it('should render signup link when user is unauthenticated', () => {
		
		render(<HomePage />, { wrapper: AllTheProviders});
		
		const links = screen.getAllByRole('link');

		expect(links).toHaveLength(2);

		expect(screen.getByText('Quero me cadastrar', { selector: 'a' })).toBeInTheDocument();
	});

	it('should render login link when user is unauthenticated', () => {
		
		render(<HomePage />, { wrapper: AllTheProviders});
		
		const links = screen.getAllByRole('link');

		expect(links).toHaveLength(2);

		expect(screen.getByText('Já tenho conta', { selector: 'a' })).toBeInTheDocument();
	});

	it('should render signup and login links when user is unauthenticated', () => {
		
		render(<HomePage />, { wrapper: AllTheProviders});

		expect(screen.getByText('Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!', { selector: 'p'})).toBeInTheDocument();

	});

	it('should render pets link when user is authenticated', () => {
		
		render(<HomePage />, { wrapper: AllTheProvidersAutheticated });
		
		const links = screen.getAllByRole('link');

		expect(links).toHaveLength(1);

		expect(screen.getByText('Ver pets', { selector: 'a' })).toBeInTheDocument();
	});

	it('should redirect to Pets page when click on [Ver Pets]', async () => {
		const user = userEvent.setup();
		render(<HomePage />, { wrapper: AllTheProvidersAutheticated });
		
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