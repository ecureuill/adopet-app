import { faker } from '@faker-js/faker/locale/pt_BR';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SentMessagePage from '.';
import data from '../../i18n/pt-br.json';
import { parseToKeyboard } from '../../__test__/utils/parser';
import { AllTheProvidersAutheticated } from '../../__test__/utils/wrapper';

describe('SentMessage page', () => {

	it('should render paragraph [ Envie uma mensagem...]', () => {
		render(<SentMessagePage />, {
			wrapper: AllTheProvidersAutheticated
		});

		expect(screen.getByText('Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:', {
			selector: 'p'
		})).toBeInTheDocument();
	});
	
	it('should render a form', () => {
		render(<SentMessagePage />, {
			wrapper: AllTheProvidersAutheticated
		});

		expect(screen.getByRole('form')).toBeInTheDocument();
	});
	
	test.each([
		['Nome'],
		['Telefone'],
		['Nome do animal'],
	])('input [ %s ] should not have attribute type', (key: string) => {
		render(<SentMessagePage />, {wrapper: AllTheProvidersAutheticated});

		const input = screen.getByLabelText(key);

		expect(input).not.toHaveAttribute('type');
	});
	
	test.each([
		['Nome', 'Insira seu nome completo'],
		['Telefone', 'Insira seu telefone e/ou whatsapp'],
		['Nome do animal', 'Por qual animal você se interessou?'],
		['Mensagem', 'Escreva sua mensagem.'],
	])('input [ %s ] should have placeholder %s', (key: string, placeholder: string
	) => {
		render(<SentMessagePage />, {wrapper: AllTheProvidersAutheticated});
		const input = screen.getByLabelText(key);

		expect(input).toHaveAttribute('placeholder', placeholder);
		
	});
	
	test.each([
		['Nome'],
		['Telefone'],
		['Nome do animal'],
		['Mensagem'],
	])('input [ %s ] should be required', (key: string) => {
		render(<SentMessagePage />, {wrapper: AllTheProvidersAutheticated});

		expect(screen.getByLabelText(key)).toBeRequired();
	});
	
	
	test.each([
		['Nome'],
		['Telefone'],
		['Nome do animal'],
		['Mensagem'],
	])('required input [ %s ] should load as invalidated', (key: string) => {
		render(<SentMessagePage />, {wrapper: AllTheProvidersAutheticated});

		expect(screen.getByLabelText(key)).toBeInvalid();
	});
	
	test.each([
		['Nome'],
		['Telefone'],
		['Nome do animal'],
		['Mensagem'],
	])('input [ %s ] should show errorMessage on Blur when not filled', async (key: string) => {
		const user = userEvent.setup();

		render(<SentMessagePage />, {wrapper: AllTheProvidersAutheticated});

		const input = screen.getByLabelText(key);
		await user.click(input);
		await user.tab(); 

		expect(input).toHaveErrorMessage();

	});
	
	test.each([
		['Telefone', faker.string.sample()],
		['Telefone', faker.phone.number('+## ####-####')],
		['Telefone', faker.phone.number('#######')],
		['Telefone', faker.phone.number('############')],
		['Telefone', faker.phone.number('#####-##.##')],
	])('input [ %s ] should be invalidate and show errorMessage when filled with invalid value %s', async (key: string, value) => {
		const user = userEvent.setup();
		render(<SentMessagePage />, {wrapper: AllTheProvidersAutheticated});

		const input = screen.getByLabelText(key);
		await user.type(input, parseToKeyboard(value));
		await user.tab(); 

		expect(input).toHaveErrorMessage('Constraints not satisfied');

	});

	it('form should be valid when all input are filled up with valid value', async () => {
		const user = userEvent.setup();
		render(<SentMessagePage />, {wrapper: AllTheProvidersAutheticated});

		const form = screen.getByRole('form');

		expect(form).toBeInvalid();

		await user.type(screen.getByLabelText('Nome'), parseToKeyboard(faker.person.fullName()));
		await user.type(screen.getByLabelText('Telefone'), parseToKeyboard(faker.phone.number('## #.####-####')));
		await user.type(screen.getByLabelText('Nome do animal'), parseToKeyboard(faker.person.firstName()));
		await user.type(screen.getByLabelText('Mensagem'), parseToKeyboard(faker.lorem.paragraphs()));

		expect(form).toBeValid();

	});

	it('Submit button should be enabled when all input are filled up with valid value', async () => {
		const user = userEvent.setup();
		render(<SentMessagePage />, {wrapper: AllTheProvidersAutheticated});

		const submit = screen.getByRole('button');

		expect(submit).toBeDisabled();

		await user.type(screen.getByLabelText('Nome'), parseToKeyboard(faker.person.fullName()));
		await user.type(screen.getByLabelText('Telefone'), parseToKeyboard(faker.phone.number('## #.####-####')));
		await user.type(screen.getByLabelText('Nome do animal'), parseToKeyboard(faker.person.firstName()));
		await user.type(screen.getByLabelText('Mensagem'), parseToKeyboard(faker.lorem.paragraphs()));

		expect(submit).toBeEnabled();

	});

	it('should submit form and redirect to login page', async () => {
		const user = userEvent.setup();
		render(<SentMessagePage />, {wrapper: AllTheProvidersAutheticated});

		const submit = screen.getByRole('button');

		await user.type(screen.getByLabelText('Nome'), parseToKeyboard(faker.person.fullName()));
		await user.type(screen.getByLabelText('Telefone'), parseToKeyboard(faker.phone.number('## #.####-####')));
		await user.type(screen.getByLabelText('Nome do animal'), parseToKeyboard(faker.person.firstName()));
		await user.type(screen.getByLabelText('Mensagem'), parseToKeyboard(faker.lorem.paragraphs()));

		await user.click(submit);
		expect(await screen.findByText(data.pets_msg)).toBeInTheDocument();


	});

});