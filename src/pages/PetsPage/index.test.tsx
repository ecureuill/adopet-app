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

	describe('Page with empty list', () => {

		it('should render page with [Olá! Veja os amigos disponíveis para adoção!] when list of pets is not empty', () => {

			const mockData = generatePetsData(1);
			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: {data: {entities: mockData}}, status: 'success'} as any);
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			
			expect(getPets).toReturnWith({data: {data: {entities: mockData}}, status: 'success'});			
			expect(screen.getByText('Olá! Veja os amigos disponíveis para adoção!', { selector: 'p'})).toBeInTheDocument();
			
		});

		it('should render page with NÃO ENCONTRADO when list of pets is empty', () => {

			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: {data: {entities: []}}, status: 'success'} as any);
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			
			expect(getPets).toReturnWith({data: {data: {entities: []}}, status: 'success'});
						
			expect(screen.getByText('Não encontrado', { selector: 'p'})).toBeInTheDocument();
		});

		it('should render page with no list item when list of pets is empty', () => {

			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: {data: {entities: []}}, status: 'success'} as any);
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			
			expect(getPets).toReturnWith({data: {data: {entities: []}}, status: 'success'});
						
			expect(screen.getByRole('list', { name: 'pets'})).toBeInTheDocument();
			expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
			
		});

		it('should render page with [Olá! Veja os amigos disponíveis para adoção!] when list of pets is empty', () => {

			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: {data: {entities: []}}, status: 'success'} as any);
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			
			expect(getPets).toReturnWith({data: {data: {entities: []}}, status: 'success'});			
			expect(screen.getByText('Olá! Veja os amigos disponíveis para adoção!', { selector: 'p'})).toBeInTheDocument();
			
		});
	});

	describe('Page fetching list of pets', () => {
			
		it('should render page with LOADING... when list of pets is being fetched', () => {

			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: undefined, status: 'loading'} as any);
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			
			expect(getPets).toReturnWith({data: undefined, status: 'loading'} );
						
			expect(screen.getByText('loading...', { selector: 'p'})).toBeInTheDocument();
		});

		it('should render page with no list when list of pets is being fetched', () => {

			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: undefined, status: 'loading'} as any);
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			
			expect(getPets).toReturnWith({data: undefined, status: 'loading'} );
						
			expect(screen.queryAllByRole('list')).toHaveLength(0);
		});

		it('should render page with [Olá! Veja os amigos disponíveis para adoção!] when list of pets is being fetched', () => {

			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: undefined, status: 'loading'} as any);
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			
			expect(getPets).toReturnWith({data: undefined, status: 'loading'} );
						
			;
			expect(screen.getByText('Olá! Veja os amigos disponíveis para adoção!', { selector: 'p'})).toBeInTheDocument();
		});

	});

	describe('Page with list of pets', () => {

		it('should render page with [Olá! Veja os amigos disponíveis para adoção!] when list of pets is fetched', () => {
			const numberOfPets = 9;
			const mockData = generatePetsData(numberOfPets);
			
			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockImplementation(() => {
				return {data: {data: {entities: mockData}}, status: 'success'} as any;
			});
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			
			expect(getPets).toReturnWith({data: {data: {entities: mockData}}, status: 'success'});

			expect(screen.getByText('Olá! Veja os amigos disponíveis para adoção!', { selector: 'p'})).toBeInTheDocument();
		});

		it('should render page with a list of pets', () => {
			const numberOfPets = 9;
			const mockData = generatePetsData(numberOfPets);
			
			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockImplementation(() => {
				return {data: {data: {entities: mockData}}, status: 'success'} as any;
			});
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			
			expect(getPets).toReturnWith({data: {data: {entities: mockData}}, status: 'success'});

			expect(screen.getAllByRole('list')).toHaveLength(1+numberOfPets);
			expect(screen.getAllByRole('listitem')).toHaveLength(numberOfPets + numberOfPets*3);
		});

		it('should not render page with link to contact shelter, when user is unauthenticated', () => {

			const numberOfPets = 1;
			const mockData = generatePetsData(numberOfPets);
			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: {data: {entities: mockData}}, status: 'success'} as any);
			
			render(<PetsPage />, {wrapper: AllTheProviders});
			expect(getPets).toReturnWith({data: {data: {entities: mockData}}, status: 'success'});
						
			expect(screen.queryByRole('link', { name: 'Falar com responsável'})).not.toBeInTheDocument();
		});

		it('should render page with link to contact shelter when user is authenticated', () => {

			const numberOfPets = 1;
			const mockData = generatePetsData(numberOfPets);
			
			const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: {data: {entities: mockData}}, status: 'success'} as any);
			
			render(<PetsPage />, {wrapper: AllTheProvidersAutheticated});
						
			expect(getPets).toReturnWith({data: {data: {entities: mockData}}, status: 'success'});
			expect(screen.getByRole('link', { name: 'Falar com responsável'})).toBeInTheDocument();

		});

	});
	
	it('should redirect to Contact page when user click on Falar com responsável', async () => {
		const numberOfPets = 1;
		const mockData = generatePetsData(numberOfPets);
		const getPets = jest.spyOn(reactQuery, 'usePetsQuery').mockReturnValue({data: {data: {entities: mockData}}, status: 'success'} as any);
		
		const user = userEvent.setup();


		render(<PetsPage />, {wrapper: AllTheProvidersAutheticated});

		expect(getPets).toReturnWith({data: {data: {entities: mockData}}, status: 'success'});
		const link = screen.getByText('Falar com responsável', { selector: 'a'});

		await user.click(link);

		const item = await screen.findByText('Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:');
		expect(item).toBeInTheDocument();


	});
});