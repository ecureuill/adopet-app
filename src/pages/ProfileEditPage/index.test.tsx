import { faker } from '@faker-js/faker/locale/pt_BR';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/';
import ProfileEditPage from '.';
import * as reactQuery from '../../services/query-client';
import { generateTutorData } from '../../__test__/utils/generate';
import { parseToKeyboard } from '../../__test__/utils/parser';
import { AllTheProvidersAutheticated } from '../../__test__/utils/wrapper';

describe('ProfileEdit page', () =>{

	it('Should render a form', () => {
		render(<ProfileEditPage />, { wrapper: AllTheProvidersAutheticated});

		expect(screen.queryAllByRole('form')).toHaveLength(1);
	});

	it('Should render a form with label', () => {
		render(<ProfileEditPage />, { wrapper: AllTheProvidersAutheticated});

		expect(screen.getByLabelText('Perfil')).toBeInTheDocument();
	});

	it('Should render a input[type=file] Foto', () => {
		render(<ProfileEditPage />, { wrapper: AllTheProvidersAutheticated});

		const input = screen.getByLabelText('Foto', {selector: 'input'});

		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('type', 'file');
	});

	it('Should render a paragraph [Clique na foto para editar]', () => {
		render(<ProfileEditPage />, { wrapper: AllTheProvidersAutheticated});

		expect(screen.getByText('Clique na foto para editar', {selector: 'p'})).toBeInTheDocument();
	});

	it('Should render a paragraph [Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.]', () => {
		render(<ProfileEditPage />, { wrapper: AllTheProvidersAutheticated});

		expect(screen.getByText('Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.', {selector: 'p'})).toBeInTheDocument();
	});

	test.each([
		['Nome'],
		['Telefone'],
		['Cidade'],
		['Sobre'],
	])('Should render a input %s', (key) => {
		render(<ProfileEditPage />, { wrapper: AllTheProvidersAutheticated});

		expect(screen.getByRole('textbox', {name: key})).toBeInTheDocument();
	});

	test.each([
		['Nome'],
		['Telefone'],
		['Cidade'],
	])('Should render a required input %s', (key) => {
		render(<ProfileEditPage />, { wrapper: AllTheProvidersAutheticated});

		expect(screen.getByRole('textbox', {name: key})).toBeInTheDocument();
	});

	it('Should input sobre not to be required', () => {
		render(<ProfileEditPage />, { wrapper: AllTheProvidersAutheticated});

		expect(screen.getByRole('textbox', {name: 'Sobre'})).not.toBeRequired();
	});

	test.each([
		['Nome'],
		['Telefone'],
		['Cidade'],
	])('Should input %s render as invalid if value is null', (key) => {
		const getTutor = jest.spyOn(reactQuery, 'useTutorQuery').mockReturnValue({data: {data: generateTutorData({phone: null, city: null, name: null})}, status: 'success'} as any);
		
		render(<ProfileEditPage />, { wrapper: AllTheProvidersAutheticated});

		expect(screen.getByLabelText(key)).toBeInvalid();
	});

	test.each([
		['Nome'],
		['Telefone'],
		['Cidade'],
	])('Should input %s show errorMessage on Blur when not filled', async (key) => {
		const user = userEvent.setup();

		const getTutor = jest.spyOn(reactQuery, 'useTutorQuery').mockReturnValue({data: {data: generateTutorData({phone: null, city: null, name: null})}, status: 'success'} as any);

		render(<ProfileEditPage />, { wrapper: AllTheProvidersAutheticated});

		const input = screen.getByLabelText(key);
		await user.click(input);
		await user.tab(); 

		expect(input).toBeInvalid();
		expect(input).toHaveErrorMessage();
	});

	test.each([
		['Telefone', '999999'],
	])('Should input %s show errorMessage when filled with invalid value', async (key, value) => {
		const user = userEvent.setup();

		const getTutor = jest.spyOn(reactQuery, 'useTutorQuery').mockReturnValue({data: {data: generateTutorData({phone: null, city: null, name: null})}, status: 'success'} as any);
		
		render(<ProfileEditPage />, { wrapper: AllTheProvidersAutheticated});

		const input = screen.getByLabelText(key);
		await user.type(input, parseToKeyboard(value));
		await user.tab(); 

		expect(input).toBeInvalid();
		expect(input).toHaveErrorMessage();
	});

	it('form should be valid when all required input are filled up with valid value', async () => {
		const user = userEvent.setup();
		const getTutor = jest.spyOn(reactQuery, 'useTutorQuery').mockReturnValue({data: {data: generateTutorData({phone: null, city: null, name: null})}, status: 'success'} as any);
		
		render(<ProfileEditPage />, {wrapper: AllTheProvidersAutheticated});

		const form = screen.getByRole('form');

		expect(form).toBeInvalid();

		await user.type(screen.getByRole('textbox', {name: 'Nome'}), parseToKeyboard(faker.person.fullName()));
		await user.type(screen.getByRole('textbox', {name: 'Cidade'}), parseToKeyboard(faker.location.city()));
		await user.type(screen.getByRole('textbox', {name: 'Sobre'}), parseToKeyboard(faker.lorem.paragraphs()));
		await user.type(screen.getByRole('textbox', {name: 'Telefone'}), parseToKeyboard(faker.phone.number('## #####-####')));
		
		expect(form).toBeValid();

	});

	it('submit button should be enabled when all required input are filled up with valid value', async () => {
		const user = userEvent.setup();
		const getTutor = jest.spyOn(reactQuery, 'useTutorQuery').mockReturnValue({data: {data: generateTutorData({phone: null, city: null, name: null})}, status: 'success'} as any);
		
		render(<ProfileEditPage />, {wrapper: AllTheProvidersAutheticated});

		const button = screen.getByRole('button');

		expect(button).toBeDisabled();

		await user.type(screen.getByRole('textbox', {name: 'Nome'}), parseToKeyboard(faker.person.fullName()));
		await user.type(screen.getByRole('textbox', {name: 'Cidade'}), parseToKeyboard(faker.location.city()));
		await user.type(screen.getByRole('textbox', {name: 'Sobre'}), parseToKeyboard(faker.lorem.paragraphs()));
		await user.type(screen.getByRole('textbox', {name: 'Telefone'}), parseToKeyboard(faker.phone.number('## #####-####')));
		
		expect(button).toBeEnabled();

	});

	it('should submit form  when all required input are filled up with valid value and do not redirect', async () => {
		const user = userEvent.setup();
		const getTutor = jest.spyOn(reactQuery, 'useTutorQuery').mockReturnValue({data: {data: generateTutorData({phone: null, city: null, name: null})}, status: 'success'} as any);
		
		render(<ProfileEditPage />, {wrapper: AllTheProvidersAutheticated});

		const button = screen.getByRole('button');

		await user.type(screen.getByRole('textbox', {name: 'Nome'}), parseToKeyboard(faker.person.fullName()));
		await user.type(screen.getByRole('textbox', {name: 'Cidade'}), parseToKeyboard(faker.location.city()));
		await user.type(screen.getByRole('textbox', {name: 'Sobre'}), parseToKeyboard(faker.lorem.paragraphs()));
		await user.type(screen.getByRole('textbox', {name: 'Telefone'}), parseToKeyboard(faker.phone.number('## #####-####')));
		
		await user.click(button);
	});
});