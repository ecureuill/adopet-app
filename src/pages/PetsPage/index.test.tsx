import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PetsPage from '.';
import * as reactQuery from '../../services/query-client';
import { generatePetsData } from '../../__test__/utils/generate';
import { AllTheProviders, AllTheProvidersAutheticated } from '../../__test__/utils/wrapper';

describe('Pets page', () => {

	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('retrieve list of pets', () => {

		it('should render page with NÃO ENCONTRADO when list of pets is empty', () => {

			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: [], status: 'success'} as any);
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			expect(getPets).toReturnWith({data: [], status: 'success'});
						
			screen.getByText('Olá! Veja os amigos disponíveis para adoção!', { selector: 'p'});
			screen.getByText('Não encontrado', { selector: 'p'});
			expect(screen.getAllByRole('list')).toHaveLength(1);
			
		});

		it('should render page with LOADING... when list of pets is being fetched', () => {

			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: undefined, status: 'loading'} as any);
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			
			expect(getPets).toReturnWith({data: undefined, status: 'loading'} );
						
			screen.getByText('Olá! Veja os amigos disponíveis para adoção!', { selector: 'p'});
			screen.getByText('loading...', { selector: 'p'});
			expect(screen.queryAllByRole('list')).toHaveLength(0);
		});

		it('should render page with 9 pets', () => {
			const numberOfPets = 9;
			const mockData = generatePetsData(numberOfPets);
			
			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockImplementation(() => {
				return {data: mockData, status: 'success'} as any;
			});
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			
			expect(getPets).toReturnWith({data: mockData, status: 'success'});

			screen.getByText('Olá! Veja os amigos disponíveis para adoção!', { selector: 'p'});
			expect(screen.getAllByRole('list')).toHaveLength(numberOfPets + 1);
		});

	});

	it('should render page with all components, except for link to contact shelter, when user is unauthenticated', () => {

		const numberOfPets = 1;
		jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: generatePetsData(numberOfPets), status: 'success'} as any);
		
		render(<PetsPage />, {wrapper: AllTheProviders});
					
		screen.getByText('Olá! Veja os amigos disponíveis para adoção!', { selector: 'p'});

		expect(screen.getAllByRole('link')).toHaveLength(1);
		expect(screen.getAllByRole('list')).toHaveLength(2);

	});

	it('should render page with all components when user is authenticated', () => {

		const numberOfPets = 1;
		jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: generatePetsData(numberOfPets), status: 'success'} as any);
		
		render(<PetsPage />, {wrapper: AllTheProvidersAutheticated});
					
		screen.getByText('Olá! Veja os amigos disponíveis para adoção!', { selector: 'p'});

		expect(screen.getAllByRole('link')).toHaveLength(4);
		expect(screen.getAllByRole('list')).toHaveLength(2);

	});

	it('should redirect to Contact page when user click on Falar com responsável', async () => {
		const numberOfPets = 1;
		jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: generatePetsData(numberOfPets), status: 'success'} as any);
		
		const user = userEvent.setup();


		render(<PetsPage />, {wrapper: AllTheProvidersAutheticated});

		const link = screen.getByText('Falar com responsável', { selector: 'a'});

		await user.click(link);

		const item = await screen.findByText('Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:');
		expect(item).toBeInTheDocument();


	});

});