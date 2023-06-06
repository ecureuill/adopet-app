import { faker } from '@faker-js/faker/locale/pt_BR';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from '.';
import data from '../../i18n/pt-br.json';
import { parseToKeyboard } from '../../__test__/utils/parser';
import { AllTheProviders } from '../../__test__/utils/wrapper';

describe('Login Page', () => {

	it('should render [Já tem conta? Faça seu login:]', () => {
		
		render(<LoginPage />, {wrapper: AllTheProviders});
					
		expect(screen.getByText('Já tem conta? Faça seu login:', { selector: 'p'})).toBeInTheDocument();
	});

	it('should render link [Esqueci minha senha]', () => {
		
		render(<LoginPage />, {wrapper: AllTheProviders});
					
		expect(screen.getAllByRole('link')).toHaveLength(1);
		expect(screen.getByText('Esqueci minha senha.', { selector: 'a'})).toBeInTheDocument();
	});

	it('should render button [Entrar]', () => {
		
		render(<LoginPage />, {wrapper: AllTheProviders});
					
		expect(screen.getByText('Entrar', { selector: 'button'})).toBeInTheDocument();
	});

	it('should render button [Ver senha]', () => {
		
		render(<LoginPage />, {wrapper: AllTheProviders});
					
		expect(screen.getByRole('button', { name: 'ver senha'})).toBeInTheDocument();
	});

	it('should not render button [esconder senha]', () => {
		
		render(<LoginPage />, {wrapper: AllTheProviders});
					
		expect(screen.queryByRole('button', { name: 'esconder senha'})).not.toBeInTheDocument();
	});

	test.each([
		['Email', 'email'],
		['Senha', 'password'],
	])('input [ %s ] should be of type [ %s ]', (key: string, type
	) => {
		render(<LoginPage />, {wrapper: AllTheProviders});

		const input = screen.getByLabelText(key);

		expect(input).toHaveAttribute('type', type);
		
	});

	test.each([
		['Email', 'Insira seu email'],
		['Senha', 'Insira sua senha'],
	])('input [ %s ] should have placeholder %s', (key: string, placeholder: string
	) => {
		render(<LoginPage />, {wrapper: AllTheProviders});

		const input = screen.getByLabelText(key);

		expect(input).toHaveAttribute('placeholder', placeholder);
		
	});
	
	test.each([
		['Email'],
		['Senha'],
	])('input [ %s ] should be required', (key: string) => {
		render(<LoginPage />, {wrapper: AllTheProviders});

		expect(screen.getByLabelText(key)).toBeRequired();
	});
	
	test.each([
		['Email'],
		['Senha'],
	])('required input [ %s ] should load as invalidated', (key: string) => {
		render(<LoginPage />, {wrapper: AllTheProviders});

		expect(screen.getByLabelText(key)).toBeInvalid();
	});

	test.each([
		['Email'],
		['Senha'],
	])('input [ %s ] should show errorMessage on Blur when not filled', async (key: string) => {
		const user = userEvent.setup();

		render(<LoginPage />, {wrapper: AllTheProviders});

		const input = screen.getByLabelText(key);
		await user.click(input);
		await user.tab(); 

		expect(input).toHaveErrorMessage();

	});
	
	test.each([
		['Email','@invalid'],
		['Senha',faker.string.sample({min: 1, max: 7})],
	])('input [ %s ] should be invalid and show errorMessage when filled with invalid value %s', async (key: string, value) => {
		const user = userEvent.setup();
		render(<LoginPage />, {wrapper: AllTheProviders});

		const input = screen.getByLabelText(key);
			
		await user.type(input, parseToKeyboard(value));
		await user.tab(); 

		expect(input).toHaveErrorMessage('Constraints not satisfied');
	});

	it('form should be valid when all input are filled up with valid value', async () => {
		const user = userEvent.setup();
		render(<LoginPage />, {wrapper: AllTheProviders});

		const form = screen.getByRole('form');

		expect(form).toBeInvalid();

		await user.type(screen.getByLabelText('Email'), parseToKeyboard(faker.internet.email()));

		await user.type(screen.getByLabelText('Senha'), parseToKeyboard(faker.string.sample({min: 8, max: 100})));

		expect(form).toBeValid();

	});

	it('Submit button should be enabled when all input are filled up with valid value', async () => {
		const user = userEvent.setup();
		render(<LoginPage />, { wrapper: AllTheProviders});

		const submitbtn = screen.getByRole('button', { name: 'Entrar'});

		expect(submitbtn).toBeDisabled();

		await user.type(screen.getByLabelText('Email'), parseToKeyboard(faker.internet.email()));

		await user.type(screen.getByLabelText('Senha'), parseToKeyboard(faker.string.sample({min: 8, max: 100})));

		expect(submitbtn).not.toBeDisabled();

	});

	it('should submit form and redirect to pets page', async () => {
		const user = userEvent.setup();
		render(<LoginPage />, { wrapper: AllTheProviders});

		const submitbtn = screen.getByRole('button', { name: 'Entrar'});

		await user.type(screen.getByLabelText('Email'), parseToKeyboard(faker.internet.email()));

		await user.type(screen.getByLabelText('Senha'), parseToKeyboard(faker.string.sample({min: 8, max: 100})));

		await user.click(submitbtn);
		expect(await screen.findByText(data.pets_msg)).toBeInTheDocument();
	});

});
