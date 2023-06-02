import { faker } from '@faker-js/faker/locale/pt_BR';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from '.';
import data from '../../i18n/pt-br.json';
import { parseToKeyboard } from '../../__test__/utils/parser';
import { AllTheProviders } from '../../__test__/utils/wrapper';

describe('Login Page', () => {

	it('should render login form with all components', () => {
		
		render(<LoginPage />, {wrapper: AllTheProviders});
					
		const links = screen.getAllByRole('link');
		const buttons = screen.getAllByRole('button');
		const inputs = screen.getAllByRole('textbox');

		expect(links.length).toEqual(2);
		expect(buttons.length).toEqual(1);
		expect(inputs.length).toEqual(1); // https://github.com/testing-library/dom-testing-library/issues/567
		screen.getByText('Entrar', { selector: 'button'});

		screen.getByText('Já tem conta? Faça seu login:', { selector: 'p'});
		screen.getByLabelText('Senha');
		screen.getByRole('main');
		screen.getByText('Esqueci minha senha.', { selector: 'a'});
	});

	test.each([
		['Email', 'email'],
		['Senha', 'password'],
	])('input [ %s ] should be of type [ %s ]', (key: string, type
	) => {
		render(<LoginPage />, {wrapper: AllTheProviders});

		const input = screen.getByLabelText(key);

		expect(input).toBeRequired();
		expect(input).toHaveAttribute('type', type);
		
	});

	test.each([
		['Email', 'Insira seu email'],
		['Senha', 'Insira sua senha'],
	])('input [ %s ] should have placeholder %s', (key: string, placeholder: string
	) => {
		render(<LoginPage />, {wrapper: AllTheProviders});

		const input = screen.getByLabelText(key);

		expect(input).toBeRequired();
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

		expect(input).toBeInvalid();
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

		const submitbtn = screen.getByRole('button');

		expect(submitbtn).toBeDisabled();

		await user.type(screen.getByLabelText('Email'), parseToKeyboard(faker.internet.email()));

		await user.type(screen.getByLabelText('Senha'), parseToKeyboard(faker.string.sample({min: 8, max: 100})));

		expect(submitbtn).not.toBeDisabled();

	});

	it('should submit form and redirect to pets page', async () => {
		const user = userEvent.setup();
		render(<LoginPage />, { wrapper: AllTheProviders});

		const submitbtn = screen.getByRole('button');

		await user.type(screen.getByLabelText('Email'), parseToKeyboard(faker.internet.email()));

		await user.type(screen.getByLabelText('Senha'), parseToKeyboard(faker.string.sample({min: 8, max: 100})));

		await user.click(submitbtn);
		expect(await screen.findByText(data.pets_msg)).toBeInTheDocument();
	});

});
