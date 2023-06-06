import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpPage from '.';
import data from '../../i18n/pt-br.json';
import { parseToKeyboard } from '../../__test__/utils/parser';
import { AllTheProviders } from '../../__test__/utils/wrapper';

describe('signup Page', () => {

	it('should render Signup form with [Ainda não tem cadastro?]', () => {
		
		render(<SignUpPage />, {wrapper: AllTheProviders});
		
		expect(screen.getByText('Ainda não tem cadastro?', { selector: 'p'})).toBeInTheDocument();
		screen.getByText('Então, antes de buscar seu melhor amigo, precisamos de alguns dados:', { selector: 'p'});
	});

	it('should render Signup form with [Então, antes de buscar...]', () => {
		
		render(<SignUpPage />, {wrapper: AllTheProviders});
		
		expect(screen.getByText('Então, antes de buscar seu melhor amigo, precisamos de alguns dados:', { selector: 'p'})).toBeInTheDocument();
	});
	
	it('should render button [Cadastrar]', () => {
		
		render(<SignUpPage />, {wrapper: AllTheProviders});
		
		expect(screen.getByRole('button', { name: 'Cadastrar'})).toBeInTheDocument();
	});
	
	it('should render 2 buttons [Ver senha]', () => {
		
		render(<SignUpPage />, {wrapper: AllTheProviders});
		
		expect(screen.getAllByRole('button', { name: /Ver senha/i})).toHaveLength(2);
	});
	
	it('should not render 2 buttons [esconder senha]', () => {
		
		render(<SignUpPage />, {wrapper: AllTheProviders});
		
		expect(screen.queryAllByRole('button', { name: /esconder senha/i})).toHaveLength(0);
	});

	test.each([
		['Email', 'email'],
		['Senha', 'password'],
		['Confirma sua senha', 'password'],
	])('input [ %s ] should be of type [ %s ]', (key: string, type
	) => {
		render(<SignUpPage />, {wrapper: AllTheProviders});

		const input = screen.getByLabelText(key);

		expect(input).toBeRequired();
		expect(input).toHaveAttribute('type', type);
		
	});
	
	test.each([
		['Email', 'Escolha seu melhor email'],
		['Nome', 'Digite seu nome completo'],
		['Senha', 'Crie uma senha'],
		['Confirma sua senha', 'Repita a senha criada acima'],
	])('input [ %s ] should have placeholder %s', (key: string, placeholder: string
	) => {
		render(<SignUpPage />, {wrapper: AllTheProviders});

		const input = screen.getByLabelText(key);

		expect(input).toBeRequired();
		expect(input).toHaveAttribute('placeholder', placeholder);
		
	});
	
	test.each([
		['Email'],
		['Nome'],
		['Senha'],
		['Confirma sua senha'],
	])('input [ %s ] should be required', (key: string) => {
		render(<SignUpPage />, {wrapper: AllTheProviders});

		expect(screen.getByLabelText(key)).toBeRequired();
	});
	
	test.each([
		['Email'],
		['Nome'],
		['Senha'],
		['Confirma sua senha'],
	])('required input [ %s ] should load as invalidated', (key: string) => {
		render(<SignUpPage />, {wrapper: AllTheProviders});

		expect(screen.getByLabelText(key)).toBeInvalid();
	});
	
	test.each([
		['Email'],
		['Nome'],
		['Senha'],
		['Confirma sua senha'],
	])('input [ %s ] should show errorMessage on Blur when not filled', async (key: string) => {
		const user = userEvent.setup();

		render(<SignUpPage />, {wrapper: AllTheProviders});

		const input = screen.getByLabelText(key);
		await user.click(input);
		await user.tab(); 

		expect(input).toHaveErrorMessage();

	});
	
	test.each([
		['Email','@invalid'],
		['Senha',faker.string.sample({min: 1, max: 7})],
		['Confirma sua senha',faker.string.sample({min: 1, max: 7})],
	])('input [ %s ] should be invalidate and show errorMessage when filled with invalid value %s', async (key: string, value) => {
		const user = userEvent.setup();
		render(<SignUpPage />, {wrapper: AllTheProviders});

		const input = screen.getByLabelText(key);
		await user.type(input, parseToKeyboard(value));
		await user.tab(); 

		expect(input).toHaveErrorMessage('Constraints not satisfied');

	});

	it('form should be valid when all input are filled up with valid value', async () => {
		const user = userEvent.setup();
		render(<SignUpPage />, {wrapper: AllTheProviders});

		const form = screen.getByRole('form');

		expect(form).toBeInvalid();

		await user.type(screen.getByLabelText('Email'), parseToKeyboard(faker.internet.email()));

		await user.type(screen.getByLabelText('Nome'), parseToKeyboard(faker.person.fullName()));

		const pwd = parseToKeyboard(faker.string.sample({min: 8, max: 100}));

		await user.type(screen.getByLabelText('Senha'), pwd);

		await user.type(screen.getByLabelText('Confirma sua senha'), pwd);
		
		expect(form).toBeValid();

	});

	it('Submit button should be enabled when all input are filled up with valid value', async () => {
		const user = userEvent.setup();
		render(<SignUpPage />, { wrapper: AllTheProviders});

		const submit = screen.getByRole('button', {name: 'Cadastrar'});

		expect(submit).toBeDisabled();

		await user.type(screen.getByLabelText('Email'), parseToKeyboard(faker.internet.email()));

		await user.type(screen.getByLabelText('Nome'), parseToKeyboard(faker.person.fullName()));

		const pwd = parseToKeyboard(faker.string.sample({min: 8, max: 100}));

		await user.type(screen.getByLabelText('Senha'), pwd);

		await user.type(screen.getByLabelText('Confirma sua senha'), pwd);

		expect(submit).not.toBeDisabled();

	});

	it('should submit form and redirect to login page', async () => {
		const user = userEvent.setup();
		render(<SignUpPage />, { wrapper: AllTheProviders});

		const submit = screen.getByRole('button', {name: 'Cadastrar'});

		await user.type(screen.getByLabelText('Email'), parseToKeyboard(faker.internet.email()));

		await user.type(screen.getByLabelText('Nome'), parseToKeyboard(faker.person.fullName()));

		const pwd = parseToKeyboard(faker.string.sample({min: 8, max: 100}));

		await user.type(screen.getByLabelText('Senha'), pwd);

		await user.type(screen.getByLabelText('Confirma sua senha'), pwd);

		// eslint-disable-next-line testing-library/no-unnecessary-act
		await user.click(submit);
		expect(await screen.findByText(data.login_msg)).toBeInTheDocument();


	});
});